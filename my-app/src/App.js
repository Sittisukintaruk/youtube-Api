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
  let array = [];
  useEffect(() => {
    checkLive();
  }, []);
  const checkLive = () => {
    const apiKey = process.env.REACT_APP_YOUTOUBE_API;
    let Url;
    // setVideos([...videos,bota]);
    videos.map(async (value, number) => {
      // Url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${value.channelId}&eventType=live&maxResults=1&order=date&type=video&key=${apiKey}`;
      Url = "http://localhost:3004/hololive";
      axios
        .get(Url)
        .then(
          (res) =>
            res.data[number].channelTitle === value.channelTitle &&
            res.data[number]
        )
        .then((re) => array.push(re))
        .catch((e) => console.log(e));
    });
    setListLives(array);
    //   .then((res) =>
    //   res.data.items.length > 0
    //     ? res.data.items[0]
    //     : console.log("no video live now!")
    // )
    // .then((item) => ({
    //   videoID: value.channelTitle,
    //   channalName: value.channelTitle,
    //   channalThumbnails: value.thumbnails,
    //   videoThumbnails: value.channelTitle,
    //   liveStartAt: value.channelTitle,
    // }))
    // .catch((e) => console.log(e));

    // const newArray = videos.map((value) => ({
    //   videoID: value.channelId,
    //   channalName: value.channelTitle,
    //   channalThumbnails: value.thumbnails,
    //   videoThumbnails: value.thumbnails,
    //   liveStartAt: value.name,
    // }));
    // setListLives(newArray);
  };

  return (
    <div className="Container">
      <Header dataimgelish={videos} />
      {listlives.length > 0 && console.log(listlives)}
      <Mainpage />
    </div>
  );
}

export default App;
