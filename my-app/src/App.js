import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import data from "./json/Imgenav.json";

function App() {
  const [imgesicon, setImagesicon] = useState("");
  // const showstate = () => {
  //   console.table(imgesicon);
  // };

  // showstate();
  useEffect(() => {
    const socialMediaList = data.data;
    setImagesicon(socialMediaList);
  }, []);

  return (
    <div className="Container">
      {/* /* {imgesicon !== "undefined" ? (
        <Header dataimgelish={imgesicon} />
      ) : (
        <div></div>
      )} */}
      {imgesicon.length > 0 ? <Header dataimgelish={imgesicon} /> : <div></div>}
      <Mainpage />
    </div>
  );
}

export default App;
