import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState } from "react";
import dataset from "./setData";

function App() {
  const data = dataset();
  const [videolish, setVideolish] = useState();

  //  ต้องการ ภาพปกของวิดีโอเท่านั้น ซึ่งได้จาก path Search ของ Api

  return (
    <div className="Container">
      <Header dataimgelish={data} />
      <Mainpage />
    </div>
  );
}

export default App;
