import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import data from "./json/Imgenav.json";
import axios from "axios";

function App() {
  const [imgesicon, setImagesicon] = useState([]);

  useEffect(() => {
    const socialMediaList = data.data;
    setImagesicon(socialMediaList);
  }, []);

  return (
    <div className="Container">
      {imgesicon.length > 0 ? <Header dataimgelish={imgesicon} /> : <div></div>}
      <Mainpage />
    </div>
  );
}

export default App;
