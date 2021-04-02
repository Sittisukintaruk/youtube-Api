import "./style/App.css";
import Header from "./componet/Header";
import Mainpage from "./componet/Mainpage";
import { useState } from "react";

import dataset from "./setData";

function App() {
  const [datavideo, setDataVideo] = useState(dataset);
  //  ต้องการ ภาพปกของวิดีโอเท่านั้น ซึ่งได้จาก path Search ของ Api

  return (
    <div className="Container">
      {datavideo.length > 0 ? <Header dataimgelish={datavideo} /> : <nav></nav>}
      <Mainpage />
    </div>
  );
}

export default App;
