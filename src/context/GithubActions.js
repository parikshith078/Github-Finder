export const searchUsers = async (text) => {
  // dispatch({ type: "SET_LODING" });

  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );
  const data = await res.json();
  return data.items;
  // dispatch({ type: "GET_USERS", payload: data.items });
};

export const getUser = async (login) => {
  // dispatch({ type: "SET_LODING" });

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
    return data;
    //   dispatch({ type: "GET_USER", payload: data });
  }
};

export const getRepos = async (login) => {
  // dispatch({ type: "SET_LODING" });

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
    return data;
    // console.log(data);
    //   dispatch({ type: "GET_REPOS", payload: data });
  }
};
