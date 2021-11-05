import axios from "axios";
import Gif from "../models/Gif";
import GiphyResponse from "../models/GiphyResponse";
import SingleGiphyResponse from "../models/SingleGiphyResponse";

const key = process.env.REACT_APP_GIPHY_KEY || "";

//function to get trending gifs

export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/trending", {
      params: {
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};

//function to get gifs by search term

export const searchGifs = (searchTerm: string): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: key,
        q: searchTerm,
      },
    })
    .then((response) => {
      return response.data;
    });
};

// function to get a gif by id
export const getGifById = (id: string): Promise<SingleGiphyResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/${encodeURIComponent(id)}`, {
      params: { api_key: key },
    })
    .then((response) => {
      return response.data;
    });
};
