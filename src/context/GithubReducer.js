const GitReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return { ...state, users: action.payload, loding: false };
    case "SET_LODING":
      return { ...state, loding: true };
    case "GET_USER":
      return { ...state, singleUser: action.payload, loding: false };
    case "GET_REPOS":
      return { ...state, repos: action.payload, loding: false };
    case "CLEAR":
      return {
        ...state,
        users: [],
      };
    default:
      return state;
  }
};

export default GitReducer;
