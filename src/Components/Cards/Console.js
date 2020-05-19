import React,{Component} from 'react';
import {Card} from 'react-bootstrap';


class Console extends Component {
    render(){    return(
        <div class="hvr-grow">
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={this.props.img_source} className="console-image" />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            </Card.Body>
        </Card>
        </div>

    );
    }

}


export default Console;