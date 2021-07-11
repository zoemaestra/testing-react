import { useState, useEffect } from 'react';
import { ChainId, DAppProvider, useContractCall, useEthers,ERC20Interface } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const Intro = () => {
  const [data, setData] = useState({})

  useEffect(async () => {
    const response = await fetch('https://api.github.com/repos/zoemaestra/testing-react');
    const myJson = await response.json();
    setData(myJson);
  }, []);

  function useTokenBalance(
    tokenAddress: string | Falsy,
    address: string | Falsy
  ) {
    const [allowance] =
      useContractCall(
          address &&
          tokenAddress && {
            abi: ERC20Interface,
            address: tokenAddress,
            method: 'balanceOf',
            args: [address],
          }
      ) ?? []
    return allowance
  }

  const { activateBrowserWallet, account } = useEthers()
  const etherBalance = useTokenBalance('0x9f683b4910c31effc564e39a77c9159287d0770f',account)

  return (
    <div>
      <header>
      <h2><span id="bio">{data.description}</span></h2>
      <h3 id="stats">{data.stargazers_count} stars</h3>
      <h3><a href={data.html_url} id="gitUrl">View on GitHub</a></h3>
      </header>
      <section>
        <h3>Ethers test</h3>
          <div>
            <button className='button' onClick={() => activateBrowserWallet()}>Connect</button>
          </div>
          {account && <p>Account: {account}</p>}
          {etherBalance && <p>Balance: {formatEther(etherBalance)} moagCoins</p>}
      </section>
    </div>
  )
}

export default Intro
