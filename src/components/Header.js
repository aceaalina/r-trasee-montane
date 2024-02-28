import mountain from "../assets/mountain.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-giumalau">
      <div className="header-left-side-header ">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 mobileHidden">
            <div className="header-left-side-icon text-center">
              <img
                src={mountain}
                className="App-mountain img-fluid mx-auto d-block logo"
                alt="mountain"
                width="120px"
                height="60px"
              />
            </div>
          </div>
          <div className="col-lg-8">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <button
                  className="navbar-toggler text-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link">
                        <Link to="/ViaFerrata" className="nav-link">
                          Via Ferrata
                        </Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Bushcraft
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Hiking Tips
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Did you know...?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Let's talk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
