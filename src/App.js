import Intro from './components/Intro'
import Footer from './components/Footer'
import MoagCoin from './components/moagCoin'
import Timetable from './components/Timetable'
import DiscordBot from './components/DiscordBot'
import Nav from './components/Nav'

import './App.css';
import homeIcon from './images/icon.png';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {
  let [bgcolour, setbgcolour] = useState(localStorage.getItem("Theme"))
  let [fgcolour, setfgcolour] = useState("")
  let [navcolour, setnavcolour] = useState("")
  let [emoji, setEmoji] = useState("🌑")

  const themeSet = (theme) => {
    if (theme == "#171720") {
      bgcolour = "#171720";
      fgcolour = "#E8E8DF";
      navcolour = "#2B2B3B";
    } else {
      bgcolour = "#E8E8DF";
      fgcolour = "#171720";
      navcolour = "#171720";
    }
    document.documentElement.style.setProperty("--bg-colour", bgcolour);
    document.documentElement.style.setProperty("--fg-colour", fgcolour);
    document.documentElement.style.setProperty("--nav-colour", navcolour);
    localStorage.setItem("Theme", bgcolour);
    console.log("hhhhhhhhh")
  };

  const themeButtonOnclick = () => {
    if (bgcolour == "#171720") {
      themeSet("#E8E8DF");
      /*setEmoji("☀️")*/
    } else {
      themeSet("#171720");
      /*setEmoji("🌑")*/
    }
  }

  const images = require.context('./images', true);
  let loadImage = imageName => (images(`./${imageName}`).default);

    return (
      <Router>
        <div className="App">
          <a id="top"></a>
          <Nav />
          <Route path="/" exact component={Intro} />
          <Route path="/MoagCoin" component={MoagCoin} />
          <Route path="/Timetable" component={Timetable} />
          <Route path="/DiscordBot" component={DiscordBot} />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
