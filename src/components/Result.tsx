import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  return (
    <li className="Result">
      <h3>{gif.title}</h3>
      <img src={gif.images.original.url} alt="" />
      <p className="link">
        <a href={gif.url}>Link to Giphy</a>
      </p>
    </li>
  );
};

export default Result;
