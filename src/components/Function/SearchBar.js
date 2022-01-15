import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  return (
    <form action="/projects" method="get">
      <label htmlFor="header-search">
        <span className={classes["visually-hidden"]}>Search Projects</span>
      </label>
      <input
        onChange={(event) => props.onSearch(event.target.value)}
        type={props.type}
        id={props.id}
        defaultValue={props.defaultValue}
        name={props.name}
      />
    </form>
  );
};

export default SearchBar;
