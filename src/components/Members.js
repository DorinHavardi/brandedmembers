import React, {useContext} from "react";
import { DataContext } from "../DataContext";

export default function Members() {
  const { user, removeFromMembers } = useContext(DataContext);
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {user.map((user) => (
          <tr key={user.id}>
            <td>{`#${user.id}`}</td>
            <td>{`${user.email}`}</td>
            <td>{`${user.age}`}</td>
            <td>
              <button style={{marginLeft: "50%"}}
                onClick={() => {
                  removeFromMembers(user);
                }}
              >
                Remove User
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
