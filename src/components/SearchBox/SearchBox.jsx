import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import styles from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.label}>
      Find contacts by name:
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </label>
  );
}
