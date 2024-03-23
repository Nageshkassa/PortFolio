
import Header from "./components/header/header";
import Preloader  from "./components/preloader";
import Card from "./components/card";

import Darkmode from "./components/darkLightMode"
import SocialMedia from "./components/social_media";
import { AppProvider } from './components/context';
// import "./Style.css"; // Import the CSS file


function App() {
  return (
   
    <AppProvider>
      <Preloader/>
      <Darkmode/>
      <SocialMedia/>
      <Card/>
      <Header/>





      </AppProvider>


  );
}

export default App;
