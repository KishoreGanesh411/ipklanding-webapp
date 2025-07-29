import "./Navbar.css";
import logo from "@assets/ipk-logo.png";

const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>clientSucess</li>
        <li>why choose Us</li>
        <li>
          {" "}
          <button className="btn">Contact Us</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
