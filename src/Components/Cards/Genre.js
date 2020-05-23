import React,{Component} from 'react';
import {Card} from 'react-bootstrap';

class Genre extends Component {
    render(){    return(
        <div className="hvr-grow">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img_source} className="genre-image" />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            </Card.Body>
        </Card>
        </div>

    );
    }
}
export default Genre;
