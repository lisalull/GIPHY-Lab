import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to={"/"}>
        <h1>GIF App</h1>
      </Link>
      <Link to={"/gifs/favorites"}>Favorites</Link>
      <p>
        Powered By{" "}
        <span>
          <a href="https://developers.giphy.com/">GIPHY</a>
        </span>
      </p>
    </header>
  );
};

export default Header;
