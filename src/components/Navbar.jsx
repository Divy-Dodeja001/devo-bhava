import { Link } from "react-router-dom";
import { navItems } from "../data/data";
import Button from "./Button";
import "../css/navbar.css"

const Navbar = () => {
  return (
    <header id="header-section" className="container-fluid container-xl p-3">
      <div className="row p-0 py-1">
        <div className="col-2 p-0 d-flex justify-content-center align-items-center">
          <Link to={"/"} className="nelphim text-decoration-none logo">
            Devo Bhava
          </Link>
        </div>
        <nav className="d-flex justify-content-center align-items-center nav-items col-8 p-0">
          {navItems.map((navItem, index) => {
            return (
              <div key={index} id={navItem.id}>
                <Link className="text-decoration-none nav-item" to={navItem.link}>
                  {navItem.title}
                </Link>
              </div>
            );
          })}
        </nav>
        <div className="col-2 p-0">
          <Button link={"/contact-us"} title={"Get in touch"}></Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
