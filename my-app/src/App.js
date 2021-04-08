import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import dataset from "./setData";
import axios from "axios";

function App() {
  const [rusia, Aqua, Botan, Kanata] = dataset();
  const [videolish, setVideolish] = useState([]);
  const [rusiaVideo, setRusiaVideo] = useState(rusia.data);

  useEffect(() => {
    // const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&channelId=UCK9V2B22uJYu3N7eR_BT9QA&eventType=live&type=video&key=AIzaSyCqmZfh3ujTcbc0m2Y_WLNKnZyQTrun0u8';
    // await axios(url).then(value => value.data.items.length > 0 ? setRusiaVideo({...rusiaVideo.data,...rusiaVideo.data.videos.videoId = value.data.items[0].id.videoId}):false)
    // .catch(e => console.log(e));
    // setRusiaVideo({ ...rusiaVideo, datameged });
    // setRusiaVideo(newrusia);
    // console.log(rusiaVideo);
    const fecth = () => {
      setRusiaVideo({
      ...rusia.data,
      ...rusia.data.videos.videoId = "beer",
    });
    console.log(rusiaVideo);
    }
    fecth();
  }, []);

  return (
    <div className="Container">
      <Header dataimgelish={dataset()} />
      <Mainpage />
    </div>
  );
}

export default App;
