import React,{Component} from 'react';
import {Card,Container,Form,InputGroup,Tabs,Tab,Spinner} from 'react-bootstrap';
import Pagination from "react-js-pagination";
import {FaSearch} from 'react-icons/fa';
import GameContainer from '../Containers/GameContainer';
import ConsoleButtons from '../Util/ConsoleButtons';
import DeveloperButtons from '../Util/DeveloperButtons';
import GenreButtons from '../Util/GenreButtons';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class Database extends Component {
    constructor(props) {
		super(props)
		this.state = {
            loading:true,
            last:0,
            activePage:1,
            current:"title",
            games: []
        }
        this.titleFetch = this.titleFetch.bind(this);
        this.getData = this.getData.bind(this);
	}
      componentDidMount(){
        let url = ' https://videogames-app.herokuapp.com/api/games';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
          this.setState({loading:false,games: data})
        })
      }
      handlePageChange(pageNumber) {
        this.setState({activePage: pageNumber});
      }
      getData(query,type,url_type){
        let url = 'https://videogames-app.herokuapp.com/api/videogamesBy'+url_type+'/'+query;
       
        let settings = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            
        }
        this.apiCall(url,settings,type);
      }
      apiCall(url,settings,type){
        fetch( url, settings )
        .then( response => {
            if( response.ok ){
                return response.json();
            }

            throw new Error( response.statusText );
        })
        .then( responseJSON => {
            this.setState({games:responseJSON,current:type});
        })
        .catch( err => {
            alert("Something happend,Try again");
            console.log(err);
        });
      }
      titleFetch( title ){
        let url = 'https://videogames-app.herokuapp.com/api/videoGamesByTitle/'+title;
        let settings = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            
        }
        this.apiCall(url,settings,"title");
    }

      
    render(){
        
        const handleSubmit = (event) => {
            const form = event.currentTarget;
            const title = form.querySelector('#searchTitle');
            console.log(title);
            event.preventDefault();
            event.stopPropagation();
            
            this.titleFetch(title.value);
          };

        let results=[];
        

       
        const {  loading } = this.state;
        if(loading)
            return(
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            )
        else{
            if(this.state.games.length<=3){
                results.push(
                    <GameContainer games={this.state.games}></GameContainer>
                )
            }
            else if(this.state.games.length<=6){
                results.push(
                    <span>
                    <GameContainer games={this.state.games.slice(0,3)}></GameContainer>
                    <GameContainer games={this.state.games.slice(3,this.state.games.length)}></GameContainer>
                    </span>
                )
            }
            else{
                let last=(this.state.activePage-1) * 6;
                    results.push(
                        <span>
                            <GameContainer games={this.state.games.slice(last,last+3)}></GameContainer>
                            <GameContainer games={this.state.games.slice(last+3,last+6)}></GameContainer>
                        </span>
                        );
                        
                
            }
            
        };
        return(
            <Container style={{minHeight: '82vh',padding: '10px'}}>
                
                    <Card>
                        
                        <Card.Body>
                            <Tabs defaultActiveKey={this.state.current} id="search-tab">
                            <Tab eventKey="title" title="Title">
                            <Container style={{padding:"10px"}}>
                            <Form onSubmit={handleSubmit}>
                                    <Form.Group md="4" controlId="searchTitle">
                                        <Form.Label><h3>Search by Title</h3></Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text ><FaSearch/></InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <Form.Control
                                            
                                            type="text"
                                            placeholder="Search"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please input a valid search
                                            </Form.Control.Feedback>
                                        </InputGroup>
                                    </Form.Group>
                                    </Form>
                                </Container>
                            </Tab>
                            <Tab eventKey="console" title="Console">
                            <Container style={{padding:"10px",marginTop:"30px"}}>
                                <ConsoleButtons data={(data) =>{
                                    this.getData(data,"console","Console")}}></ConsoleButtons>
                            </Container>
                            </Tab>
                            <Tab eventKey="developer" title="Developer">
                            <Container style={{padding:"10px",marginTop:"30px"}}>
                                <DeveloperButtons data={(data) =>{
                                    this.getData(data,"developer","Developer")}}></DeveloperButtons>
                            </Container>
                            </Tab>
                            <Tab eventKey="genre" title="Genre">
                            <Container style={{padding:"10px",marginTop:"30px"}}>
                                <GenreButtons data={(data) =>{
                                    this.getData(data,"genre","Genre")}}></GenreButtons>
                            </Container>
                            </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                <Card style={{padding: '10px',marginTop:'10px'}}>
                    {results}
                    <Pagination
                        activePage={this.state.activePage}
                         itemsCountPerPage={6}
                         totalItemsCount={this.state.games.length}
                         pageRangeDisplayed={5}
                         onChange={this.handlePageChange.bind(this)}
                         itemClass="page-item"
                         linkClass="page-link"
                         prevPageText="<"
                         nextPageText=">"
                    />
                </Card>
            </Container>

        );
    }



}

export default Database;