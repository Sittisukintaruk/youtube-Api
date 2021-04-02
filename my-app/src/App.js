import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import data from "./json/Imgenav.json";
import dataset from './setData' ; 


function App() {
 

  const [imgesicon, setImagesicon] = useState([]);
  const [videos, setVideos] = useState([]);
  const [datavideo, setDataVideo] = useState(dataset);
  //  ต้องการ ภาพปกของวิดีโอเท่านั้น ซึ่งได้จาก path Search ของ Api

  useEffect(() => {
    const socialMediaList = data.data;
    setImagesicon(socialMediaList);
    // console.log(datavideo);
  }, []);

  return (
    <div className="Container">
      {imgesicon.length > 0 ? <Header dataimgelish={datavideo} /> : <nav></nav>}
      <Mainpage />
    </div>
  );
}

export default App;
