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

  // get a single user

  // Get user repos

  return (
    <GithubContext.Provider
      value={{
        ...state,
        // getUser,
        // searchUsers,
        dispatch,
        // getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
