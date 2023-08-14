import { useState, useEffect } from "react";
export const PetList = ({ employeeId }) => {
  const petsApi = "https://one0-2-vet-api.onrender.com/api/pets";

  const [pets, setPets] = useState([]);
  const [hasData, setHasData] = useState(false)

  useEffect(() => {
    fetch(petsApi)
      .then((data) => data.json())
      .then((json) => {
        const employeePets = json.filter(
          (pet) => pet.employeeId === employeeId
        );
        setPets(employeePets);
        setHasData(true)
      })
      .catch((err) => {
        console.log(err);
        setHasData(true)
      });
  }, [employeeId]);

  return (
    <aside className="pets-list">
      {hasData ? (
        pets.length > 0 ? (
          <p>{pets.map((pet) => pet.name).join(", ")}</p>
        ) : (
          <p>No pets listed for this employee.</p>
        )
      ) : null}
    </aside>
  );
};

export default PetList;
