import Button from 'react-bootstrap/Button';
import { removeBattleFatigue, getPlayerRemainingTime } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

function RemoveFatigue() {

  const [feedButton, setFeedButton] = useState(<Button variant="dark" onClick={handleClick} disabled>Buy a meal for your squad!</Button>);

  useEffect(() => {
    getPlayerRemainingTime().then((val) => {
      val = val == undefined ? 0 : val.toNumber();
      if (val != 0) {
        setFeedButton(<Button variant="dark" onClick={handleClick}>Buy a meal for your squad!</Button>)
      }
    });
  }, []);

  async function handleClick() {

    try {
      removeBattleFatigue();
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      {feedButton}
    </div>
  )
}

export { RemoveFatigue }