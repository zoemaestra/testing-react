import Gallery from './Gallery'
import { useState, useEffect } from 'react';
const Timetable = () => {
  const images = require.context('../images', true);
  let loadImage = imageName => (images(`./${imageName}`).default);

  const [data, setData] = useState({})

  useEffect(async () => {
    const response = await fetch('https://api.github.com/repos/zoemaestra/DiscordAssistant');
    const myJson = await response.json();
    setData(myJson);
  }, []);

  return (
    <div>
      <header>
        <img src={loadImage("assistant.png")} alt="Assistant bot icon" />
        <h1>Assistant Discord Bot</h1>
          <h2><span id="bio">{data.description}</span></h2>
          <h3 id="stats">{data.stargazers_count} stars</h3>
        <img
          id="buildstatus"
          src="https://travis-ci.com/zoemaestra/DiscordAssistant.svg?branch=master"
          alt="Build status"
        />
        <h3><a href={data.html_url} id="gitUrl">View on GitHub</a></h3>
      </header>
      <section>
        <h3>Intro</h3>
        <p>
          The Assistant bot is a bot I have made for use on a Discord server. It has multiple features for the server,
          adding functionality other off the shelf bots don't provide.
        </p>
        <h3>How it is made</h3>
        <p>
          The bot is written in Python with <span><a href="https://pypi.org/project/discord.py/">discord.py</a></span
          >.
        </p>
        <p>
          It is hosted on an AWS EC2 instance and has continuous integration set up with Travis and Docker, so any pushes
          to the main branch on GitHub are built into a Docker images, which are uploaded to Docker Hub and then pulled to
          the server and automatically run.
        </p>
        <h3>Features</h3>
        <p>
          One of the most used features is the specs feature. This scrapes phone and tablet specifications from
          devicespecifications.com and shows it in an easy to read format in an embed message.
        </p>
        <p>
          Another user feature is the linkme feature, which links Google Play Store apps and shows relevant information
          about the app. It also automatically converts AMP links to regular web links instead when AMP links are posted.
        </p>
        <p>
          There are some moderation features too, mostly to prevent users who are known to cause problems from joining.
        </p>
      </section>
      <Gallery images={"DiscordBot"}/>
    </div>
  )
}

export default Timetable
