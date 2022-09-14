import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MintSquad } from './MintSquad';

import { fetchSquad } from './ethereumConnector.js';
import { useEffect, useState } from 'react';

import blacksmith_img from './img/blacksmith.png';
import swordsman_img from './img/swordsman.png';
import lancer_img from './img/lancer.png';
import knight_img from './img/knight.png';

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
                            <Image src={blacksmith_img} alt="blacksmith" fluid />
                        </Col>
                    );
                    setMintButton(<MintSquad />)
                }
            });
        }
        catch (err) {
            setUserSquad(
                <Col xs={12} sm={10} md={8}>
                    <Image src={blacksmith_img} alt="blacksmith" fluid />
                </Col>
            );
            setMintButton(<MintSquad />)
        }

    }, []);

    function composeSquad(bytesSquad) {

        const characters = [<Image src={swordsman_img} alt="swordsman" fluid />,
        <Image src={lancer_img} alt="lancer" fluid />,
        <Image src={knight_img} alt="knight" fluid />];

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