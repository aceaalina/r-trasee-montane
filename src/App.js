import mountain from './assets/mountain.png';
import Hiking_Boots from './assets/Hiking_Boots.png';
import Group5 from './assets/Group5.png';
import Group51 from './assets/Group51.png';
import './App.css';
function App() {
  return (
    <div className="App">
     <div className="container-fluid border background-image-container">
      <div cclassName="header">
        <div className="header-left-side ">
          <div className="row">
            <div classNames="col-lg-4 col-md-6 col-sm-6 mobileHidden">
                <div className="header-left-side-icon text-center">
                    <img src={mountain} className="App-mountain" alt="mountain" className="img-fluid mx-auto d-block logo"
                        width="120px"
                        height="60px" />
                </div>
            </div>
            <div className="col-lg-8">
              <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="text-center"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">Via Ferrata</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Bushcraft</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Hiking Tips</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Did you know...?</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Let's talk</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="container midle-section">
            <div className="row align-self-center" className="text">
              <p className="text-center">
                "The best view comes after the hardest climb."
              </p>
            </div>
            <div className="row align-self-center" className="title">
              <h1 className="text-center">Mountain trips</h1>
            </div>
            <div className="row align-items-center center">
            <div className="col-lg-2 col-md-6 col-sm-6 mx-auto">
              <img src={Hiking_Boots} className="App-Hiking_Boots" alt="Hiking_Boots" className="img-fluid"
                width="60px"
                height="50px"
              />
            </div>
            <div className="col-lg-10 col-md-6 col-sm-6">
              <p claclassNamess="mb-0">"Life is better in hiking <span>boots</span>.”</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-5 mobileHidden"></div>
        <div className="col-lg-1  col-md-6">
          <div className="container">
            <div className="sidebar">
              <div className="row side-bar-row navigation-container giumalau">
                <div className="col-lg-12 col-sm-6 side-bar" >
                  <a href="#">Giumalau</a></div>
              </div>
              <div className="row side-bar-row navigation-container omu" >
                <div className="col-lg-12 col-sm-6 side-bar">
                  <a href="#">Omu</a></div>
              </div>
              <div className="row side-bar-row navigation-container pietrosu-rodnei">
                <div className="col-lg-12 col-sm-6  @media (max-width: 576px) {
                  .center {
                    flex-direction: column; 
                    align-items: center; 
                    text-align: center; 
                  }
                }">
                  <a href="#">Pietrosu Rodnei</a>
                </div>
              </div>
              <div className="row side-bar-row navigation-container pietrosu-calimani">
                <div classNameass="col-lg-12 col-sm-6 side-bar">
                  <a href="#">Pietrosu Calimani</a>
                </div>
              </div>
              <div className="row side-bar-row navigation-container hasmasu-mare">
                <div className="col-lg-12 col-sm-6 side-bar">
                  <a href="#">Hasmasu Mare</a>
                </div>
              </div>
              <div className="row side-bar-row navigation-container toaca">
                <div className="col-lg-12 col-sm-6 side-bar">
                  <a href="#">Toaca</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row button-circle d-flex  flex-sm-row">
        <div className="col-6 col-sm-1">
          <button className="btn btn-primary btn-circle">
            <img src={Group5} className="App-Group5" alt="arrow"
                        width="23px"
                        height="21px" 
            />
          </button>
        </div>
        <div className="col-6 col-sm-1">
          <button className="btn btn-primary btn-circle">
            <img src={Group51} className="App-Group51" alt="arrow"
                        width="23px"
                        height="21px" 
            />
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;