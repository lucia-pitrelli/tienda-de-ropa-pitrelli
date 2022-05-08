import logo from "./mujerLogo.jpeg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={"/"}>
      <img
        src={logo}
        style={{ width: "100px", height: "100px", padding: "20px" }}
        className="App-logo"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
