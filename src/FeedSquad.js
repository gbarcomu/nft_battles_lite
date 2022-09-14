import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RemoveFatigue } from './RemoveFatigue';

import beerMug_img from './img/beer-mug.png';

function FeedSquad() {

    return (
        <div className="p-4">
            <Row>
                <center><h5> Inn</h5></center>
                <Col></Col>
                <Col xs={12} sm={10} md={8}>
                    <Image src={beerMug_img} fluid />
                </Col>
                <Col>
                </Col>
            </Row>
            <div className="d-grid">
            <RemoveFatigue />
            </div>
            <Row>
            </Row>
        </div>
    )
}

export { FeedSquad }