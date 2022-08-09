import React, { useState } from "react";
import Button from "@mui/material/Button";

const Form = () => {
  const [fruta, setFruta] = React.useState("");
  const [descripcion, setDescripcion] = React.useState("");

  const inicitalState = [
     { id: 0, frut: "", description: "" },
  ]

  
  const [list, setList] = useState([]);

  const [count, setCount] = useState(1);

  const add = (count) =>{
    return setCount(count + 1)
  }

  const createList = () => {
    setList([
      ...list,
      { id: count, frut: fruta, description: descripcion},
    ]);
  };

  const saveData = (e) => {
    e.preventDefault();

    if (!fruta.trim()) {
      console.log("esta vacio fruta");
      return;
    }

    if (!descripcion.trim()) {
      console.log("esta vacio descripcion");
      return;
    }

    //console.log("procesando datos..." + fruta + descripcion);
    add()
    createList()

    e.target.reset();
    setFruta("");
    setDescripcion("");
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={saveData}>
        <input
          type="text"
          placeholder="Ingrese Fruta"
          className="form-control mb-2"
          onChange={(e) => setFruta(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingrese Descripcion"
          className="form-control mb-2"
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="btn btn-primary btn-block" type="submit">
          Agregar
        </button>
      </form>

      {list.map((item) => (
        <h1 key={item.id}>{item.id}.- {item.frut}, {item.description}</h1>
      ))}

      <Button color="primary" variant="contained" onClick={() => createList()}>
        Menus
      </Button>
    </div>
  );
};
export default Form;
