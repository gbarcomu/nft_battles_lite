import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function HowToPlay() {

  async function handleClick(event) {

    handleShow();
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button variant="light" onClick={handleClick}>How to play</Button>

      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>Welcome to NFT squad battles</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p><i>TL;DR just press buttons and see what happens! It's fun and cheap, I promise.</i></p>
          <p>In order to play the game you need to <b>mint an NFT squad</b> - the button on the left - it only costs <b>5 Matics</b>. Your NFT squad will be composed of 3 units (pseudo) randomly chosen between swordsmen, lancers, and knights.</p>
          <p>Once you have your squad ready you can <b>play for free</b> (yes, for free!) by pressing the central button.</p>
          <p>For the fight, 3 (pseudo) random enemy units will pop up and will fight against your squad. Each unit of your squad will be fighting with one enemy unit. It could be a favourable, neutral, or unfavourable fight according to the following rules:</p>
          <p>&emsp; - Swordsman beats lancer, lancer beats knight, and knight beats swordsman, easy right?</p>
          <p>One (pseudo) random number will be generated for each fight. You need to score a 30/50/70 or more to be victorious. <b>Win 2 or more individual fights for winning the battle</b>. You'll be rewarded with <b>80 units of gold if you win or 20 if you lose</b>.</p>
          <p>After a battle your squad will be exhausted and they will need some rest but, here are some good news, you can <b>purchase a meal</b> for them (only <b>1 Matic</b>) - the button on the right - and they'll be <b>ready for the next battle</b> right away!</p>

          <h5>FAQ</h5>
          <p>Q - Is this just heads or tails with more steps?</p>
          <p>A - Well... maybe, but aren't all blockchain games like this?</p>
          <p>Q - What's the usage of gold?</p>
          <p>A- At this very moment it's just yet another pointless ERC-20 token, but I have tons of ideas for the future - e.g. the possibility of depositing it into a vault and earning a 20% APY (pun intended) -. Stay tuned for updates!</p>

          <h6>Source code <a href="https://github.com/gbarcomu/nft_battles_lite" target="_blank" rel="noreferrer">here</a></h6>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export { HowToPlay }