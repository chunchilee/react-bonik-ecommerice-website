import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/logo.svg";
import { useProductItemsContext } from "../../context/context";

const Search = () => {
  const { CartItem } = useProductItemsContext();

  useEffect(() => {
    const handleScroll = () => {
      const search = document.querySelector(".search");
      search.classList.toggle("active", window.scrollY > 160);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="search">
      <div className="container c_flex">
        <div className="logo width ">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="search-box f_flex">
          <input type="text" placeholder="Search and hit enter..." />
          <i className="fa fa-search"></i>
        </div>

        <div className="icon f_flex width">
          <Link to="/">
            <i className="fa fa-user icon-circle"></i>
          </Link>
          <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>{CartItem.length === 0 ? 0 : CartItem.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
