import React,{Component} from 'react';
import {Card,Row,Col,Form,Button} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {getUserData} from '../Util/Auth';
class Review extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 3
        };
        this.handleSubmit = this.handleSubmit.bind(this)
      }
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
      handleSubmit(event){
        const userData = getUserData();
        const form = event.currentTarget;
        const review=form.querySelector('#reviewContent').value
        const stars = this.state.rating
        const email = userData.email
        const game_Id = this.props.game_Id;
        event.preventDefault();
        event.stopPropagation();
        let data = {
            email,
            game_Id,
            stars,
            review
        }
        
        let url = 'https://videogames-app.herokuapp.com/api/rating';
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        console.log(settings.body);
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        return response.json();
                    }
                    throw new Error( response.statusText );
                })
                .then( responseJSON => {
                    alert("Review Added");
                    window.location.reload();
                    
                })
                .catch( err => {
                  alert("Review Added");
                  window.location.reload();
                });

      }
    render(){    
        const review = this.props.review
        
        let  rating;
        if(review){
          rating = review.stars
        }
        else{
          rating = this.state.rating;
        }

        const text=[];
        const name=[];
        const userData = getUserData();


        if(this.props.editable){
          text.push(
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Control id="reviewContent" as="textarea" rows="6" placeholder="Place your comments here" />
                </Form.Group>
                <Button variant="primary" type="submit">
                            Send Review
                </Button>

              </Form>
          )
          name.push(
            <Col md={4}>{userData.name} {userData.last_name}</Col>
          )
        }
        else{
          text.push(
            <Card.Text>{review.review}</Card.Text>
            )
            name.push(
            <Col md={4}>{review.author_name}</Col>
            )
        }
        return(

        <Card style={{padding: '10px'}}>
            <Card.Title>
                <Row>
                    {name}
                    <Col  md={{ span: 2, offset: 6 }}>
                    <StarRatingComponent 
                            style={{margin:'5px'}}
                            name="review" 
                            starCount={5}
                            value={rating}
                            editing={this.props.editable}
                            onStarClick={this.onStarClick.bind(this)}
                            />
                    </Col>
                </Row>
            </Card.Title>
            <Card.Body>
                {text}
            </Card.Body>
        </Card>



    );
    }
}


export default Review;