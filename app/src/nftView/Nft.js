import React, { useEffect, useState } from 'react';
import './Nft.css';
import CandyMachine from '../CandyMachine';

import nftA from '../nft_collection/vending-1.png';
import nftB from '../nft_collection/vending-2.png';
import nftC from '../nft_collection/crypto-goddess-1.png';
import nftD from '../nft_collection/crypto-goddess-2.png';
import nftE from '../nft_collection/gm-1.png';
import nftF from '../nft_collection/gm-2.png';
import nftG from '../nft_collection/bs_1.png';
import nftH from '../nft_collection/bs_2.png';
import nftI from '../nft_collection/rocket-1.png';
import nftJ from '../nft_collection/rocket-2.png';
import nftK from '../nft_collection/rocket-3.png';


import vendingMachine from '../vendingmachine.png';




// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const SOLSCAN_LINK = `https://solscan.io/`;
const BUILDSPACE_LINK = `https://buildspace.so/`;

const App = () => {
  // State
  const [walletAddress, setWalletAddress] = useState(null);

  // boop testing
  const [beep, setBeep] = useState(false);

  // Actions
    const beepHandler = () => {
        setBeep(true)
    }

    const mintyButton = () => (
        <button class="minty-button" onClick={beepHandler}>Mint</button>
    )




  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;

      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
          const response = await solana.connect({ onlyIfTrusted: true });
          console.log(
            'Connected with Public Key:',
            response.publicKey.toString()
          );

          /*
           * Set the user's publicKey in state to be used later!
           */
          setWalletAddress(response.publicKey.toString());
        }
      } else {
        alert('Solana object not found! Get a Phantom Wallet 👻');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const connectWallet = async () => {
    const { solana } = window;
  
    if (solana) {
      const response = await solana.connect();
      console.log('Connected with Public Key:', response.publicKey.toString());
      setWalletAddress(response.publicKey.toString());
    }
  };

  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  // render NFTs
  const nftCollectionRender = () => (
    <div className='nft-container'>
        {/* <div className="nft-item"><img class="vending-machine" src={nftA} alt="Crpto Goddess"/></div> */}
        <div className="nft-item"><img class="vending-machine" src={nftB} alt="Crpto Goddess"/></div>
        {/* <div className="nft-item"><img class="vending-machine" src={nftC} alt="Crpto Goddess"/></div> */}
        <div className="nft-item"><img class="vending-machine" src={nftD} alt="Crpto Goddess"/></div>
        {/* <div className="nft-item"><img class="vending-machine" src={nftE} alt="Crpto Goddess"/></div> */}
        <div className="nft-item"><img class="vending-machine" src={nftF} alt="Crpto Goddess"/></div>
        {/* <div className="nft-item"><img class="vending-machine" src={nftG} alt="Crpto Goddess"/></div> */}
        <div className="nft-item"><img class="vending-machine" src={nftH} alt="Crpto Goddess"/></div>
        {/* <div className="nft-item"><img class="vending-machine" src={nftI} alt="Crpto Goddess"/></div> */}
        {/* <div className="nft-item"><img class="vending-machine" src={nftJ} alt="Crpto Goddess"/></div> */}
        {/* <div className="nft-item"><img class="vending-machine" src={nftK} alt="Crpto Goddess"/></div> */}
    </div>
  )

  const renderHomepage = () => (
    <div>
      <img class="vending-machine" src={vendingMachine} alt="Vending Machine"/>
    </div>
  )

// MINT BTN IS WAY UP THERE 🟢🟢🟢🟢🟢

  return (
    <div id="front-view" className="App">
      <div className="container">
        {!beep && nftCollectionRender()}
        {!beep && mintyButton()}
        {beep && <CandyMachine walletAddress={window.solana} />}
        
        {/* <div>
            <img src={nftGoddess}></img>
        </div> */}

        {/* Check for walletAddress and then pass in walletAddress */}
        {/* {walletAddress && <CandyMachine walletAddress={window.solana} />} */}


        {/* <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo}/>
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by Ando Collective`}</a>
        </div> */}
      </div>
    </div>
  );
};

export default App;