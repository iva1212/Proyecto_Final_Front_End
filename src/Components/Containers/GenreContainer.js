import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Genre from '../Cards/Genre';
class GenreContainer extends Component {
    render(){    return(
        <Container  fluid="lg" style={{marginBottom:30}}>
            <Row>
                <Col lg={4}>
                <Genre name="Shooter"  img_source="https://news.xbox.com/en-us/wp-content/uploads/sites/2/Halo__inline.jpg"/>
                </Col>
                <Col lg={4}>
                <Genre name="Puzzle"  img_source="https://www.retrogames.cz/games/1030/NES_01.gif"/>
                </Col>
                <Col lg={4}>
                <Genre name="Adventure"  img_source="https://wallpaperstock.net/star-fox-adventures-wallpapers_20826_1600x1200.jpg"/>
                </Col>
                
            </Row>

        </Container>

    );
}
}



export default GenreContainer;