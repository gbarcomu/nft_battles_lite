import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Menu } from '../Menu';
import { MintSquad } from '../MintSquad';
import { PlayQuest } from '../PlayQuest';
import { Timer } from '../Timer';
import { useEffect, useState } from 'react';
import { DisplayUserSquad } from '../DisplayUserSquad';
import { getPlayerRemainingTime } from '../ethereumConnector.js';

export default function CreateSquad() {

  const [count, setCount] = useState(10);


  useEffect(() => {
    const remainingTime = async () => {
      const timeRem = await getPlayerRemainingTime();
      console.log(timeRem.toNumber());
      setCount(timeRem.toNumber());
    };
    remainingTime();
  }, []);

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
              <Image src="/img/blacksmith.png" fluid />
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <MintSquad />
            <PlayQuest />
            <Timer remainingTime={count} />
            {count}
          </Row>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}