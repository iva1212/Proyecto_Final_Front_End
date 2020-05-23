import React,{Component} from 'react';
import {Pagination} from 'react-bootstrap';
import Review from '../Cards/Review'

class ReviewContainer extends Component {
    
    render(){   
        let active = 1;
        let items = [];
        for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
        }

        const paginationBasic = (
        <div >
            <Pagination>{items}</Pagination>
        </div>
        );
        
        
        return(
        <div>
            <div class="m-2"><Review ></Review></div>
            <div class="m-2"><Review ></Review></div>
            <div class="m-2"><Review ></Review></div>
            {paginationBasic}
        </div>




    );}




}

export default ReviewContainer;