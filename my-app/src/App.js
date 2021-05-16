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
  //?ถ้าเกิดคลิกที่จะทำการเพิ่ม class css active แสดงสถา่นะว่า "ถูกคลิก" มีกรอบสีเขียว
  //?และจะทำการเพิ่มState แบบarray เช้ามา โดยข้อมูลที่ถูกเพิ่มจะอิงจาก channelid ของช่องที่ถูกกด
  //?ทำการhandler เมื่อ click และ เมื่อกดซ้ำจะเป็นการ unactive..
  // const apiKey = process.env.REACT_APP_YOUTOUBE_API;
  // setListLives([...arts]);

  const [listlives, setListLives] = useState([]);
  const [videos, setVideos] = useState([]);
  const MainEmtpy = () => {
    return (
      <div className="Main">
        <div className="group-video"></div>
      </div>
    );
  };

  useEffect(() => {
    const fecteApi = () => {
      const url = "http://localhost:3000/hololive";
      axios.get(url).then((result) => setListLives(result.data));
      
    };

    fecteApi();

    return () => {};
  }, []);

  const handlerClick = (videoId) => {
    const channelfilter = listlives.filter(
      (value) => value.channelId === videoId
    );
    setVideos([...videos, ...channelfilter]);
  };

  const handlerOncancle = (videoId) => {
    if (videos.length > 0) {
      const data = videos.filter((value) => value.channelId !== videoId);
      setVideos(data);
    } else {
      return;
    }
  };

  return (
    <div className="Container">
      {console.log(listlives)}
      {listlives.length > 0 ? (
        <Header
          dataimgelish={listlives}
          handlerOnclick={[handlerClick, handlerOncancle]}
        />
      ) : (
        <nav />
      )}
      {videos.length > 0 ? <Mainpage videos={videos} /> : <MainEmtpy />}
    </div>
  );
}

export default App;
