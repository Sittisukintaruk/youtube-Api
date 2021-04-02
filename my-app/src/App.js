import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import data from "./json/Imgenav.json";
import holodata from "./json/hololive.json";
import axios from "axios";

function App() {
  const [imgesicon, setImagesicon] = useState([]);
  const [videos, setVideos] = useState([]);
  const [imgedata, setImgedata] = useState(holodata.hololive);
  let arry = [
    imgedata.rusia.channelId,
    imgedata.Botan.channelId,
    imgedata.Kanata.channelId,
    imgedata.Aqua.channelId
  ];

  useEffect(() => {
    /*  const getRes = async () => {
      const key = "AIzaSyCqmZfh3ujTcbc0m2Y_WLNKnZyQTrun0u8";
      const holodatabase = holodata.hololive;
      const channelID = holodatabase.Kanata.channelId;
      const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&channelId=${channelID}&eventType=live&maxResults=2&type=video&key=${key}`;
      return await axios
        .get(url)
        .then((value) => value.data)
        .catch((err) => {
          console.error(err);
        });
    };
    const fetch = async () => {
      const socialMediaList = data.data;
      setImagesicon(socialMediaList);
      const mydataholo = await getRes();
      mydataholo.items.length > 0 ? setVideos(mydataholo.items[0].id.videoId)
        : console.log("done have a data");
    }; */

    const socialMediaList = data.data;
    setImagesicon(socialMediaList);
    // fetch();
  }, []);

  return (
    <div className="Container">
      {imgesicon.length > 0 ? <Header dataimgelish={imgesicon} /> : <nav></nav>}
      <Mainpage />
    </div>
  );
}

export default App;
