import { useState, useEffect } from 'react';
import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const Intro = () => {
  const [data, setData] = useState({})

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/zoemaestra');
    const myJson = await response.json();
    setData(myJson);
  }, []);

  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useEtherBalance(account)

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
        <h3>Ethers test</h3>
          <div>
            <button onClick={() => activateBrowserWallet()}>Connect</button>
          </div>
          {account && <p>Account: {account}</p>}
          {etherBalance && <p>Balance: {formatEther(etherBalance)}</p>}
      </section>
    </div>
  )
}

export default Intro
