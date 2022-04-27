import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { removeBattleFatigue } from './ethereumConnector.js';

function RemoveFatigue() {

  async function handleClick(event) {

    event.preventDefault();

    try {
      removeBattleFatigue();
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <Container>
      <Button variant="secondary" onClick={handleClick}>Buy a meal for your squad!</Button>
    </Container>
  )
}

export { RemoveFatigue }