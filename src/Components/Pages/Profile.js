import React,{Component} from 'react';
import {ListGroup,Container,Row,Col,Tab,Card} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import {getUserData} from '../Util/Auth';
import GameContainer from '../Containers/GameContainer';
import ReviewContainer from '../Containers/ReviewContainer';
class Profile extends Component{
    constructor(props) {
		super(props)
		this.state = {
            activePageReviews : 1,
            activePageGames: 1,
            games: [],
            recommend:[],
            user: getUserData(),
            reviews:[]
        }
        this.fetchGames = this.fetchGames.bind(this);
        this.fectchRecomendations = this.fectchRecomendations.bind(this)
        this.handlePageChangeGames = this.handlePageChangeGames.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this)
        
	}
      componentDidMount(){
        this.fetchGames()
        this.fetchReviews()
        this.fectchRecomendations()
      }
      fetchGames(){
        let url = ' https://videogames-app.herokuapp.com/api/likeGame/'+this.state.user.email;
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
          this.setState({games: data})
        })
      }
      fetchReviews(){
          let url = 'https://videogames-app.herokuapp.com/api/ratingsByUser/'+this.state.user.email;
          let settings = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            
        }
          fetch( url, settings )
        .then( response => {
            if( response.ok ){
                return response.json();
            }

            throw new Error( response.statusText );
        })
        .then( responseJSON => {
            this.setState({reviews : responseJSON});
        })
        .catch( err => {
            alert("Something happend,Try again");
            console.log(err);
        });

      }
      fectchRecomendations(){
        let url = 'https://videogames-app.herokuapp.com/api/recommendedGames/'+this.state.user.email;
        let settings = {
          method : 'GET',
          headers : {
              'Content-Type' : 'application/json'
          },
          
      }
        fetch( url, settings )
            .then( response => {
                if( response.ok ){
                    return response.json();
                }

                throw new Error( response.statusText );
            })
            .then( responseJSON => {
                this.setState({recommend : responseJSON});
            })
            .catch( err => {
                alert("Something happend,Try again");
                console.log(err);
            });
      }
      handlePageChange(pageNumber) {
        this.setState({activePageReviews: pageNumber});
      }
      handlePageChangeGames(pageNumber){
        this.setState({activePageGames: pageNumber});
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
                                <GameContainer games={this.state.games.slice((this.state.activePageGames-1)*3,(this.state.activePageGames)*3)}></GameContainer>
                                <Pagination
                                    activePage={this.state.activePageGames}
                                    itemsCountPerPage={3}
                                    totalItemsCount={this.state.games.length}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChangeGames}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    prevPageText="<"
                                    nextPageText=">"
                                />
                            </Container>
                            </Tab.Pane>
                            
                            <Tab.Pane eventKey="#ratings">
                            <Container>
                                <ReviewContainer reviews={this.state.reviews} game_Id={null}></ReviewContainer>
                                <Pagination
                                    activePage={this.state.activePageReviews}
                                    itemsCountPerPage={3}
                                    totalItemsCount={this.state.reviews.length}
                                    pageRangeDisplayed={5}
                                    onChange={this.handlePageChange}
                                    itemClass="page-item"
                                    linkClass="page-link"
                                    prevPageText="<"
                                    nextPageText=">"
                                />
                            </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#recommend">
                            <Container>
                                <GameContainer games={this.state.recommend.slice(0,3)}></GameContainer>
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