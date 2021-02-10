import "./Header.css";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="text-center text-lg-right col-lg-6">
              <ul>
                <li>it</li>
                <li>fb</li>
                <li>lt</li>
              </ul>
            </div>
            <div className="text-center text-lg-right col-lg-6">
              <ul>
                <li>dasdkoas</li>
                <li>dasdsasa</li>
                <li>dasd897asda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo_container container">
        <div className="logo">
          <Link to="/">
            <img
              src="https://www.helpforheroes.org.uk/content/images/h4h-logo-stacked.svg"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      <nav>
        <div className="container">
          <ul>
            <li>
              <a href="">Home</a>
              <a href="">About us</a>
              <a href="">services</a>
              <a href="">Non sence</a>
              <a href="">contaxt</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
