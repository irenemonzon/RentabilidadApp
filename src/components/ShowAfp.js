import React from "react";
import data from "./data.json";
import "./ShowAfp.css";

const ShowAfp = () => {
  const type = [
    { id: 1, name: "fondo A" },
    { id: 2, name: "fondo B" },
    { id: 3, name: "fondo C" },
    { id: 4, name: "fondo D" },
    { id: 5, name: "fondo E" }
  ];

  return (
    <div className="container-type">
      {type.map(element => (
        <div className="items" key={element.id}>
          <div className="title-type">
            <h3>{element.name}</h3>
          </div>
          {data.map(el => (
            <div className="info-data" key={el.id}>
              <p>{el.afp}</p>

              <p>{el.rentabilidad}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default ShowAfp;
