import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState, useEffect } from "react";
import data from "./json/Imgenav.json";
import holodata from "./json/hololive.json";
import axios from "axios";

function App() {
  const [imgesicon, setImagesicon] = useState([]);
  const holodatabase = holodata.hololive;
  useEffect(() => {
    const fetch = async () => {
      const socialMediaList = data.data;
      setImagesicon(socialMediaList);
      // const mydataholo = await getRes();
      // console.log(mydataholo.items);
    };
    fetch();
  }, []);

  const getRes = () => {
    const key = "AIzaSyCqmZfh3ujTcbc0m2Y_WLNKnZyQTrun0u8";
    const channelID = holodatabase.Botan.channelId;
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&part=id&channelId=${channelID}A&eventType=live&maxResults=2&type=video&key=${key}`;
    return axios
      .get(url)
      .then((value) => value.data)
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="Container">
      {imgesicon.length > 0 ? <Header dataimgelish={imgesicon} /> : <nav></nav>}
      <Mainpage />
    </div>
  );
}

export default App;
