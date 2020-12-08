import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import "./EmployeesBirth.css";

const EmployeesBirth = () => {
  let users = useSelector((state) => state.users);

  users = users.reduce((newUsersData, userItem) => {
    let monthName = moment(userItem.dob).format("MMMM");

    if (userItem.checked) {
      newUsersData[monthName]
        ? newUsersData[monthName].push(userItem)
        : (newUsersData[monthName] = [userItem]);
    }

    return newUsersData;
  }, {});

  return (
    <div className="right-content">
      <div className="lists-wrapper">
        {Object.entries(users).map(([key, value]) => (
          <div className="elem">
            <div className="elem-key">{value.length ? key : null}</div>
            <div className="elem-value">
              {value.map((item) => {
                return item.checked ? (
                  <ul>
                    <li>
                      {`${item.lastName} ${item.firstName} - `}
                      {moment(item.dob).format("DD MMMM, YYYY") + " year"}
                    </li>
                  </ul>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeesBirth;
