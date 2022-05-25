import Button from 'react-bootstrap/Button';
import { mintSquad } from './ethereumConnector.js';

function MintSquad() {

  async function handleClick() {

    try {
      mintSquad();
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <Button variant="dark" onClick={handleClick}>Mint a squad to play!</Button>
  )
}

export { MintSquad }