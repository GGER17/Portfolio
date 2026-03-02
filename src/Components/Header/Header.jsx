import "./Header.css";

import Coco from "../../assets/CocoTopHat.jpeg";

function Header({}) {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#about" className="header__nav-link">
              About
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#projects" className="header__nav-link">
              Projects
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contact" className="header__nav-link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="header__logo-container">
        <a
          href="https://github.com/GGER17"
          target="_blank"
          className="logo-wrapper"
        >
          {" "}
          <div className="header__logo-halo"></div>
          <img src={Coco} className="logo react" alt="Coco Top Hat" />
        </a>
      </div>
      <h1 className="header__title">Welcome to My Portfolio!</h1>
    </header>
  );
}

export default Header;
