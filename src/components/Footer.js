import Group5 from '../assets/Group5.png';
import Group51 from '../assets/Group51.png';

function Footer (props) {
    return (
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
    );
  }
  
  export default Footer;
  

