import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Gif from "../models/Gif";
import { getGifById } from "../services/GiphyService";
import "./Details.css";
import Result from "./Result";

interface RouteParams {
  id: string;
}

const Details = () => {
  const [gif, setGif] = useState<Gif>();
  const id = useParams<RouteParams>().id;
  useEffect(() => {
    getGifById(id).then((response) => {
      setGif(response.data);
    });
  }, [id]);

  return (
    <div className="Details">
      <Result gif={gif!} />
    </div>
  );
};

export default Details;
