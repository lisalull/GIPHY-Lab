import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <div className="Result">
      <p>{gif.title}</p>
      <img src={gif.images.original.url} alt="" />
      <p className="link">
        <a href={gif.url}>Link to Giphy</a>
      </p>
    </div>
  );
};

export default Result;
