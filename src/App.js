import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import "./App.css";
<>
  <link
    rel="stylesheet"
    href="./bootstrap-5.3.2-dist/bootstrap-5.3.2-dist/css/bootstrap.css"
  />
  <link rel="stylesheet" href="./style.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia" />
</>;
function App() {
  const headerList = [
    "Giumalau",
    "Omu",
    "Pietrosu Rodnei",
    "Pietrosu Calimani",
    "Hasmasu Mare",
    "Toaca",
  ];
  return (
    <div className="App">
      <div className="container-fluid border background-image-container">
        <Header />
        <Container headerList={headerList} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
