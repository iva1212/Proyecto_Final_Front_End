import React,{Component} from 'react';
import {Card} from 'react-bootstrap';


class Game extends Component {
    render(){    return(
        <div className="hvr-grow">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.game.img_source} className="game-image" />
            <Card.Body>
            <Card.Title>{this.props.game.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.game.console}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{this.props.game.year}</Card.Subtitle>
            </Card.Body>
        </Card>
        </div>

    );
    }

}


export default Game;