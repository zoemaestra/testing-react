import Gallery from './Gallery'
import { useState, useEffect } from 'react';
const Timetable = () => {
  const images = require.context('../images', true);
  let loadImage = imageName => (images(`./${imageName}`).default);

  const [data, setData] = useState({})

  useEffect(async () => {
    const response = await fetch('https://api.github.com/repos/zoemaestra/moagcoin');
    const myJson = await response.json();
    setData(myJson);
  }, []);

  return (
    <div>
      <header>
        <img src={loadImage("moagcoin.gif")} alt="MoagCoin Icon" />
        <h1>MoagCoin</h1>
        <h2><span id="bio">{data.description}</span></h2>
        <h3 id="stats">{data.stargazers_count} stars</h3>
        <h3><a href={data.html_url} id="gitUrl">View on GitHub</a></h3>
      </header>
      <section>
        <h3>Intro</h3>
        <p>
          MoagCoin was a functional proof of work cryptocurrency I wrote in Python. It was created as a joke with a friend
          as a parody of scam cryptocurrencies like
          <span><a href="https://en.wikipedia.org/wiki/Bitconnect">BitConnect</a></span
          >, advertising fake features like negative transaction latency and an advanced AI that meant it was impossible
          to lose money. Promotional material was made for it too, by photoshopping Soviet space program posters.
        </p>
        <h3>How it is made</h3>
        <p>
          Both the mining utility and the server is written in Python 3. The UI is with
          <span><a href="https://docs.python.org/3/library/tkinter.html">TkInter</a></span> and the server uses
          <span><a href="https://pypi.org/project/Flask/">Flask</a></span
          >. Mining is done when the server issues the client a block to mine. The miner tries to find a hash with a set
          amount of zeros at the start, once found it will tell the server the string (which uses a hash of the previous
          block) that creates that hash. The server verifies and issues a mining reward to the client. Because this was
          run on a small scale, to prevent abuse, mining rewards are lower depending on how quickly it's done. This was to
          give users with lower power PCs a chance and to try and prevent users from using online servers like Google
          Cloud to mine far faster than anyone else.
        </p>
        <h3>Features</h3>
        <p>
          The mining utility originally played a random song from a provided selection. This included Here comes The
          Money, keygen music,
          <span><a href="https://www.youtube.com/watch?v=F-WoM_4wERw">a MIDI version of a Skrillex song</a></span> and
          various others. It mined on the CPU and was able to use multiple cores, giving the user the option to set how
          many would be used with a slider that had the max value at however many cores the user had. The miner utility
          had a wallet where the user could see their address and send transactions to others, as well as view their own
          inbound/outbound transactions. This included the address it was from and the status (ie if it had been confirmed
          or not). The utility's design had a "hacker" aesthetic, with green text and a black background.
        </p>
      </section>
      <Gallery images={"MoagCoin"}/>
    </div>
  )
}

export default Timetable
