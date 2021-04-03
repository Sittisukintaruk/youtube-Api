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

  // { เมื่อช่องไม่ได้ทำการ live
  //   "kind": "youtube#searchListResponse",
  //   "etag": "OExP0lwxtTNvVryW14oT1hGh2FA",
  //   "regionCode": "TH",
  //   "pageInfo": {
  //     "totalResults": 0,
  //     "resultsPerPage": 0
  //   },
  //   "items": []
  // }
  //  ต้องการ ภาพปกของวิดีโอเท่านั้น ซึ่งได้จาก path Search ของ Api

  return ar;
};

export default setData;
