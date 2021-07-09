import { useState, useEffect } from 'react';
const Intro = () => {
  const [data, setData] = useState({})

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/zoemaestra');
    const myJson = await response.json();
    setData(myJson);
  }, []);

  return (
    <div>
      <header>
        <img id="headerimg" src={data.avatar_url}/>
        <h1>Zoe Jones</h1>
        <h2><span id="bio">{data.bio}</span></h2>
        <h3 id="stats">{data.followers} followers</h3>
        <h3><a href="http://github.com/zoemaestra" id="gitUrl">View on GitHub</a></h3>
      </header>
      <section>
        <h3>CTEC3905 Front End Web Development Assignment</h3>
        <p>
          This website was made with HTML5, CSS3 and JavaScript for my Front End Web Development assignment. In the header
          above you can see information from my GitHub, including the avatar, bio and URL. The header's info is pulled
          from the respective GitHub repo for each project page.
        </p>
        <p>
          This website showcases a few of my projects uploaded to GitHub. They are accessible via the navigation bar at
          the top. You can return to this page by clicking the icon on the far left in the navigation bar. You can toggle
          between light and dark mode with the button on the far right on the navigation bar.
        </p>
        <p>
          At the bottom of every page is the footer - from there, you can click the Back to top button and you'll be taken
          back to the top of the page.
        </p>
      </section>
    </div>
  )
}

export default Intro
