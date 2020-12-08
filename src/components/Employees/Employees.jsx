import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Employees.css";

const Employees = () => {
  const dispatch = useDispatch();
  let users = useSelector((state) => state.users);

  users = users.reduce((arrUsers, user) => {
    let firstLetter = user.lastName[0];
    arrUsers[firstLetter]
      ? arrUsers[firstLetter].push(user)
      : (arrUsers[firstLetter] = [user]);

    return arrUsers;
  }, {});

  let sortedUsers = {};

  Object.keys(users)
    .sort()
    .forEach(function (val) {
      sortedUsers[val] = users[val];
    });

  let changeStatusUser = (item) => {
    item.checked = !item.checked;
    dispatch({ type: "CHANGE_STATUS_USER", user: item });
  };

  return (
    <div className="items-wrapper">
      {Object.entries(sortedUsers).map(([key, value]) => (
        <div className="item">
          <div className="item-key">{key}</div>
          <div className="item-value">
            {value.map((item) => (
              <div>
                {`${item.lastName} ${item.firstName}`}
                <input type="checkbox" checked={item.checked} onClick={() => changeStatusUser(item)} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Employees;
