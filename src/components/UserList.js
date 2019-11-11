import React from "react";

function UserList({ userData,switchUser }) {
  return (
    <div id="style-2" className="user-scrollbar">
      {userData.map((users,index) => {
        return (
          <div key={users+index}>
            <a href="#" onClick={()=>switchUser(users)}>{users.userName}</a>
          </div>
        );
      })}
    </div>
  );
}
export default UserList;
