import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { mintSquad } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

function MintSquad() {

  const [mintButton, setMintButton] = useState(<Button variant="dark" onClick={handleClick}>Mint a squad to play</Button>);

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