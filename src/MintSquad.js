import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { mintSquad, loadEthereumChainId } from './ethereumConnector.js';
import { useState, useEffect } from 'react';
import { CHAIN_ID } from './Constants';

function MintSquad() {

  const [mintButton, setMintButton] = useState(<div></div>);

  useEffect(() => {
    try {
      loadEthereumChainId().then(chainid => {
        if (chainid === CHAIN_ID) {
          setMintButton(<Button variant="dark" onClick={handleClick}>Mint a squad to play</Button>);
        }
        else {
          setMintButton(<Button variant="dark" onClick={handleClick} disabled>Mint a squad to play</Button>);
        }
      });
    }
    catch (err) {
      setMintButton(<Button variant="dark" onClick={handleClick} disabled>Mint a squad to play</Button>)
    }
  }, []);


  async function handleClick() {

    try {
      mintSquad();
      setMintButton(<Button variant="dark" onClick={handleClick} disabled>Mint a squad to play&emsp;
      <Spinner
          as="span"
          animation="border"
          size="sm"
          role="status"
          aria-hidden="true"
        /></Button>)
    }
    catch (err) {
      console.error(err);
    }
  }

  return (mintButton)
}

export { MintSquad }