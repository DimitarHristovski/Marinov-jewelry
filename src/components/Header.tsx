import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  const { asPath } = useRouter();

  const toggleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg col-12">
      <div className="container ">
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
          <img src="/images/hamburger_menu.png" alt="" />
        </button>

        <div className="logo">
          {asPath === "/" ? (
            <img
              src="/images/logo_scroll.png"
              alt="logo image"
              className="logo-image"
            />
          ) : null}
          <img src="/images/name.png" alt="" />
        </div>
        <div className="shopping-card">
          <Link href="/Cart">
            {" "}
            <img
              src="/images/Vector.png"
              alt="shopping-card image"
              className="shopping-card"
            />
          </Link>
        </div>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarToggleExternalContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/">
                <span className="nav-link">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Jewelry">
                <span className="nav-link">Jewerly</span>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/HomeDecor">
                {" "}
                <span className="nav-link">Home decor</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/custom">
                <span className="nav-link">Custom orders</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ourstory">
                <span className="nav-link">Our story</span>{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/faq">
                <span className="nav-link">FAQ</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/Contact">
                <span className="nav-link">Contact</span>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Profile</a>
            </li>
            <li className="nav-item">
              <Link href="/Cart">
                <span className="nav-link">Cart</span>
              </Link>
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
