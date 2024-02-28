import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Header from "./components/Header";
// import Container from "./components/Container";
// import Footer from "./components/Footer";
import TraseeMontaneInRomania from "./components/TraseeMontaneInRomania";
import PietrosulRodnei from "./components/PietrosulRodnei";
import Giumalau from "./components/Giumalau";
import Omu from "./components/Omu";
import HasmasuMare from "./components/HasmasuMare";
import PietrosulCalimani from "./components/PietrosuCalimani";
import Toaca from "./components/Toaca";
import ViaFerrata from "./components/ViaFerrata";
import ViaFerrataAstragalus from "./components/ViaFerrataAstragalus";

import "./App.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj0GbSqNryMDG71s9zjucKGWMCLsKYWoM",
  authDomain: "trasee-montane-romania.firebaseapp.com",
  projectId: "trasee-montane-romania",
  storageBucket: "trasee-montane-romania.appspot.com",
  messagingSenderId: "490701283895",
  appId: "1:490701283895:web:6a764c6aec93a91c8495b2",
  measurementId: "G-75WSXTEE7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TraseeMontaneInRomania />,
    },
    {
      path: "/varful-giumalau",
      element: <Giumalau />,
    },
    {
      path: "/varful-pietrosul-calimani",
      element: <PietrosulCalimani />,
    },
    {
      path: "/varful-pietrosul-rodnei",
      element: <PietrosulRodnei />,
    },
    {
      path: "/varful-omu",
      element: <Omu />,
    },
    {
      path: "/varful-hasmasu-mare",
      element: <HasmasuMare />,
    },
    {
      path: "/varful-toaca",
      element: <Toaca />,
    },
    {
      path: "/ViaFerrata",
      element: <ViaFerrata />,
    },
    {
      path: "/ViaFerrataAstragalus",
      element: <ViaFerrataAstragalus />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
