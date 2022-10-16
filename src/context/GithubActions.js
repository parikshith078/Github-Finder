import axios from "axios";

const github = axios.create({
  baseURL: process.env.REACT_APP_GITHUB_URL,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export const searchUsers = async (text) => {
  // dispatch({ type: "SET_LODING" });

  const res = await github.get(`/search/users?q=${text}`);
  return res.data.items;
  // dispatch({ type: "GET_USERS", payload: data.items });
};

export const getUser = async (login) => {
  // dispatch({ type: "SET_LODING" });

  const res = await github.get(`/users/${login}`);
  if (res.status === 404) {
    window.location = "/notfound";
  } else {
    return res.data;
    //   dispatch({ type: "GET_USER", payload: data });
  }
};

export const getRepos = async (login) => {
  // dispatch({ type: "SET_LODING" });

  const res = await github.get(`/users/${login}/repos`);
  if (res.status === 404) {
    window.location = "/notfound";
  } else {
    return res.data;
    // console.log(data);
    //   dispatch({ type: "GET_REPOS", payload: data });
  }
};
