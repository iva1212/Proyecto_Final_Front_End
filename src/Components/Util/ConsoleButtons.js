import React,{Component} from 'react';
import {Button,Spinner} from 'react-bootstrap';
let json = require('../../dummy_Consoles.json');
class ConsoleButtons extends Component {
    constructor(props) {
		super(props)
		this.state = {
            loading:true,
            consoles:[]
        }
        this.handleClick = this.handleClick.bind(this);
	}
    componentDidMount(){
        let url = ' http://127.0.0.1:8080/api/consoles';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
          this.setState({loading:false,consoles: data})
        })
      }
      handleClick(event){
        const button = event.currentTarget;
        console.log(button.innerHTML);
        this.props.data(button.innerHTML);
    }
    render(){
        const items = [];
        const{loading,consoles} = this.state;
        
        for(let i=0;i<consoles.length;i++){
            items.push(
                <Button variant="outline-secondary" style={{marginLeft:"5px"}} onClick={this.handleClick} >{consoles[i].name}</Button>
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


export default ConsoleButtons;