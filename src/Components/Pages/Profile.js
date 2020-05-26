import React,{Component} from 'react';
import {ListGroup,Container,Row,Col,Tab,Card} from 'react-bootstrap';
import {getUserData} from '../Util/Auth';
import GameContainer from '../Containers/GameContainer';
import ReviewContainer from '../Containers/ReviewContainer';
class Profile extends Component{
    state = {
        games: []
      }
      componentDidMount(){
        let url = ' http://127.0.0.1:8080/api/games';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
          this.setState({games: data})
        })
      }
    render(){
        const userData = getUserData();
        return(
            <Container style={{minHeight: '82vh',padding:'10px'}} fluid={true}>
                <h2>Your Profile</h2>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#info">
                    <Row>
                        <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#info">
                                Your Info
                            </ListGroup.Item>
                            <ListGroup.Item action href="#liked">
                                 Liked Games
                            </ListGroup.Item>
                            <ListGroup.Item action href="#unliked">
                                Disliked Games
                            </ListGroup.Item>
                            <ListGroup.Item action href="#ratings">
                                Your Ratings
                            </ListGroup.Item>
                            <ListGroup.Item action href="#recommend">
                                My Recommended Games
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col md={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#info">
                            <Card style={{padding:'10px'}}>
                                <Card.Title>Your info</Card.Title>
                                <Card.Body>
                                     <h3>Name:  {userData.name} {userData.last_name}</h3>
                                     <h3>Email:  {userData.email}</h3>
                                </Card.Body>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#liked">
                            <Container>
                                <GameContainer games={this.state.games.slice(0,3)}></GameContainer>
                            </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#unliked">
                            <Container>
                                <GameContainer games={this.state.games.slice(3,6)}></GameContainer>
                            </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#ratings">
                            <Container>
                                <ReviewContainer></ReviewContainer>
                            </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#recommend">
                            <Container>
                                <GameContainer games={this.state.games.slice(6,9)}></GameContainer>
                            </Container>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                
            </Container>
        )
    }


}
export default Profile;