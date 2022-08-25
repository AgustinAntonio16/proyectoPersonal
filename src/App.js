import React, { useState } from "react";
import Button from "@mui/material/Button";

import Jessy from "./Ass/shalltear.jpg"
import RiasGremory from "./Ass/rias.jpg"

import "./App.css";
import "./CSS/Styles.css";
import Count from "./componets/Count";
import Saludo from "./componets/Saludo";
import Despedida from "./componets/Despedida";
import List from "./componets/List";
import Form from "./componets/Form";
import Space from "./componets/Space";
import Coments from "./componets/Coments";
import CssCopy from "./componets/CssCopy";

function App() {
  const [show, setShow] = useState("false");

  const display = () => setShow(!show);
  return (
    <div className="App">
      <Count />
      {show ? <Saludo /> : <Despedida />}
      <Button variant="contained" onClick={() => display()}>
        Show
      </Button>

      <List />

      <Space />

      <Form />

      <h3>Coments</h3>
      <Coments
        url_ = {Jessy}
        name={"Raul Agustín"}
        coment={"Es una buen caja de comentarios"}
      />

      <Coments
      url_ = {RiasGremory}
        
        name={"Yazmin Hernandez"}
        coment={"Es una buen caja de comentarios"}
      />

      <Coments
        url_ = {"https://picsum.photos/700/400?random"}
        name={"Panfilo paes"}
        coment={"Es una buen caja de comentarios"}
      />

      <CssCopy/>
    </div>
  );
}

export default App;
