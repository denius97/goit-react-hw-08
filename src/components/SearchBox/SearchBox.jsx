import css from "./SearchBox.module.css";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);

  return (
    <label className={css.searchBox}>
      <span>Find contact by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={searchValue}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
};

export default SearchBox;
