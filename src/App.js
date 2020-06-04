import React from "react";
import "./App.css";
import ShowAfp from "./components/ShowAfp";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Rentabilidad Real de los fondos de Pensiones</h1>
      </div>
      <div className="container-info">
        <ShowAfp />
      </div>
    </div>
  );
}

export default App;
