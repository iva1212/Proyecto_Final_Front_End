import React,{Component} from 'react';
import {Button,Spinner} from 'react-bootstrap';

class DeveloperButtons extends Component {
    constructor(props) {
		super(props)
		this.state = {
            loading:true,
            developers:[]
        }
        this.handleClick = this.handleClick.bind(this);
	}
    componentDidMount(){
        let url = ' http://127.0.0.1:8080/api/developers';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
          this.setState({loading:false,developers: data})
        })
      }
      handleClick(event){
        const button = event.currentTarget;
        console.log(button.innerHTML);
        this.props.data(button.innerHTML);
    }
    render(){
        const items = [];
        const{loading,developers} = this.state;
        for(let i=0;i<developers.length;i++){
            items.push(
                <Button variant="outline-secondary" style={{marginLeft:"5px"}} onClick={this.handleClick}>{developers[i].name}</Button>
            );
        }
        if(loading)
            return(<Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
            </Spinner>);
        return(
            items
        );
    }
}


export default DeveloperButtons;