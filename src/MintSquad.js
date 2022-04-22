import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { mintSquad } from './ethereumConnector.js';

function MintSquad() {

  async function handleClick(event) {

    event.preventDefault();

    try {
      mintSquad();
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <Button variant="secondary" onClick={handleClick}>Mint</Button>
    </Container>
  )
}

export { MintSquad }