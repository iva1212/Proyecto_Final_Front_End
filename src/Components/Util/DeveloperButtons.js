import React,{Component} from 'react';
import {Button,Spinner} from 'react-bootstrap';

class DeveloperButtons extends Component {
    state={
        loading:true,
        developers:[]
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
    render(){
        const items = [];
        const{loading,developers} = this.state;
        for(let i=0;i<developers.length;i++){
            items.push(
                <Button variant="outline-secondary" style={{marginLeft:"5px"}}>{developers[i].name}</Button>
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