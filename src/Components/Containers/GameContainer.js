import React,{Component} from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import Game from '../Cards/Game';



class GameContainer extends Component {
    render(){   
        
        const games =  this.props.games;
        const items = []
        for(let i=0;i<games.length;i++){
            items.push(
                <Col lg={4}>
                    <Link to={{
                    pathname: `/games/${games[i]._id}`,
                    game: games[i]
                    }}><Game game={games[i]} key={games[i]._id}/></Link>
                </Col>
            )
        }
        
        
        return(
        <Container  fluid="lg" style={{marginBottom:30}}>
            <Row>
                {items}
            </Row>

        </Container>

    );
}
}



export default GameContainer;