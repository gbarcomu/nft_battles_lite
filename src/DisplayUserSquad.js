import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import { MintSquad } from './MintSquad';

import { fetchSquad } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

function DisplayUserSquad() {

    const [userSquad, setUserSquad] = useState();

    const [mintButton, setMintButton] = useState();

    useEffect(() => {
        try {
            fetchSquad().then(data => {
                console.log(data);
                if (data !== undefined && data !== null) {
                    setUserSquad(composeSquad(data));
                }
                else {
                    setUserSquad(
                        <div>
                            <Image src="/img/blacksmith.png" fluid />
                        </div>
                    );
                    setMintButton(<MintSquad />)
                }
            });
        }
        catch (err) {
            setUserSquad(
                <div>
                    <Image src="/img/blacksmith.png" fluid />
                </div>
            );
            setMintButton(<MintSquad />)
        }

    }, []);

    function composeSquad(bytesSquad) {

        const characters = [<Image src="/img/swordsman.png" fluid />,
        <Image src="/img/lancer.png" fluid />,
        <Image src="/img/knight.png" fluid />];

        const imgSquad = bytesSquad.split("").slice(2, 12).map((e, i) => {
            if (i % 2 !== 0) {
                return characters[e]
            }
            else {
                return ''
            }
        })
        return imgSquad.slice(0, -1);
    }

    return (
        <Container>
            <Row>
                <center><h5 class="pt-4"> Barracks</h5></center>
                <Col></Col>
                <Col xs={12} sm={10} md={8}>
                    {userSquad}
                </Col>
                <Col></Col>
            </Row>
            <Row>
                {mintButton}
            </Row>
        </Container>
    )
}

export { DisplayUserSquad }