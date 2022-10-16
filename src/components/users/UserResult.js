import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import Spinner from "../shared/Spinner";
import UserItem from "./UserItem";

function UserResult() {
  const { users, loding } = useContext(GithubContext);

  return !loding ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user, id) => (
        <UserItem key={id} user={user} />
      ))}
    </div>
  ) : (
    <Spinner />
  );
}

export default UserResult;
