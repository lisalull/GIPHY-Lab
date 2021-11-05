import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import ResultsList from "./ResultsList";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <div className="Favorites">
      <ResultsList gifArray={favorites} />
    </div>
  );
};

export default Favorites;
