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
  // const apiKey = process.env.REACT_APP_YOUTOUBE_API;

  const [videos, setVideos] = useState(dataset.hololive);
  const [listlives, setListLives] = useState([]);

  let dataview = dataset.hololive;
  useEffect(() => {
    const setlist = (value, channale) => {
      const livevideo = value;
      const id = livevideo.id.videoId;
      const thumbnails = livevideo.snippet.thumbnails.high.url;
      const title = livevideo.snippet.title;
      channale.video = {
        id: id,
        thumbnails: thumbnails,
        title: title,
      };
      listlives.length > 0
        ? setListLives([...listlives, channale])
        : setListLives([channale]);
    };
    const fecteApi = async (channaleId) => {
      const data = await axios.get(
        `http://localhost:3004/hololive?id=${channaleId}`
      );
      const channel = dataview.find((res) => res.channelId === channaleId);
      channel.liveBroadcastContent = !channel.liveBroadcastContent;
      data.data[0].items.length > 0
        ? setlist(data.data[0].items[0], channel)
        : console.log("no data");
    };

    fecteApi("UCdyqAaZDKHXg4Ahi7VENThQ");
  }, []);

  return (
    <div className="Container">
      <Header dataimgelish={listlives} />
      {listlives.length > 0 && console.log(listlives)}
      <Mainpage />
    </div>
  );
}

export default App;
