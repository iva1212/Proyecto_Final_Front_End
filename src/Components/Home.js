import React,{Component} from 'react';
import { Jumbotron,Container } from 'react-bootstrap';
import GameContainer from './Containers/GameContainer';
import ConsoleContainer from './Containers/ConsoleContainer';
import GenreContainer from './Containers/GenreContainer';

class Home extends Component {

    state = {
      games: []
    }
    componentDidMount(){
      let url = ' https://videogames-app.herokuapp.com/api/games';
      let settings = {
        method : 'GET'
      }
      fetch(url,settings)
      .then(res => res.json())
      .then((data)=>{
        this.setState({games: data})
        console.log(this.state.games);
      })
    }
    render(){
        return(
        <div>
        <Jumbotron fluid>
            <Container>
                <h1>Video Games DB and Recomendator</h1>
                <p>
                        Welcome to the page,Login to access all that the web page has to offer.
                </p>
            </Container>
        </Jumbotron>
        <Container>
        <h2>Search by Title</h2>
        <GameContainer games={this.state.games.slice(0,3)}></GameContainer>
        </Container>
        <Container>
          <h2>Search by Console</h2>
          <ConsoleContainer></ConsoleContainer>
        </Container>
        <Container>
          <h2>Search by Genre</h2>
          <GenreContainer></GenreContainer>
        </Container>
        </div>


    );
}
}

export default Home;