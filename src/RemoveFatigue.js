import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { removeBattleFatigue, getPlayerRemainingTime } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

function RemoveFatigue() {

  const [feedButton, setFeedButton] = useState(<Button variant="dark" onClick={handleClick} disabled>Buy a meal for your squad</Button>);

  useEffect(() => {
    getPlayerRemainingTime().then((val) => {
      val = val === undefined ? 0 : val.toNumber();
      if (val !== 0) {
        setFeedButton(<Button variant="dark" onClick={handleClick}>Buy a meal for your squad</Button>)
      }
    });
  }, []);

  async function handleClick() {

    try {
      removeBattleFatigue();
      setFeedButton(<Button variant="dark" onClick={handleClick} disabled>Buy a meal for your squad&emsp;
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

  return (
      feedButton
  )
}

export { RemoveFatigue }