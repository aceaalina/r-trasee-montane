import via_ferrata from "../assets/assets for Via Ferrata/via_ferrata.png";
import via_ferrata_astragalus_wall from "../assets/assets for Via Ferrata/via_ferrata_astragalus_wall.jpg";
import citat1 from "../assets/assets for Via Ferrata/citat1.jpg";
import citat2 from "../assets/assets for Via Ferrata/citat2.jpg";
import viaferrata05 from "../assets/assets for Via Ferrata/viaferrata05.jpg";
import viaFerrata07 from "../assets/assets for Via Ferrata/viaFerrata07.jpg";
import picture1 from "../assets/assets for Via Ferrata/picture1.jpg";
import picture2 from "../assets/assets for Via Ferrata/picture2.jpg";
import picture3 from "../assets/assets for Via Ferrata/picture3.jpg";
import picture4 from "../assets/assets for Via Ferrata/picture4.jpg";
import picture9 from "../assets/assets for Via Ferrata/picture09.jpg";
import picture10 from "../assets/assets for Via Ferrata/picture10.jpg";
import videoViaFerrata from "../assets/assets for Via Ferrata/videoViaFerrata.mp4";
import warning from "../assets/assets for Via Ferrata/warning.png";
import "./ViaFerrataAstragalus.css";

const ViaFerrataAstragalus = (props) => {
  return (
    <div className="content-viaferrataAstragalus">
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
        <section className="center-viaferrataasragalus">
          <div className="up-section-astragalus">
            <img
              src={via_ferrata_astragalus_wall}
              className="img-fluid "
              alt="via_ferrata_astragalus_wall"
              width="100%"
              height="100%"
            />
            <h1>
              Via Ferrata “Astragalus” - Cheile Sugaului-Munticelu: cea mai
              lunga Via Ferrata din Romania
            </h1>
          </div>
        </section>
        <section className="middle">
          <div className="location">
            <h2>Localizare:</h2>
            <div className="info-location">
              <p>
                {" "}
                Drumul de acces incepe de la intrarea in Rezervatia Naturala
                Cheile Sugaului-Munticelu, traseul usor, accesibil cu intrarea
                din DN12C Gheorgheni-Bicaz. Masina poate fi parcata, langa podul
                peste Sugau, iar intrarea in traseu se face chiar din fata
                cabanei Ecolog.
              </p>
            </div>
          </div>
          <div className="route-name">
            <h2>Un nume unic:</h2>
            <p>
              Numele traseului vine de la Astragalus pseudopurpureus(cosaj
              bicajean), ce este o specie de plante din flora romaneasca,
              existenta in Carpatii Orientali, in Rezervatia Naturala Cheile
              Sugaului-Munticelu. Aceasta planta protejata, a fost prima data
              identificata aici, si 95% din exemplarele din lume sunt in in
              Rezervatia Naturala Cheile Sugaului-Munticelu.
            </p>
          </div>
          <div className="equipment-viaferrata">
            <h2>Echipamentul pentru Via Ferrata:</h2>
            <p>
              Traseele de via ferrata pot fi parcurse doar cu echipament
              special. Este interzisa folosirea echipamentului improvizat,
              deoarece riscati un accident mortal.
            </p>
            <p>Echipamentul obligatoriu de via ferrata este compus din:</p>
            <ul>
              <li>ham de alpinism;</li>
              <li>casca de alpinism;</li>
              <li>
                kit special pentru via ferrata format din 2 lonje, carabiniere
                cu deschidere larga, sistem de absorbtie a energiei in caz de
                cadere;
              </li>
            </ul>
            <p>Optional: </p>
            <ul>
              <li>
                {" "}
                manusile pentru via ferrata - acestea au portiuni intarite in
                palma si la degete, iar portiunea de la varful degetelor este
                decupata, protejeaza maine de cablul rece, de eventualele aschii
                si ofera aderenta.
              </li>
              <li>
                incaltamintea - pentru traseele de Via Ferrata, chiar si pe cele
                cu un grad redus de dificultate ai nevoie de bocanci cu talpa
                aderenta și cu o rigiditate mai mare.{" "}
              </li>
            </ul>
            <p>Echipamentul necesar se poate inchiria de la Cabana ECOLOG.</p>
            <div className="contact">
              <ul>
                <li>Telefon: 0747 478 988, 0737 759;</li>
                <li>Email: ecolog@mountain.ro</li>
              </ul>
            </div>
          </div>
          <div className="route-via-ferrata">
            <h2>Traseele Via Ferrata Astragalus:</h2>
            <p>
              Este cea mai lunga via ferrata din Romania, incluzand 5 variante
              posibile de ascensiune, de diferite lungimi si dificultati.
              Traseele au fost deschise oficial in primavara anului 2017.
            </p>
            <p>
              Traseul 1, este traseul principal, si are grad de dificultate
              mediu spre dificil, pasajele dificile sunt scurte, insa dese,
              necesita suficienta forta in brate si maini.
            </p>
            <p>
              Pentru incepatori se recomanda mai intai traseul 4, apoi, in
              ordine: traseul 2 (primul perete), traseul 3 (al doilea perete),
              traseul 5 (direct catre varf) si abia apoi parcurgerea traseului
              complet (principal).
            </p>
            <p>
              Traseele usoare pot fi parcurse si de copii cu varsta minima 7
              ani, conditie fizica buna, asistati obligatoriu de un adult cu
              experienta.
            </p>
            <a href="https://www.via-ferrata.ro/astragalus/">(sursa)</a>
            <div className="table">
              <table>
                <tr className="header-table">
                  <th rowspan="1">Ruta</th>
                  <th></th>
                  <th colspan="1">Lungime</th>
                  <th></th>
                  <th></th>
                  <th colspan="1">Altitudine</th>
                  <th></th>
                  <th colspan="1">Dificultate</th>
                  <th></th>
                  <th>Timp de parcurs</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Urcare</th>
                  <th>Coborare</th>
                  <th>Total</th>
                  <th>Minima</th>
                  <th>Maxima</th>
                  <th>Usor</th>
                  <th>Mediu</th>
                  <th>Dificil</th>
                  <th></th>
                </tr>
                <tr>
                  <th className="traseul1">
                    {" "}
                    <div></div> Traseul Nr. 1
                  </th>
                  <th>450m</th>
                  <th>250m</th>
                  <th>700m</th>
                  <th>700m</th>
                  <th>1000m</th>
                  <th></th>
                  <th></th>
                  <th>X</th>
                  <th>1h30' - 2h30'</th>
                </tr>
                <tr>
                  <th className="traseul2">Traseul Nr. 2</th>
                  <th>250m</th>
                  <th>125m</th>
                  <th>375m</th>
                  <th>730m</th>
                  <th>830m</th>
                  <th></th>
                  <th>X</th>
                  <th></th>
                  <th>45'-1h45'</th>
                </tr>
                <tr>
                  <th className="traseul3">Traseul Nr. 3</th>
                  <th>325m</th>
                  <th>250m</th>
                  <th>575m</th>
                  <th>750m</th>
                  <th>1000m</th>
                  <th></th>
                  <th></th>
                  <th>X</th>
                  <th>1h-1h45'</th>
                </tr>
                <tr>
                  <th className="traseul4">Traseul Nr. 4</th>
                  <th>125m</th>
                  <th>125m</th>
                  <th>250m</th>
                  <th>750m</th>
                  <th>830</th>
                  <th>X</th>
                  <th></th>
                  <th></th>
                  <th>30'-1h</th>
                </tr>
                <tr>
                  <th className="traseul5">Traseul Nr. 5</th>
                  <th>250m</th>
                  <th>250m</th>
                  <th>500m</th>
                  <th>820m</th>
                  <th>1000m</th>
                  <th>X</th>
                  <th></th>
                  <th></th>
                  <th>45'-1h15'</th>
                </tr>
              </table>
            </div>
          </div>
          <p>*Info: Traseul a fost pracurs in 22 august 2021.</p>
          <h2>Poze:</h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={citat1}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 1 - Primul perete, inceput de traseu{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={citat2}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 2 - Primul perete, inceput de traseu{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={picture1}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 3 - Primul perete cu vedere catre Cheile Sugaului{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={picture2}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 4 - Primul perete cu vedere catre Cheile Sugaului{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={viaferrata05}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 5 - Primul perete cu vedere catre Cheile Sugaului{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={viaFerrata07}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 6 - Spre creasta primului perete, pasajul cel mai
                    solicitant{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={picture3}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>Fig. 7 - Creasta primului perete </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={picture4}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 8 - Vedere din creasta primului perete{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={picture9}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 9 - Al doilea perete catre Varful Turnu Mare{" "}
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-6 pictures">
                <figure>
                  <img
                    src={picture10}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="100%"
                    height="100%"
                  />
                  <figcaption>
                    Fig. 10 - Vedere din Varful Turnu Mare{" "}
                  </figcaption>
                </figure>
              </div>
              <video width="600" height="300" controls>
                <source
                  src={videoViaFerrata}
                  type="video/mp4"
                  width="100%"
                  height="300px"
                />
              </video>
            </div>
          </div>
        </section>
        <div class="warning-section">
        <img
                    src={warning}
                    className="img-fluid"
                    alt="via-ferrata"
                    width="80px"
                    
                  />
          <p>
            Atenție in abordarea traseelor de via ferata! Informati-va asupra
            gradului de dificultate și al efortului fizic ce trebuie depus
            pentru parcurgerea lui!! {" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ViaFerrataAstragalus;
