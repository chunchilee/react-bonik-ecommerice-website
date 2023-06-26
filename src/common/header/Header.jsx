import Navbar from "./Navbar";
import Search from "./Search";
import "./style.css";

const Header = () => {
  return (
    <header>
      <Search />
      <Navbar />
    </header>
  );
};

export default Header;
