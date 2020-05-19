import React,{Component} from 'react';
import {Card} from 'react-bootstrap';


class Game extends Component {
    render(){    return(
        <div class="hvr-grow">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img_source} className="game-image" />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{this.props.console}</Card.Subtitle>
                <Card.Text>
                    {this.props.description}
                </Card.Text>
            </Card.Body>
        </Card>
        </div>

    );
    }

}


export default Game;