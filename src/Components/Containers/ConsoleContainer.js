import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Console from '../Cards/Console';
class ConsoleContainer extends Component {
    render(){    return(
        <Container  fluid="lg" style={{marginBottom:30}}>
            <Row>
                <Col lg={4}>
                <Console name="NES"  img_source="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/NES_logo.svg/1200px-NES_logo.svg.png"/>
                </Col>
                <Col lg={4}>
                <Console name="SNES"  img_source="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/SNES_logo.svg/1200px-SNES_logo.svg.png"/>
                </Col>
                <Col lg={4}>
                <Console name="Sega Dreamcast"  img_source="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Dreamcast_logo.svg/1200px-Dreamcast_logo.svg.png"/>
                </Col>
                
            </Row>

        </Container>

    );
}
}



export default ConsoleContainer;