import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import dataset from "./setData";
import axios from "axios";

function App() {


  useEffect(() => {
    
  }, []);

  return (
    <div className="Container">
      <Header dataimgelish={dataset()} />
      <Mainpage />
    </div>
  );
}

export default App;
