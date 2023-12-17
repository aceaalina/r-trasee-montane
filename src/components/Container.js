import Hiking_Boots from '../assets/Hiking_Boots.png';
import SideBar from './SideBar';
function Container(props) {
    return (
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
              <p className="mb-0">"Life is better in hiking <span>boots</span>.”</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-5 mobileHidden"></div>
        <SideBar headerList={props.headerList}/>
      </div>
    );
  }
  
  export default Container;