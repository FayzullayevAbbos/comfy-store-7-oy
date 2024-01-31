import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

export default () => {
  const [data, setData] = useState([]);
  const url = useSelector(stete => stete.url)

  

  // /////
  const [inp, setInp] = useState("");

  // /////

  async function api(link) {
    const res = await fetch(link);
    const d = await res.json();
    setData(d);
  }

 

  useEffect(() => {
    api(url);
  }, [url]);
  console.log(data);
  return {
    api,
    data,
    setData,
    inp,
    setInp,
   
  };
};
