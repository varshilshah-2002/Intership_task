import "./Navbar.scss";

import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="brand">LOGO</h1>
      <div className="search">
        <button className="search_btn">
          <SearchIcon className="icon"/>
        </button>
        <input type="text" placeholder="search for projects" />
      </div>
      <div className="profile">
        <span>
          <img src="images/Ellipse.png" alt="profilePic" />
        </span>
        <span>
          <h2>Oliver Smith</h2>
          <p>Vendor</p>
        </span>
        <button>
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
}
