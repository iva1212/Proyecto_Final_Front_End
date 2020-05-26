import React,{Component} from 'react';
import {Card,Row,Col,Form} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
import {getUserData} from '../Util/Auth';
class Review extends Component {
    constructor() {
        super();
     
        this.state = {
          rating: 3
        };
      }
     
      onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue});
      }
    render(){    
        const { rating } = this.state;

        const text=[];
        const name=[];
        const userData = getUserData();


        if(this.props.editable){
          text.push(
              <Form>
                <Form.Group>
                <Form.Control id="reviewContent" as="textarea" rows="6" placeholder="Place your comments here" />
                </Form.Group>
              </Form>
          )
          name.push(
            <Col md={4}>{userData.name} {userData.last_name}</Col>
          )
        }
        else{
          text.push(
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nisi eu blandit ullamcorper.
            Duis feugiat, lorem eu ultrices ullamcorper, nisi odio semper massa, in eleifend felis erat at dolor.
             Vivamus rhoncus vulputate ipsum a porttitor. Nulla ante lacus, tincidunt ut nulla nec, tincidunt interdum diam. </Card.Text>
            )
            name.push(
              <Col md={4}>Armando Casas</Col>
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