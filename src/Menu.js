import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import { PlayerTokenBalance } from './PlayerTokenBalance';
import { HowToPlay } from './HowToPlay';
import { CHAIN_ID } from './Constants';

import { loadEthereumAccount, loadEthereumRequestAccount, loadEthereumChainId } from './ethereumConnector.js';

import polygon_img from './img/polygon.png';
import moneyBag_img from './img/money-bag.png';

function Menu() {

  const [userAddress, setUserAddress] = useState();

  const [currentChain, setCurrentChain] = useState();

  async function loadAddress() {
    const account = await loadEthereumRequestAccount();
    setUserAddress(<Navbar.Text>{account}</Navbar.Text>);
  }

  useEffect(() => {
    try {
      loadEthereumAccount().then(account => {
        if (account != null) {
          setUserAddress(<Navbar.Text>{account}</Navbar.Text>);
        }
        else {
          setUserAddress(<Button variant="light" onClick={loadAddress}>Load Address</Button>);
        }
      });
      loadEthereumChainId().then(chainid => {
        if (chainid === CHAIN_ID) {
          setCurrentChain(
            <img
              src={polygon_img}
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="gold icon"
            />)
        }
        else {
          setCurrentChain(
            <Navbar.Text>
              not supported, please switch to Polygon
            </Navbar.Text>)
        }
      });
    }
    catch (err) {
      setUserAddress(<Button variant="light" onClick={loadAddress}>Load Address</Button>);
    }
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto">
          <img
            src={moneyBag_img}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="gold icon"
          />
          <Navbar.Text>
            <PlayerTokenBalance />
          </Navbar.Text>
        </Nav>
        <Nav>
          <Navbar.Text>
            Network:&ensp;
          </Navbar.Text>
          {currentChain}
        </Nav>
        <Nav>
          <HowToPlay />
        </Nav>
        <Nav>
          {userAddress}
        </Nav>
      </Container>
    </Navbar>
  )
}

export { Menu }