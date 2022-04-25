import s from '../../styles/SearchWidget.module.scss';
;


const SearchWidget = () => {
  return (
    <div className={s.searchWidget}>
      <select name="searchCategory" id="searchCategory" className={s.searchCategory}>
        <option value="videoLectures">Lectures</option>
        <option value="books">Books</option>
        <option value="testSeries">Test Series</option>
      </select>
      <input type="search" className={s.searchBox} placeholder="Search Here"/>
      <input type="submit" className={s.searchButton} />
    </div>
  );
};

export default SearchWidget;
