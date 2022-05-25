import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { RemoveFatigue } from './RemoveFatigue';

function FeedSquad() {

    return (
        <Container>
            <Row>
                <center><h5 class="pt-4"> Inn</h5></center>
                <Col></Col>
                <Col xs={12} sm={10} md={8}>
                    <Image src="/img/beer-mug.png" fluid />
                </Col>
                <Col>
                </Col>
            </Row>
            <RemoveFatigue />
            <Row>
            </Row>
        </Container>
    )
}

export { FeedSquad }