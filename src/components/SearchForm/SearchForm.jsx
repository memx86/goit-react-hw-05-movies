import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import s from "./SearchForm.module.css";
import IconButton from "components/IconButton";

function SearchForm() {
  const [query, setQuery] = useState("");
  const [, setSearchParams] = useSearchParams();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value.trim().toLowerCase();
    if (query) {
      setSearchParams({ query });
    } else {
      setSearchParams({});
    }
    reset();
  };
  const reset = () => setQuery("");

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        <span className={s.btn}>
          <IconButton
            type="submit"
            role="search"
            icon={<AiOutlineSearch style={{ width: "40" }} />}
          />
        </span>
        <input
          className={s.input}
          type="text"
          name="query"
          placeholder="Search movies"
          value={query}
          onInput={handleInputChange}
        />
      </label>
    </form>
  );
}

export default SearchForm;
