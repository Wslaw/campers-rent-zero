// import Button from "../../Button/Button";
import CampersList from "../../CampersList/CampersList";
import campersData from "../../../data/campers.json";
import SearchBar from "../../SearchBar/SearchBar";
import styles from "./main.module.css";

const Main = () => {
  return (
    <main className={styles.sectionCatalog}>
      <SearchBar className={StyleSheet.searchBar} />
      <CampersList campers={campersData} />
    </main>
  );
};

export default Main;
