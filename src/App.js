
import Header from "./components/header/header";
import Preloader  from "./components/preloader";
import Card from "./components/card";
import { BrowserRouter } from "react-router-dom";
import Darkmode from "./components/darkLightMode"
import SocialMedia from "./components/social_media";
import { AppProvider } from './components/context';
import "./components/assets/css/style.css";
import "./components/assets/css/media_query.css";
import "./components/assets/css/slick.css";
import "./components/assets/css/swap.css";


function App() {
  return (
  <BrowserRouter>
    <AppProvider>
      <Preloader/>
      <Darkmode/>
      <SocialMedia/>
      <Card/>
      <Header/>
      </AppProvider>
  </BrowserRouter>


  );
}

export default App;
