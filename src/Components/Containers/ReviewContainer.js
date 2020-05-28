import React,{Component} from 'react';
import {Pagination} from 'react-bootstrap';
import Review from '../Cards/Review'

class ReviewContainer extends Component {
    constructor(props) {
		super(props)
		this.state = {
			
        }
        
	}
    render(){   
        const reviews =  this.props.reviews;
        const items = []
        for(let i=0;i<reviews.length;i++){
            items.push(
                <div class="m-2"><Review review={reviews[i]} editable={false} game_Id={this.props.game_Id}></Review></div>
            )
        }
        return(
        <div>
            {items}
        </div>




    );}




}

export default ReviewContainer;