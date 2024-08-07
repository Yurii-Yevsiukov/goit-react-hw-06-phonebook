import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export function Filter() {
  const dispatch = useDispatch();
  const handleSearch = event => dispatch(setFilter(event.target.value));

  return (
    <div className={css.filter}>
      <label
        class={css.filterLabel}
        htmlFor="search">Find contacts by name</label>
      <input
        className={css.filterInput}
        type="search"
        name="search"
        placeholder="Search by name"
        onChange={handleSearch} />
    </div>
  );
}
