import React from "react";
import data from "./data.json";
import "./ShowAfp.css";
import SelecType from "./SelectType.js";

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
      <SelecType />
      {type.map(element => (
        <div className="items" key={element.id}>
          <div className="title-type">
            <h3>{element.name}</h3>
          </div>
          <div className="container-infodata">
            {data.map(info => (
              <div className="info-data" key={info.id}>
                <p>{info.afp}</p>

                <div className="container-input">
                  <div className="input">
                    <input
                      style={{ backgroundColor: info.color, width: info.width }}
                    />
                  </div>
                </div>
                <p>{info.rentabilidad}%</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShowAfp;
