import { useState } from "react";
import PetList from "./PetList";
import "./Employee.css";

export const Employee = ({ employee }) => {
  const [showPets, setShowPets] = useState(false);

  function togglePets() {
    setShowPets(!showPets);
  }

  return (
    <article className="employee">
      <h3>
        {employee.prefix ? employee.prefix : ""} {employee.firstName}{" "}
        {employee.lastName} {employee.postfix ? employee.postfix : ""}{" "}
      </h3>
      <h4>{employee.title}</h4>
      <button onClick={togglePets}>
        {!showPets ? "Show Pets" : "Hide Pets"}
      </button>
      {showPets ? <PetList employeeId={employee.id} /> : null}
    </article>
  );
};

export default Employee;
