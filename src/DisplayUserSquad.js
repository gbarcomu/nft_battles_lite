import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MintSquad } from './MintSquad';

import { fetchSquad } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

function DisplayUserSquad() {

    const [userSquad, setUserSquad] = useState();

    const [mintButton, setMintButton] = useState();

    useEffect(() => {
        try {
            fetchSquad().then(data => {
                if (data !== undefined && data !== null) {
                    setUserSquad(
                        <Col xs={10} sm={8} md={6}>
                            {composeSquad(data)}
                        </Col>)
                }
                else {
                    setUserSquad(
                        <Col xs={12} sm={10} md={8}>
                            <Image src="/img/blacksmith.png" fluid />
                        </Col>
                    );
                    setMintButton(<MintSquad />)
                }
            });
        }
        catch (err) {
            setUserSquad(
                <Col xs={12} sm={10} md={8}>
                    <Image src="/img/blacksmith.png" fluid />
                </Col>
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
                return <div key={i} > {characters[e]} </div>
            }
            else {
                return ''
            }
        })
        return imgSquad.slice(0, -1);
    }

    return (
        <div className="p-4">
            <Row>
                <center><h5> Barracks</h5></center>
                <Col></Col>
                {userSquad}
                <Col></Col>
            </Row>
            <Row>
                {mintButton}
            </Row>
        </div>
    )
}

export { DisplayUserSquad }