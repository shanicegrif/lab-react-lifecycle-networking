import React from "react";
import Employee from "./Employee";
import "./EmployeeList.css";
import { useState, useEffect } from "react";

export const EmployeeList = () => {
  const employeeApi = "https://one0-2-vet-api.onrender.com/api/employees";
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch(employeeApi)
      .then((data) => data.json())
      .then((json) => {
        setEmployees(json);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main>
      <h2>All Staff</h2>
      <section className="employee-list">
        {employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </section>
    </main>
  );
};

export default EmployeeList;
