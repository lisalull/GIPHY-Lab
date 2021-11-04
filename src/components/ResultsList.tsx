import Gif from "../models/Gif";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  gifArray: Gif[];
}

const ResultsList = ({ gifArray }: Props) => {
  return (
    <div className="ResultsList">
      <h2>Results</h2>
      {gifArray?.map((gif) => (
        <Result gif={gif} />
      ))}
    </div>
  );
};

export default ResultsList;
