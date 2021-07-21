import { useState, useEffect, setDisabled } from 'react';
import { ChainId, DAppProvider, useContractCall, useEthers, ERC20Interface, useSendTransaction, useContractFunction } from '@usedapp/core'
import { formatEther, parseEther } from '@ethersproject/units'
import { utils } from 'ethers'
import { Contract } from '@ethersproject/contracts'

const Intro = () => {
  const interface_ = new utils.Interface(ERC20Interface)
  const ContractAddress = '0x9f683b4910c31effc564e39a77c9159287d0770f'
  const contract = new Contract(ContractAddress, interface_)

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
  const { sendTransaction, state } = useSendTransaction()

  const { state_, send } = useContractFunction(contract, 'transfer', { transactionName: 'transfer' })
  const transferToken = (etherAmount: string) => {
    send({ address:'0xe065cC27EE71e73F0d19bf190f3B81bB9Ef4E097',value: parseEther(etherAmount) })
  }

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
          <div>
            <button className='button' onClick={() => sendTransaction({ to: '0x0000000000000000000000000000000000000000', value: parseEther('0.009') })}>Send ether</button>
          </div>
          {account && <p>Account: {account}</p>}
          {etherBalance && <p>Balance: {formatEther(etherBalance)} moagCoins</p>}
      </section>
    </div>
  )
}

export default Intro
