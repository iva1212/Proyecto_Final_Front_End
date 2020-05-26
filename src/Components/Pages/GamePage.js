import React,{Component} from 'react';
import {Card, Container,Row,Col,Spinner,Button,Modal} from 'react-bootstrap';
import ReviewContainer from '../Containers/ReviewContainer';
import Review from '../Cards/Review'
import Icons from '../Util/Icons';
import {isLoggedIn} from '../Util/Auth'

class GamePage extends Component {
    constructor(props) {
		super(props)
		this.state = {
			loading:true,
            showModal: false,
            game:null
        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
	}
    componentDidMount(){
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

        console.log(this.state.games);
      }
      handleHideModal(){
        this.setState({showModal: false})
      }
      handleShowModal(){
        this.setState({showModal: true})
      }
      
    render(){ 
        const id = this.props.match.params.id;
        const game= this.state.game;
        const {  loading } = this.state;
        const items=[];
        const reviewButton=[];

        if(loading)
            return(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        if(isLoggedIn()){
            items.push(
                <span>
                
                    <Button variant="success"> Add to Liked Games</Button>{'  '}
                    <Button variant="danger"> Add to Disliked Games</Button>
                </span>
            )
            reviewButton.push(
                <Col lg={{ span: 3, offset: 7 }}><Button variant="success" onClick={this.handleShowModal}>Add Review</Button></Col>
            )
        }
        return(
        <div style={{minHeight: '82vh',padding: '10px'}}>
                    <Row >
                        <Col sm={4}>
                            <Card style= {{margin: '10px'}}>
                                <Card.Img  src={game.img_source} alt="" className="game-page-image"/>
                                <Card.Body>
                                    <Card.Title>{game.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{game.consoles}</Card.Subtitle>
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
                                <ReviewContainer></ReviewContainer>
                            </Container>
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
                            <Review editable={true}></Review>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHideModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleHideModal}>
                            Send Review
                        </Button>
                        </Modal.Footer>
                    </Modal>
        </div>
    );}



}

export default GamePage;
