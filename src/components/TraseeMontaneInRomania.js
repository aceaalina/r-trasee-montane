import Header from "./Header";
import Container from "./Container";
// import Footer from "./Footer";

function TraseeMontaneInRomania() {
  const headerList = [
    {
      title: "Giumalau",
      path: "/varful-giumalau",
      className:"varful-giumalau"
    },
    {
      title: "Omu",
      path: "/varful-omu",
      className:"varful-omu"
    },
    {
      title: "Pietrosu-Rodnei",
      path: "/varful-pietrosul-rodnei",
      className:"varful-pietrosul-rodnei"
    },
    {
      title: "Hasmasu-Mare",
      path: "/varful-hasmasu-mare",
      className:"varful-hasmasu-mare"
    },
    {
      title: "Pietrosu-Calimani",
      path: "/varful-pietrosul-calimani",
      className:"varful-pietrosul-calimani"
    },
    {
      title: "Toaca",
      path: "/varful-toaca",
      className:"varful-toaca"
    },
  ];
  return (
    
    <div className="container-fluid border background-image-container">
      <Header />
      <Container headerList={headerList} />
      {/* <Footer /> */}
    </div>
  );
}
export default TraseeMontaneInRomania;
