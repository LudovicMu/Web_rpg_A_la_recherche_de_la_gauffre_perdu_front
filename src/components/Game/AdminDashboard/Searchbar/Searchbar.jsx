import "./Searchbar.scss";
import search from "/src/assets/search.svg";
export default function Searchbar() {
  return (
    <>
      <div className="searchContainer">
        <img src={search} className="searchContainer__icon" />
        <input className="searchContainer__field" placeholder="recherche" />
      </div>
    </>
  );
}
