import React,{Component} from 'react';
import {Card, Container,Row,Col,Spinner,Button,Modal} from 'react-bootstrap';
import ReviewContainer from '../Containers/ReviewContainer';
import Pagination from "react-js-pagination";
import Review from '../Cards/Review'
import Icons from '../Util/Icons';
import {isLoggedIn,getUserData} from '../Util/Auth'

class GamePage extends Component {
    constructor(props) {
		super(props)
		this.state = {
            activePage:1,
			loading:true,
            showModal: false,
            reviews:[],
            isFav:false,
            game:null
        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.fetchGames = this.fetchGames.bind(this);
        this.fetchRatings = this.fetchRatings.bind(this);
        this.handleAddfavGame = this.handleAddfavGame.bind(this)
        this.handleDelfavGame = this.handleDelfavGame.bind(this)
        this.isFav = this.isFav.bind(this);
	}
    componentDidMount(){
        this.fetchGames()
        this.fetchRatings()
        this.isFav()
        
      }
      handleHideModal(){
        this.setState({showModal: false})
      }
      handleShowModal(){
        this.setState({showModal: true})
      }
      handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
      }
      fetchGames(){
        let url = ' http://127.0.0.1:8080/api/games/'+this.props.match.params.id;
        
        let settings = {
          method : 'GET',
        }
        fetch(url,settings)
        .then(res =>{
            if( res.ok ){
            return res.json();
        }
        throw new Error( res.statusText );
        })
        .then((data)=>{
          this.setState({ loading:false,game : data})
        })
        .catch( err => {
            alert(err.message);
        });
        
      }
      fetchRatings(){
        let url = ' http://127.0.0.1:8080/api/ratingsByGame/'+this.props.match.params.id;
        
        let settings = {
          method : 'GET',
        }
        fetch(url,settings)
        .then(res =>{
            if( res.ok ){
            return res.json();
        }
        throw new Error( res.statusText );
        })
        .then((data)=>{
          this.setState({ loading:false,reviews : data})
        })
        .catch( err => {
            alert(err.message);
        });
      }
      handleAddfavGame(event){
          const email = getUserData().email;
          const id = this.props.match.params.id;
        let data = {
            email,
            id
        }
        
        let url = 'http://127.0.0.1:8080/api/likeGame';
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        alert("Game Added To Favorites!");
                        window.location.reload();
                    }
                    throw new Error( response.statusText );
                })
                .catch( err => {
                    console.log(err);
                });
        
      }
      handleDelfavGame(event){
        const email = getUserData().email;
        const id = this.props.match.params.id;
      let data = {
          email,
          id
      }
      
      let url = 'http://127.0.0.1:8080/api/deleteLikedGame';
      let settings = {
          method : 'DELETE',
          headers : {
              'Content-Type' : 'application/json'
          },
          body : JSON.stringify( data )
      }
      fetch( url, settings )
              .then( response => {
                  if( response.ok ){
                      alert("Game Deleted from Favorites!");
                      window.location.reload();
                  }
                  throw new Error( response.statusText );
              })
              .catch( err => {
                  console.log(err);
              });
      
      }
      isFav(){
        const user = getUserData()
        let data={
            email:user.email,
            id : this.props.match.params.id
        }
        let url = 'http://127.0.0.1:8080/api/isLiked'
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        fetch( url, settings )
                    .then( response => {
                        if( response.ok ){
                           this.setState({isFav:true})
                        }
                        else{
                            this.setState({isFav:false})
                        }
                    })
                    .catch( err => {
                        alert(err.message);
                    });
    }
    render(){ 
        const id = this.props.match.params.id;
        const game= this.state.game;
        const {  loading } = this.state;
        const items=[];
        const reviewButton=[];

        let results=[];
        if(loading)
            return(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        else{
            if(this.state.reviews.length<=3){
                results.push(
                    <ReviewContainer reviews={this.state.reviews}></ReviewContainer>
                )
            }
            else{
                let last=(this.state.activePage-1) * 3;
                    results.push(
                        <>
                            <ReviewContainer reviews={this.state.reviews.slice(last,last+3)} game_Id={this.props.match.params.id}></ReviewContainer>
                        </>
                        );
                        
                
            }
        }
        if(isLoggedIn()){
            if(this.state.isFav){
                items.push(
                    <span>
                        <Button variant="danger" onClick={this.handleDelfavGame} > Delete from liked games</Button>
                    </span>
                )
            }
            else{
                items.push(
                    <span>
                        <Button variant="success" onClick={this.handleAddfavGame}> Add to Liked Games</Button>
                    </span>
                )
            }
            reviewButton.push(
                <Col lg={{ span: 3, offset: 7 }}><Button variant="success" onClick={this.handleShowModal}>Add Review</Button></Col>
            )
        }
        return(
        <div style={{minHeight: '82vh',padding: '10px'}}>
                    <Row >
                        <Col sm={4}>
                            <Card style= {{margin: '10px'}}>
                                <Card.Img  src={game.img_url} alt="" className="game-page-image"/>
                                <Card.Body>
                                    <Card.Title>{game.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{game.consoles.toString()}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{game.developer}</Card.Subtitle>
                                    <Card.Subtitle className="mb-2 text-muted">{game.year}</Card.Subtitle>
                                    <Icons game={game}></Icons>
                                    <Card.Text>{game.description}</Card.Text>
                                    {items}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={8}>
                        <Card style={{padding:'10px',margin: '10px'}}>
                            <Row style={{padding:'10px',marginLeft:'10px'}}>
                            <h1>Reviews</h1>
                            {reviewButton}
                            </Row>
                            <Container>
                                {results}
                            </Container>
                            <Pagination
                         activePage={this.state.activePage}
                         itemsCountPerPage={3}
                         totalItemsCount={this.state.reviews.length}
                         pageRangeDisplayed={5}
                         onChange={this.handlePageChange}
                         itemClass="page-item"
                         linkClass="page-link"
                         prevPageText="<"
                         nextPageText=">"
                    />
                        </Card>
                        
                        </Col>
                    </Row>

                    <Modal 
                    show={this.state.showModal} 
                    onHide={this.handleHideModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                        <Modal.Header closeButton>
                        <Modal.Title>Add Review</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Review editable={true} game_Id = {this.props.match.params.id}></Review>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHideModal}>
                            Close
                        </Button>
                        </Modal.Footer>
                    </Modal>
        </div>
    );}



}

export default GamePage;
