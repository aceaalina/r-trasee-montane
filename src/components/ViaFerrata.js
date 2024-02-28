import React from "react";
import "./ViaFerrata.css";
import { Link } from "react-router-dom";
import via_ferrata from "../assets/assets for Via Ferrata/via_ferrata.png";
import maps_icon from "../assets/assets for Via Ferrata/maps-icon.png";
import list from "../assets/assets for Via Ferrata/list.png";
import img1 from "../assets/assets for Via Ferrata/img1.jpg";
import img2 from "../assets/assets for Via Ferrata/img2.jpg";
import img3 from "../assets/assets for Via Ferrata/img3.jpg";
import img4 from "../assets/assets for Via Ferrata/img4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const ViaFerrata = (props) => {
  return (
    <div className="container-viaferrata">
      <div className="header-viaferrata">
        <div className="header-left-side-viaferrata">
          <img
            src={via_ferrata}
            className="img-fluid"
            alt="via-ferrata"
            width="20%"
            height="100%"
          />
          <h1>Via Ferrata in Romania</h1>
        </div>
        <div className="header-right-side-viaferrata mobileHidden"></div>
      </div>
      <div className="header-strip"></div>

      <div className="content-viaferrata">
        <section
          className="center-viaferrata"
          style={{
            backgroundImage:
              "url(..assetsassets for Via Ferrata\viaferrata01.jpg)",
          }}
        >
          <div className="up">
            <h1>Via Ferrata Astragalus</h1>
            <h2>"All good things are wild and free."</h2>
          </div>
          <div className="header-buttons-viaferrata">
            <a href="https://maps.suunto.com/move/alina620421/612230ecfbef1c72d2590f3c">
              <button className="button" id="button1">
                <img
                  src={maps_icon}
                  className="img-fluid"
                  alt="Map-of-via-ferrata-routes"
                  width="20px"
                  height="21px"
                />
                <p>View on Map</p>
              </button>
            </a>
            <a href="https://www.google.com/maps/d/u/0/edit?mid=1BKExLCTqNxN_GbE-QGrQKI7LsqUKpv4&usp=sharing">
              <button className="button" id="button2">
                <img
                  src={list}
                  className="img-fluid"
                  alt="List-of-via-ferrata-routes"
                  width="20px"
                  height="21px"
                />
                <p>Trasee Via Ferrata</p>
              </button>
            </a>
          </div>
        </section>
        <section className="grid-section mobileHidden">
          <div className="grid-item grid-item-1 item">
            <Link to="/ViaFerrataAstragalus">
              Info traseu Via Ferrata Astragalus
            </Link>
          </div>
          <div className="grid-item grid-item-2">
            <div className="grid-item grid-item-2-1 item"></div>
            <div className="grid-item grid-item-2-2 item"></div>
          </div>
          <div className="grid-item grid-item-3 item">
            <div className="slider-viaferrata">
              <div className="images-viaferrata">
                <input type="radio" name="slide" id="img1" checked />
                <input type="radio" name="slide" id="img2" checked />
                <input type="radio" name="slide" id="img3" checked />
                <input type="radio" name="slide" id="img4" checked />
                <img src={img1} className="imag1" alt="img1" />
                <img src={img2} className="imag2" alt="img2" />
                <img src={img3} className="imag3" alt="img3" />
                <img src={img4} className="imag4" alt="img4" />
                <div className="next">
                  <label htmlFor="img1"></label>
                  <label htmlFor="img2"></label>
                  <label htmlFor="img3"></label>
                  <label htmlFor="img4"></label>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ViaFerrata;
