import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>GIF App</h1>
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
