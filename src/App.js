import React, { useEffect, useState } from "react";
import "./App.css";
import Employees from "./components/Employees/Employees";
import EmployeesBirth from "./components/EmployeesBirth/EmployeesBirth";
import LeftHeader from "./components/LeftHeader/LeftHeader";
import RightHeader from "./components/RightHeader/RightHeader";
import { useDispatch } from "react-redux";

const App = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
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
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
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
