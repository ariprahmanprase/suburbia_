import './Navbar.css';
import Fotologo from "../../src/Image/Logo Suburbia.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container navbar-wrapper">
                <img src={Fotologo} alt="" className="fotologo" />
                <ul className="menu">
                    <li className="menu-item"><a href="" className="menulink">Home</a></li>
                    <li className="menu-item"><a href="" className="menulink">Galery</a></li>
                    <li className="menu-item"><a href="" className="menulink">Musician</a></li>
                    <li className="menu-item"><a href="" className="menulink">Contact Us</a></li>
                    <li className="menu-item"><a href="" className="menulink">Merchandise</a></li>
                </ul>
                <button className="btn-uncoming-show">Uncoming Show</button>
            </div>

        </div>
    )
}

export default Navbar;