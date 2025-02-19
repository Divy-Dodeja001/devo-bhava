import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { navItems } from "../data/data";
import { Icon } from "@iconify/react";
import "../css/navbar.css";
import ContactForm from "./contactForm";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="header-section" className="position-sticky">
      <div className="container-fluid container-xl p-0 p-3 px-lg-0 py-lg-3">
        <div className="row p-0 align-items-center">
          {/* Logo - Always on the left */}
          <div className="col-4 col-md-2 d-flex justify-content-start align-items-center">
            <Link to={"/"} className="nelphim text-decoration-none logo">
              <img src="/public/devo-bhava logo.png"></img>
            </Link>
          </div>

          {/* Hamburger Menu for Mobile/Tablet */}
          <div className="col-6 d-flex d-md-none p-0 justify-content-end">
            <Button link={"/contact-us"} title={"Get in touch"} />
          </div>
          <div className="col-2 d-md-none d-flex justify-content-end align-items-center">
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <Icon icon="ic:baseline-close" width="25" height="25" />
              ) : (
                <Icon
                  icon="system-uicons:menu-hamburger"
                  width="30"
                  height="30"
                />
              )}
            </button>
          </div>

          {/* Navigation - Desktop & Mobile */}
          <nav
            className={`nav-items col-md-8 p-0 px-lg-0 px-3 ${
              menuOpen ? "nav-open" : ""
            }`}
          >
            <button
              className="menu-toggle mt-3 mb-2 d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon icon="ic:baseline-close" width="24" height="24" />
            </button>
            {navItems.map((navItem, index) => (
              <div
                key={index}
                id={navItem.id}
                className="nav-link nav-item mb-3 mb-lg-0 pe-2 pe-lg-0"
                onClick={() => setMenuOpen(false)}
              >
                <Link className="text-decoration-none" to={navItem.link}>
                  {navItem.title}
                </Link>
              </div>
            ))}
          </nav>

          {/* Button - Always on the right */}
          <div className="col-2 p-0 d-none d-md-flex justify-content-end">
          <ContactForm title={"Get in touch"} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
