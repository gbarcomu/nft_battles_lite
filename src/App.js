import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Menu } from './Menu';
import { PlayQuest } from './PlayQuest';
import { DisplayUserSquad } from './DisplayUserSquad';
import { FeedSquad } from './FeedSquad';

export default function App() {

  return (
    <div>
      <Menu />
      <Row>
        <Col>
          <DisplayUserSquad />
        </Col>
        <Col xs={8}>
          <Row>
            <Col></Col>
            <Col xs={3}>
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



