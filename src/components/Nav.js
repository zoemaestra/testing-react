import homeIcon from '../images/icon.png';
import { useState, useEffect } from 'react';

const Nav = () => {
  const toggleMobileNav = () => {
    document.getElementById("menuToggler").classList.toggle("open");
    document.getElementById("menu").classList.toggle("open");
  }

  let [bgcolour, setbgcolour] = useState(localStorage.getItem("bgcolour") || '#171720')
  let [fgcolour, setfgcolour] = useState(localStorage.getItem("fgcolour") || '#E8E8DF')
  let [navcolour, setnavcolour] = useState(localStorage.getItem("navcolour") || '#2B2B3B')
  let [emoji, setEmoji] = useState("🌑")

  const themeSet = (theme) => {
    //Function to set the CSS colour variables used for background, foreground and nav background
    if (theme === "#171720") {
      setbgcolour("#171720")
      setfgcolour("#E8E8DF")
      setnavcolour("#2B2B3B")
      setEmoji("☀️")
    } else {
      setbgcolour("#E8E8DF")
      setfgcolour("#171720")
      setnavcolour("#171720")
      setEmoji("🌑")
    }
    document.documentElement.style.setProperty("--bg-colour", bgcolour);
    document.documentElement.style.setProperty("--fg-colour", fgcolour);
    document.documentElement.style.setProperty("--nav-colour", navcolour);
    localStorage.setItem("bgcolour", bgcolour);
    localStorage.setItem("fgcolour", fgcolour);
    localStorage.setItem("navcolour", navcolour);
  };

  const themeButtonOnclick = () => {
    console.log(bgcolour,fgcolour,navcolour)
    if (bgcolour === "#E8E8DF"){ themeSet("#171720") }
    if (bgcolour === "#171720"){ themeSet("#E8E8DF") }
  }


  useEffect(() => {
    console.log(bgcolour,fgcolour,navcolour)
    themeSet(localStorage.getItem("Theme"))
  }, []);

  /*useEffect(() => {
    localStorage.setItem('Theme', bgcolour);
  }, [bgcolour]);*/

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
