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
  // const apiKey = process.env.REACT_APP_YOUTOUBE_API;
    
  const [listlives, setListLives] = useState([]);

  useEffect(() => {
    let arts = [];
    const dataview = dataset.hololive;
    const data = dataview.map((value) => value.channelId);
    const setlist = (value, channale) => {
      const livevideo = value;
      const id = livevideo.id.videoId;
      const thumbnails = livevideo.snippet.thumbnails.high.url;
      const title = livevideo.snippet.title;
      channale.liveBroadcastContent = !channale.liveBroadcastContent;
      channale.video = {
        id: id,
        thumbnails: thumbnails,
        title: title,
      };
      return channale;
    };

    const fecteApi = (channaleId = []) => {
      channaleId.map(async (value) => {
        const url = `http://localhost:3004/hololive?id=${value}`;
        const dataapi = await axios.get(url);
        const channel = dataview.find((res) => res.channelId === value);
        if (dataapi.data.length > 0) {
          if (dataapi.data[0].items.length > 0) {
            const dataformath =  setlist(dataapi.data[0].items[0], channel);
            arts.push(dataformath);
            setListLives([...arts])
          } else {
            console.log(`id: ${value} is not steam`);
          }
        }
      });
    };

    fecteApi(data);

    return () => {};
  }, []);

  return (
    <div className="Container">
      <Header dataimgelish={listlives} />
      <Mainpage />
    </div>
  );
}

export default App;
