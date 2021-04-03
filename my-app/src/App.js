import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import dataset from "./setData";
import axios from "axios";

function App() {
  const [videolish, setVideolish] = useState([]);
  const [data, setData] = useState(dataset);

  return (
    <div className="Container">
      <Header dataimgelish={data} />
      <Mainpage />
    </div>
  );
}

export default App;
