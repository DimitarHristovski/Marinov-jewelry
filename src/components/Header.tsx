import { useRouter } from "next/router";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const { asPath } = useRouter();

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          <img src="/Header-icons/nav_item_icon.png" alt="" />
        </button>

        <div className="logo">
          {asPath === "/" ? (
            <img
              src="/Header-icons/logo_scroll.png"
              alt="logo image"
              className="logo-image"
            />
          ) : null}
          <img src="/Header-icons/name.png" alt="" />
        </div>
        <div className="shopping-card">
          <img
            src="/Header-icons/Vector.png"
            alt="shopping-card image"
            className="shopping-card"
          />
        </div>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Jewerly</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Home decor</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Custom orders</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Our story</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Checkout</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Payment</a>
            </li>
            <li className="nav-item d-flex">
              <a className="nav-link">EN</a>
              <a className="nav-link p-2">MK</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
