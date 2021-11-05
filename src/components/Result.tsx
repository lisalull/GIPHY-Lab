import { useContext } from "react";
import { useHistory } from "react-router";
import FavoritesContext from "../context/FavoritesContext";
import Gif from "../models/Gif";
import "./Result.css";

interface Props {
  gif: Gif;
}

const Result = ({ gif }: Props) => {
  const history = useHistory();

  const seeDetails = (id: string): void => {
    history.push(`/gifs/${encodeURIComponent(id)}/details`);
  };

  const { addFavorite, removeFavorite, isFav } = useContext(FavoritesContext);

  return (
    <li className="Result">
      <h3>{gif?.title}</h3>
      <img
        src={gif?.images.original.url}
        alt=""
        onClick={() => seeDetails(gif.id)}
      />
      <p className="link">
        <a href={gif?.url}>Link to Giphy</a>
      </p>
      {/* <i className="fas fa-heart"></i> */}
      {!isFav(gif?.id) ? (
        <i className="fas fa-heart" onClick={() => addFavorite(gif)}></i>
      ) : (
        <i
          className="fas fa-heart favorite"
          onClick={() => removeFavorite(gif.id)}
        ></i>
      )}
    </li>
  );
};

export default Result;
