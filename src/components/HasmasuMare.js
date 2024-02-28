import banda_albastra from "../assets/banda_albastra.jpg";
import time from "../assets/time.png";
import distance from "../assets/distance.png";
import route_dificulties from "../assets/route_dificulties.png";
import difference_in_level from "../assets/difference_in_level.png";
import season from "../assets/season.png";
import equipment from "../assets/equipment.png";
import location from "../assets/location.png";
import inceput_de_traseu from "../assets/inceput_de_traseu.jpg";
import intrarea_in_parc from "../assets/intrarea_in_parc.jpg";
import jenpeni from "../assets/jnepeni.jpg";
import statia_meteo from "../assets/statia_meteo.jpg";
import loc_de_campare_unu from "../assets/loc de campare_unu.jpg";
import loc_de_campare_doi from "../assets/loc_de_campare_doi.jpg";
import lacul_iezer_unu from "../assets/lacul_iezer_unu.jpg";
import lacul_iezer_doi from "../assets/lacul_iezer_doi.jpg";
import lacul_iezer_harta_romaniei from "../assets/lacul_iezer_harta_romaniei.jpg";
import spre_varf from "../assets/spre_varf.jpg";
import pe_platou from "../assets/pe_platou.jpg";
import spre_varful_Pietrosul_Rodnei from "../assets/spre_varful_Pietrosul_Rodnei.jpg";
import hydration from "../assets/hydration.png";
import ascensiunea_spre_varf_unu from "../assets/ascensiunea_spre_varf_unu.mp4";
import ascensiunea_spre_varf_doi from "../assets/ascensiunea_spre_varf_doi.mp4";
import vedere_din_varf_unu from "../assets/vedere_din_varf_unu.mp4";
import vedere_din_varf_doi from "../assets/vedere_din_varf_doi.jpg";
import styles from "../App.css";

function HasmasuMare(props) {
  return (
    <div className="container-fluid container-fluid-centered mx-auto">
      <div className="header">
        <h1 id="titlu-traseu">
          Muntii Rodnei: Varful Pietrosul Rodnei (2303 m)
        </h1>
      </div>
      <div className="center">
        <div className="route text-center">
          <h2>
            <span>Traseu:</span>{" "}
            <a href="#manastirea_pietroasa">Manastirea Pietroasa (970m)</a> -{" "}
            <a href="#statia_meteorologica_iezer">
              Statia Meteorologica Iezer (1760 m){" "}
            </a>
            - <a href="#lacul_iezer">Lacul Iezer (1786 m) </a> -{" "}
            <a href="#varful_pietrosul_rodnei">
              Varful Pietrosul Rodnei (2303 m)
            </a>
          </h2>
        </div>
        <div className="traffic-signs">
          <div className="traffic-signs-first-row">
            <div className="route-marking route text-center">
              <p>
                <span>Marcaj</span>: banda albastra
              </p>
              <img
                src={banda_albastra}
                alt="marcaj banda albastra"
                class="img-fluid  d-block"
                width="4%"
                height="4%"
              />
            </div>
          </div>
          <div className="traffic-signs-second-row row">
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <div className="route-time route">
                <img
                  src={time}
                  alt="time"
                  class="img-fluid d-block"
                  width="40px"
                  height="40px"
                />
                <p>
                  {" "}
                  <span>Durata:</span> 7h dus - intors
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <div className="distance-route route">
                <img
                  src={distance}
                  alt="distance"
                  width="40px"
                  height="40px"
                  class="img-fluid d-block"
                />
                <p>
                  {" "}
                  <span>Distanta:</span> 15 km dus - intors
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="route_dificulties route">
                <img
                  src={route_dificulties}
                  alt="route_dificulties"
                  class="img-fluid d-block"
                  width="40px"
                  height="40px"
                />
                <p>
                  <span>Dificultate:</span> medie{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="traffic-signs-third-row row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="route_dificultie route">
                <img
                  src={difference_in_level}
                  alt="route_dificulties"
                  class="img-fluid d-block"
                  width="40px"
                  height="40px"
                />
                <p>
                  {" "}
                  <span>Diferenta de nivel:</span> +/- 1330 m
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="season route">
                <img
                  src={season}
                  alt="season"
                  class="img-fluid d-block"
                  width="40px"
                  height="40px"
                />
                <p>
                  {" "}
                  <span>Sezon:</span> calduros, luna august;
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="equipment">
                <img
                  src={equipment}
                  class="img-fluid d-block"
                  alt="sequipment"
                  width="40px"
                  height="40px"
                />
                <p>
                  <span>Echipament de sezon:</span> bocanci/ghete adecvate, bete
                  de trekking, sapca, ochelari de soare, crema cu SPF
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="route-description ">
          <h2 className="text-sm text-center">Descriere Traseu:</h2>
          <div className="starting_point">
            <img
              src={location}
              alt="start_location"
              class="img-fluid d-block mb-3"
              width="40px"
              height="40px"
            />
            <p className="text-sm">
              Traseul porneste de la{" "}
              <a id="manastirea_pietroasa">Manastirea Pietroasa</a> (altitudine
              980 m), de aici si pana in statiunea Borsa sunt aproximativ 5 km,
              distanta ce poate fi parcursa cu autoturismul.
            </p>
          </div>
          <div className="route-description">
            <p className="text-sm">
              Prima parte de traseu incepe cu un urcus pe un drum forestier,
              pietros, dupa care intram in padure si asa continuam pana la
              Statia Meteorologica Iezer.
            </p>
            <div className="mountain_trail row">
              <div className="col-md-6 mb-3">
                <figure>
                  <img
                    src={inceput_de_traseu}
                    class="img-fluid d-block mb-3"
                    alt="inceput_de__traseu"
                  />
                  <figcaption> Fig. 1 - Inceput de traseu</figcaption>
                </figure>
              </div>
              <div className="col-md-6 mb-3">
                <figure>
                  <img
                    src={intrarea_in_parc}
                    class="img-fluid d-block mb-3"
                    alt="intrarea_in_parc"
                  />
                  <figcaption>Fig. 2 - Intrarea in rezervatie</figcaption>
                </figure>
              </div>
            </div>
            <p className="text-sm">
              Timpul efectiv de la punctul de plecare si pana la Statia Meteo
              este de 2h.
            </p>
            <div className="mountain_trail">
              <div className="col-md-6 mb-3">
                <figure>
                  <img
                    src={jenpeni}
                    alt="printre_jenpeni"
                    className="img-fluid"
                    width="100%"
                    height="300px"
                  />
                  <figcaption>Fig. 3 - Printre jnepeni</figcaption>
                </figure>
              </div>
              <div className="col-md-6 mb-3">
                <figure>
                  <img
                    src={statia_meteo}
                    alt="statia_meteo"
                    className="img-fluid"
                    width="100%"
                    height="300px"
                  />
                  <figcaption>Fig. 4 - Statia Meteorologica Iezer</figcaption>
                </figure>
              </div>
            </div>
            <p className="text-sm">In aceasta zona este permisa camparea.</p>
            <div className="mountain_trail">
              <figure>
                <img
                  src={loc_de_campare_unu}
                  class="img-fluid d-block"
                  alt="loc_de_campare"
                  width="100%"
                  height="300px"
                />
                <figcaption>Fig. 5 - Zona de campare</figcaption>
              </figure>
              <figure>
                <img
                  src={loc_de_campare_doi}
                  class="img-fluid  d-block"
                  alt="loc_de_campare"
                  width="100%"
                  height="300px"
                />
                <figcaption>Fig. 6 - Zona de campare din departare</figcaption>
              </figure>
            </div>
            <p className="text-sm">
              De la{" "}
              <a id="statia_meteorologica_iezer">Statia Meteorologica Iezer</a>,
              continuam drumul printre jnepeni si in 10 minute ajungem la
              faimosul lac glaciar Iezer, care are o suprafata de 3450 mp.
            </p>
            <div className="mountain_trail">
              <figure>
                <img
                  src={lacul_iezer_unu}
                  class="img-fluid d-block"
                  alt="lacul_iezer"
                  width="100%"
                  height="300px"
                />
                <figcaption>Fig. 7 - Lacul Iezer</figcaption>
              </figure>
              <figure>
                <img
                  src={lacul_iezer_doi}
                  class="img-fluid  d-block"
                  alt="lacul_iezer"
                  width="100%"
                  height="300px"
                />
                <figcaption>Fig. 8 - Lacul Iezer</figcaption>
              </figure>
            </div>
            <button
              type="button"
              className="btn btn-link collapsible"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-lacul-iezer"
              aria-expanded="false"
              aria-controls="collapse-lacul-iezer"
            >
              Lacul Iezer &#9432;
            </button>
            <div className="collapse" id="collapse-lacul-iezer">
              <div className="content">
                <p className="text-sm">
                  Lacul Iezer este un lac glaciar. Este localizat în Munții
                  Rodnei, sub vârful Pietrosu, la o altitudine de 1.825 m. Are
                  suprafața de 3450 mp, adâncimea maximă de 2,5 m și lungimea de
                  84 m. Face parte din rezervația naturală "Pietrosu Mare".
                </p>
              </div>
            </div>
            <p className="text-sm">
              {" "}
              <a id="lacul_iezer"></a>Misterele lacului - despre Lacul Iezer
              circula multe zvonuri, unul dintre ele ar fi ca, acesta comunica
              cu Marea Neagra, unii spun ca s-au aruncat in lac niste lemne, si
              ca acestea au iesit in mare, de aici si legenda "lacului fara
              fund".{" "}
            </p>
            <p className="text-sm">
              Lacul Iezer mai este cunoscut si pentru forma sa, care seamana cu
              harta Romaniei.Daca il privesti de sus iti poti da seama de acet
              lucru.
            </p>
            <div class="mountain_trail">
              <figure>
                <img
                  src={lacul_iezer_harta_romaniei}
                  class="img-fluid  d-block"
                  alt="lacul_iezer_harta_romaniei"
                  width="100%"
                  height="300px"
                />
                <figcaption>
                  {" "}
                  Fig. 9 - Din serpentine- vedere spre Lacul Iezer
                </figcaption>
              </figure>
              <figure>
                <img
                  src={pe_platou}
                  class="img-fluid mx-auto d-block"
                  alt="vedere spre munti"
                  width="100%"
                  height="300px"
                />
                <figcaption>
                  Fig. 10 - Vedere spre Vf Buhaescu Mare (2268 m){" "}
                </figcaption>
              </figure>
            </div>
            <p className="text-sm">
              Continuam traseul, ocolind lacul prin stanga, si incepem usor
              ascensiunea pe serpentine, pana ajungem la o intersectia cu
              traseul ce duce spre Lacul Buhaiescu la stanga, iar noi continuam
              disrect spre varf, pe tarseul din dreapta.{" "}
            </p>
            <p className="text-sm">
              {" "}
              Distanta de la Lacul Iezer si pana la Varful Pietrosul Rodnei este
              de 2.5 km parcursa in aproximativ 1.5 h de ascensiune, apoi ajunsi
              pe creasta, la Parul de Fier, unde avem vedere catre Gargalau
              (2159 m) si Inau (2279 m).{" "}
            </p>
            <div className="mountain_trail">
              <video width="600" height="300" controls>
                <source
                  src={ascensiunea_spre_varf_unu}
                  type="video/mp4"
                  width="100%"
                  height="300px"
                />
              </video>
              <video width="600" height="300" controls>
                <source
                  src={ascensiunea_spre_varf_doi}
                  type="video/mp4"
                  width="100%"
                  height="300px"
                />
              </video>
            </div>
            <p className="text-sm">
              De la Parul de Fier continuam la dreapta spre Varf pe o poteca
              timp de 20 minute.
            </p>
            <div className="mountain_trail">
              <figure>
                <img
                  src={spre_varf}
                  class="img-fluid  d-block"
                  alt="spre varful_Pietrosul_Rodnei"
                  width="100%"
                  height="300px"
                />
                <figcaption>
                  Fig. 11 - Urcare spre Vf Pietrosul Rodnei{" "}
                </figcaption>
              </figure>
              <figure>
                <img
                  src={spre_varful_Pietrosul_Rodnei}
                  class="img-fluid mx-auto d-block"
                  alt="spre varful_Pietrosul_Rodnei"
                  width="100%"
                  height="300px"
                />
                <figcaption>
                  Fig. 12 - Coborare din Vf Pietrosul Rodnei{" "}
                </figcaption>
              </figure>
            </div>
            <p className="text-sm">
              <a id="varful_pietrosul_rodnei">Varful pietrosul Rodnei</a>, este
              cel mai inalt pisc muntos din Muntii Rodnei, are o inaltime de
              2303 m, de asemenea este si cel mai inalt varf din intregul lant
              al Carpatilor Orientali.
            </p>
            <div className="mountain_trail">
              <figure>
                <img
                  src={vedere_din_varf_doi}
                  class="img-fluid d-block"
                  alt="spre varful_Pietrosul_Rodnei"
                  width="100%"
                  height="300px"
                />
                <figcaption>
                  Fig. 13 - Vf. Pietrosul Rodnei -vedere spre zona Maramuresului{" "}
                </figcaption>
              </figure>
              <video width="600" height="300" controls>
                <source
                  src={vedere_din_varf_unu}
                  type="video/mp4"
                  width="100%"
                  height="300px"
                />
              </video>
            </div>
            <button
              type="button"
              className="btn btn-link collapsible"
              data-bs-toggle="collapse"
              data-bs-target="#collapse-muntii-rodnei"
              aria-expanded="false"
              aria-controls="collapse-muntii-rodnei"
            >
              Muntii Rodnei &#9432;
            </button>
            <div className="collapse" id="collapse-muntii-rodnei">
              <div className="content">
                <p>
                  Muntii Rodnei fac parte din grupul de nord al Carpatilor
                  Orientali. Cu inăltimea maximă de 2.303 de metri, atinsa de
                  piscul Pietrosul, Muntii Rodnei sunt cei mai inalli si mai
                  greu de străbătut din lantul Carpatilor Orientali.{" "}
                </p>
                <p>
                  Parcul National Muntii Rodnei reprezinta cea mai mare arie
                  protejata, localizata în grupul nordic al Carpatilor
                  Orientali, pe o suprafata de 47.227 de hectare, din care 3.300
                  hectare au fost declarate in anul 1979 rezervatie a biosferei.
                </p>
              </div>
            </div>
          </div>{" "}
          <p className="text-sm">
            Prima parte de traseu incepe cu un urcus pe un drum forestier,
            pietros, dupa care intram in padure si asa continuam pana la Statia
            Meteorologica Iezer.
          </p>
          <h3 className="text-sm">Localizare pe Google Maps:</h3>
          <div className="adressonmap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m34!1m12!1m3!1d21517.64395896945!2d24.62618723584073!3d47.612415949052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m19!3e2!4m5!1s0x473613482c46f373%3A0x5918010090e7f74d!2sM%C4%83n%C4%83stirea%20Bor%C8%99a%20Pietroasa%2C%20Schitul%20Borsa%20Pietroasa%2C%20Strada%20G%C3%AErlei%20nr.%2080B%2C%20Bor%C8%99a%20435200!3m2!1d47.629800599999996!2d24.6526958!4m5!1s0x4736130432c761e1%3A0x6964f8085dca0199!2sSta%C8%9Bia%20Meteorologic%C4%83%20Iezer%2C%20Vf.%20Pietrosu%20-%20Lacul%20Iezer%2C%20Bor%C8%99a!3m2!1d47.6026731!2d24.6490947!4m5!1s0x473613a0af1002c9%3A0xd02d05c7da4ea3c7!2sPietrosul%20Rodnei!3m2!1d47.599999999999994!2d24.6333333!5e0!3m2!1sen!2sro!4v1680440637110!5m2!1sen!2sro"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="hydration">
          <img
            src={hydration}
            alt="hydration"
            class="img-fluid d-block"
            width="30px"
            height="30px"
          />
          <h3>Hidratarea in timpul drumetiilor montane</h3>
          <p> Surse de apa: izvor în urcare spre statia Meteo, lacul Iezer.</p>
        </div>
        <div className="info_hydration">
          <button
            type="button"
            className="btn btn-link collapsible"
            data-bs-toggle="collapse"
            data-bs-target="#collapse-hydration"
            aria-expanded="false"
            aria-controls="collapse-hydration"
          >
            Hidratarea &#9432;
          </button>
          <div className="collapse" id="collapse-hydration">
            <div className="content">
              <p>
                {" "}
                Hidratarea este foarte importanta pentru o buna functionare a
                organismului, iar pe timpul verii pentru a evita afectiunile
                cauzate de caldura, dar in acelasi timp este o sursa de energie
                , de aceea este foarte important, inainte de a pleca la drum, sa
                verificam daca pe traseul nostru avem puncte de alimentare.
                Trebuie sa evitam deshidratarea, intruct aceasta este
                periculoasa, mai ales pe tarsee lungi, ofera senzatia de
                slabiciune dar si de dezorientare de la traseu.
              </p>
              <p>
                {" "}
                Recomandat ar fi sa bei 1l de apa la fiecare 2h de activitate,
                insa la intervale regulate de timp si nu toata odata consumata.
                Este important sa bei apa chiar daca nu iti este sete, deoarece
                din cauza efortului pierzi apa constant prin transpiratie, mai
                ales in sezonul calduros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HasmasuMare;
