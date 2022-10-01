import { useEffect, useState } from "react";

function UserResult() {
  const [users, setUsers] = useState([]);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();

    console.log(data);
    setUsers(data);
    setLoding(false);
  };
  return !loding ? (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user, id) => (
        <h3 key={id}>{user.login}</h3>
      ))}
    </div>
  ) : (
    <h1>Loding</h1>
  );
}

export default UserResult;
