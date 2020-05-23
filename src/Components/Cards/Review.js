import React,{Component} from 'react';
import {Card,Row,Col} from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';
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
        return(

        <Card style={{padding: '10px'}}>
            <Card.Title>
                <Row>
                    <Col md={4}>Armando Casas</Col>
                    <Col  md={{ span: 2, offset: 6 }}>
                    <StarRatingComponent 
                            style={{margin:'5px'}}
                            name="review" 
                            starCount={5}
                            value={rating}
                            editing={false}
                            onStarClick={this.onStarClick.bind(this)}
                            />
                    </Col>
                </Row>
            </Card.Title>
            <Card.Body>
                <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend nisi eu blandit ullamcorper.
                     Duis feugiat, lorem eu ultrices ullamcorper, nisi odio semper massa, in eleifend felis erat at dolor.
                      Vivamus rhoncus vulputate ipsum a porttitor. Nulla ante lacus, tincidunt ut nulla nec, tincidunt interdum diam. </Card.Text>
            </Card.Body>
        </Card>



    );
    }
}


export default Review;