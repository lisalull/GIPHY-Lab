import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Gif from "../models/Gif";
import GiphyResponse from "../models/GiphyResponse";
import { getTrendingGifs, searchGifs } from "../services/GiphyService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);

  //useLocation().search ~ the way to get the part of the URL after the question mark ex: ?term=cat
  //new URLSearchParams(useLocation().search) ~ object representation of your query string parameters
  //.get("PROVIDE A KEY and get the value for that key")
  const searchTerm: string | null = new URLSearchParams(
    useLocation().search
  ).get("term");

  useEffect(() => {
    if (!searchTerm) {
      getTrendingGifs().then((response) => {
        setGifs(response.data);
      });
    } else {
      searchGifs(searchTerm).then((response) => {
        setGifs(response.data);
      });
    }
  }, [searchTerm]);

  return (
    <div className="Main">
      <SearchForm />
      <ResultsList gifArray={gifs} />
    </div>
  );
};

export default Main;
