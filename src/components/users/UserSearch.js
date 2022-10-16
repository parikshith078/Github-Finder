import { useContext, useState } from "react";
import { AlertContext } from "../../context/AlertContext";
import GithubContext from "../../context/GithubContext";
import { searchUsers } from "../../context/GithubActions";

function UserSearch() {
  const [text, setText] = useState("");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  const handelSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Plase enter the name", "error");
    } else {
      dispatch({ type: "SET_LODING" });

      const data = await searchUsers(text);
      dispatch({ type: "GET_USERS", payload: data });

      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 md:grid-cols-2 mb-8 gap-8 lg:grid-cols-2">
      <div>
        <form onSubmit={(e) => handelSubmit(e)}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                placeholder="search"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <button
          className="btn btn-ghost btn-lg"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default UserSearch;
