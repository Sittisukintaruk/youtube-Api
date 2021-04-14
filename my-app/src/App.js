import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import dataset from "./json/hololive.json";
import axios from "axios";

function App() {
  //'https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCUKD-uaobj9jiqB-VXt71mA&eventType=live&maxResults=1&order=date&type=video&key=[YOUR_API_KEY]'
  //!หาก่อนว่า api get ได้มีช่องที่กำลัง live อยู่
  //?ถ้ามีการ live จะบันทึกและเก็บไว้ใน array objcet ที่สร้างใหม่
  // array object จะประกอบด้วยรายละเอียดช่องและวิดีโอที่กำลัง live

  const [videos, setVideos] = useState(dataset.hololive);
  const [listlives, setListLives] = useState([]);
  const apiKey = process.env.REACT_APP_YOUTOUBE_API;

  




  return (
    <div className="Container">
      <Header dataimgelish={videos} />
      {listlives.length > 0 && console.log(listlives)}
      <Mainpage />
    </div>
  );
}

export default App;
