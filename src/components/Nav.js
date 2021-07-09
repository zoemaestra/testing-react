import homeIcon from '../images/icon.png';
import { useState, useEffect } from 'react';

const Nav = () => {
  const toggleMobileNav = () => {
    document.getElementById("menuToggler").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
  }

  let [bgcolour, setbgcolour] = useState(localStorage.getItem("Theme"))
  let [fgcolour, setfgcolour] = useState("")
  let [navcolour, setnavcolour] = useState("")
  let [emoji, setEmoji] = useState("🌑")

  const themeSet = (theme) => {
    //Function to set the CSS colour variables used for background, foreground and nav background
    if (theme == "#171720") {
      bgcolour = "#171720";
      fgcolour = "#E8E8DF";
      navcolour = "#2B2B3B";
      setEmoji("☀️")
    } else {
      bgcolour = "#E8E8DF";
      fgcolour = "#171720";
      navcolour = "#171720";
      setEmoji("🌑")
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

  const images = require.context('../images', true);
  let loadImage = imageName => (images(`./${imageName}`).default);

  return (
    <div>
    <div id="mobileHead">
      <a className="homeButton" href="/"><img src={homeIcon} alt="Home" /></a>
    </div>
    <div id="menuToggler" onClick={toggleMobileNav}>&#8801;</div>
      <nav id="menu">
        <a className="homeButton" href="/"><img src={homeIcon} alt="Home" /></a>
        <a href="/MoagCoin">MoagCoin</a>
        <a href="/Timetable">Timetable</a>
        <a href="/DiscordBot">Discord Bot</a>
        <div id="themeToggler" onClick={themeButtonOnclick}>{emoji}</div>
      </nav>
    </div>
  )
}

export default Nav
