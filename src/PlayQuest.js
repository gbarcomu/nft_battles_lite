import Button from 'react-bootstrap/Button';
import { playQuest, getPlayerRemainingTime, fetchSquad } from './ethereumConnector.js';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Figure from 'react-bootstrap/Figure';
import { Timer } from './Timer';
import { useEffect, useState } from 'react';

function PlayQuest() {

  const [playButton, setPlayButton] = useState();

  useEffect(() => {
    fetchSquad().then(data => {
      if (data === undefined || data === null) {
        setPlayButton(<Button variant="dark" onClick={handleClick} disabled>You need to mint a squad first</Button>);
      }
      else {
        getPlayerRemainingTime().then((val) => {
          val = val === undefined ? 0 : val.toNumber();
          if (val !== 0) {
            setPlayButton(<Button variant="dark" onClick={handleClick} disabled>Your squad is faitgued and need to rest for <Timer /> seconds</Button>)
          }
          else {
            setPlayButton(<Button variant="dark" onClick={handleClick}>Start battle!</Button>)
          }
        });
      }
    })

    async function handleClick() {

      try {
        playQuest().then(val => {
          setBattleResult({
            playerSquad: [val.logs[0].data.substr(2, 2), val.logs[0].data.substr(4, 2), val.logs[0].data.substr(6, 2)],
            enemySquad: [val.logs[1].data.substr(2, 2), val.logs[1].data.substr(4, 2), val.logs[1].data.substr(6, 2)],
            battleNumbers: [parseInt(val.logs[2].data.substr(64, 2), 16), parseInt(val.logs[2].data.substr(128, 2), 16), parseInt(val.logs[2].data.substr(192, 2), 16)],
            battleWinners: [val.logs[3].data.substr(65, 1), val.logs[3].data.substr(129, 1), val.logs[3].data.substr(193, 1)],
            isPlayerWinner: [val.logs[4].data.substr(65, 1)]
          });
          handleShow();
        });
        setPlayButton(<Button variant="dark" onClick={handleClick} disabled>Start battle!&emsp;
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
  }, []);

  function numToImg(index) {
    const characters = [<Image src="/img/swordsman.png" fluid />,
    <Image src="/img/lancer.png" fluid />,
    <Image src="/img/knight.png" fluid />];
    return (
      <Row>
        <Col></Col>
        <Col xs={10} sm={8} md={6}>
          {characters[parseInt(index)]}
        </Col>
        <Col></Col>
      </Row>
    );
  }

  const [battleResult, setBattleResult] = useState({
    playerSquad: [-1, -1, -1],
    enemySquad: [-1, -1, -1],
    battleNumbers: [-1, -1, -1],
    battleWinners: [-1, -1, -1],
    isPlayerWinner: -1
  });

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    window.location.reload();
  }
  const handleShow = () => setShow(true);

  return (
    <div className="d-grid">
      {playButton}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Battle Report</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Table responsive>
            <thead>
              <tr>
                <th>User Squad</th>
                <th>Fight Result</th>
                <th>Fight Winner</th>
                <th>Enemy Squad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{numToImg(battleResult.playerSquad[0])}</td>
                <td>{battleResult.battleNumbers[0]}</td>
                <td>{battleResult.battleWinners[0] === "1" ? "Player" : "Enemy"}</td>
                <td>{numToImg(battleResult.enemySquad[0])}</td>
              </tr>
              <tr>
                <td>{numToImg(battleResult.playerSquad[1])}</td>
                <td>{battleResult.battleNumbers[1]}</td>
                <td>{battleResult.battleWinners[1] === "1" ? "Player" : "Enemy"}</td>
                <td>{numToImg(battleResult.enemySquad[1])}</td>
              </tr>
              <tr>
                <td>{numToImg(battleResult.playerSquad[2])}</td>
                <td>{battleResult.battleNumbers[2]}</td>
                <td>{battleResult.battleWinners[2] === "1" ? "Player" : "Enemy"}</td>
                <td>{numToImg(battleResult.enemySquad[2])}</td>
              </tr>
            </tbody>
          </Table>
          <div className="d-grid">
            <Badge bg={battleResult.isPlayerWinner == "1" ? "success" : "danger"}>
              {battleResult.isPlayerWinner == "1" ? "Player Wins!" : "Enemy Wins"}
            </Badge>
            <center><h5>
            <Figure>
              <Figure.Image
                width={60}
                alt="treasure chest"
                src="/img/treasure-chest.png"
              />
            </Figure>
            &emsp;Reward: {battleResult.isPlayerWinner == "1" ? "80" : "20"} Gold</h5></center>
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export { PlayQuest }