
import './Navbar.css'
import logo from '@assets/ipk-logo.png';





const Navbar = () => {
  return (
    <nav>
        <h1>hai this is navbar section</h1>
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>why choose Us</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar