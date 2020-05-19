import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Game from '../Cards/Game';
class GameContainer extends Component {
    render(){    return(
        <Container  fluid="lg" style={{marginBottom:30}}>
            <Row>
                <Col lg={4}>
                <Game name="Super Mario Bros" console="Nintendo Entretainment System" description="The classic mario brothers" img_source="https://coverproject.sfo2.cdn.digitaloceanspaces.com/nes/nes_supermariobros_thumb.jpg"/>
                </Col>
                <Col lg={4}>
                <Game name="The Legend of Zelda" console="Nintendo Entretainment System" description="The classic zelda game" img_source="https://coverproject.sfo2.cdn.digitaloceanspaces.com/nes/nes_legendofzelda_5_thumb.jpg"/>
                </Col>
                <Col lg={4}>
                <Game name="Megaman 2" console="Nintendo Entretainment System" description="The classic megaman" img_source="https://coverproject.sfo2.cdn.digitaloceanspaces.com/nes/nes_megaman2_4_thumb.jpg"/>
                </Col>
                
            </Row>

        </Container>

    );
}
}



export default GameContainer;