import { FormEvent, useState } from "react";
import { useHistory } from "react-router";
import "./SearchForm.css";

const SearchForm = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    history.push(`/gifs/search?${new URLSearchParams({ term })}`);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="term">Search for a GIF</label>
      <p>
        <input
          type="text"
          name="term"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </p>
    </form>
  );
};

export default SearchForm;
