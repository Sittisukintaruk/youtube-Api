import React from "react";
import holodata from "./json/hololive.json";

const setData = () => {
  let ar = [
    {
      data: holodata.hololive.rusia,
    },
    {
      data: holodata.hololive.Aqua,
    },
    { data: holodata.hololive.Botan },
    { data: holodata.hololive.Kanata },
  ];
  

  return ar ;
};



export default setData;
