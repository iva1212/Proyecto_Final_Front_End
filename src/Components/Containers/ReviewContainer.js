import React,{Component} from 'react';
import {Pagination} from 'react-bootstrap';
import Review from '../Cards/Review'

class ReviewContainer extends Component {
    constructor(props) {
		super(props)
		this.state = {
			reviews:[]
        }
        
	}
    render(){   
        
        return(
        <div>
            <div class="m-2"><Review editable={false}></Review></div>
            <div class="m-2"><Review editable={false}></Review></div>
            <div class="m-2"><Review editable={false}></Review></div>
        </div>




    );}




}

export default ReviewContainer;