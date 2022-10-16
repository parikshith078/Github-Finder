import { createContext, useReducer } from "react";
import GitReducer from "./GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GitReducer, {
    users: [],
    singleUser: {},
    repos: [],
    loding: false,
  });

  const searchUsers = async (text) => {
    dispatch({ type: "SET_LODING" });

    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    dispatch({ type: "GET_USERS", payload: data.items });
  };

  // get a single user
  const getUser = async (login) => {
    dispatch({ type: "SET_LODING" });

    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();
      dispatch({ type: "GET_USER", payload: data });
    }
  };

  // Get user repos
  const getRepos = async (login) => {
    dispatch({ type: "SET_LODING" });

    const res = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}/repos`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    if (res.status === 404) {
      window.location = "/notfound";
    } else {
      const data = await res.json();
      console.log(data);
      dispatch({ type: "GET_REPOS", payload: data });
    }
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loding: state.loding,
        repos: state.repos,
        getUser,
        singleUser: state.singleUser,
        searchUsers,
        dispatch,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
