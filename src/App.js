import React, { useEffect } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import EmployeesBirth from "./components/EmployeesBirth/EmployeesBirth";
import LeftHeader from "./components/LeftHeader/LeftHeader";
import RightHeader from "./components/RightHeader/RightHeader";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let savedUsers = window['localStorage'].getItem('SAVED_ITEMS');
    const users = savedUsers ? JSON.parse(savedUsers) : [];
    if (users?.length) {
      dispatch({ type: "SET_USERS", users });
    } else {
      fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then((res) => res.json())
      .then(
        (result) => {
          result = result.map((item) => {
            return {
              ...item,
              checked: false,
            };
          });
          dispatch({ type: "SET_USERS", users: result });
        }
      );
    }
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <LeftHeader />
      <RightHeader />
      <Employees />
      <EmployeesBirth />
    </div>
  );
};

export default App;
