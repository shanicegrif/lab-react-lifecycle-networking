import { useState, useEffect } from "react";
export const PetList = ({ employeeId }) => {
  const petsApi = "https://one0-2-vet-api.onrender.com/api/pets";

  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(petsApi)
      .then((data) => data.json())
      .then((json) => {
        const employeePets = json.filter(
          (pet) => pet.employeeId === employeeId
        );
        setPets(employeePets);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <aside className="pets-list">
      {pets.length > 0 ? (
        <p>{pets.map((pet) => pet.name).join(", ")}</p>
      ) : (
        <p>No pets listed for this employee.</p>
      )}
    </aside>
  );
};

export default PetList;
