import React,{Component} from 'react';
import {Card, Container,Row,Col} from 'react-bootstrap';
import ReviewContainer from '../Containers/ReviewContainer'

let json = require('../../dummy.json');

let game;
class GamePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            id : this.props.match.params.id
        }
    }

    render(){ 
        let id = this.state.id;
        console.log(id);
        game = json.find(element => element._id.toString() === id.toString());
        return(
        <div style={{minHeight: '82vh',padding: '10px'}}>
                    <Row >
                        <Col sm={4}>
                            <Card style= {{margin: '10px'}}>
                                <Card.Img  src={game.img_source} alt="" className="game-page-image"/>
                                <Card.Body>
                                    <Card.Title>{game.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{game.console}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{game.year}</Card.Subtitle>
                                    <Card.Text>{game.description}</Card.Text>
                                </Card.Body>
                            </Card>
                            
                        </Col>
                        <Col sm={8}>
                        <Card style={{padding:'10px',margin: '10px'}}>
                            <h1>Reviews</h1>
                            <Container>
                                <ReviewContainer></ReviewContainer>
                            </Container>
                        </Card>
                        </Col>
                    </Row>
        </div>
    );}



}

export default GamePage;
