import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Menu } from './Menu';
import { PlayQuest } from './PlayQuest';
import { DisplayUserSquad } from './DisplayUserSquad';
import { FeedSquad } from './FeedSquad';
import { loadEthereumChainId, switchNetwork } from './ethereumConnector.js';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    loadEthereumChainId();
    switchNetwork();
  }, []);

  return (
    <div>
      <Menu />
      <Row>
        <Col>
          <DisplayUserSquad />
        </Col>
        <Col xs={6}>
          <Row>
            <Col></Col>
            <Col xs={4}>
              <Image src="/img/cross-swords.png" fluid />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <PlayQuest />
          </Row>
        </Col>
        <Col>
          <FeedSquad />
        </Col>
      </Row>
    </div>
  );
}



