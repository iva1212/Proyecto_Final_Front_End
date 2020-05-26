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
    state = {
        loading:true,
        last:0,
        activePage:1,
        games: []
      }
      componentDidMount(){
        let url = ' http://127.0.0.1:8080/api/games';
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
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    render(){
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
                            <Tabs defaultActiveKey="title" id="search-tab">
                            <Tab eventKey="title" title="Title">
                            <Container style={{padding:"10px"}}>
                            <Form>
                                    <Form.Group md="4" controlId="validationCustomUsername">
                                        <Form.Label><h3>Search by Title</h3></Form.Label>
                                        <InputGroup>
                                            <InputGroup.Prepend>
                                            <InputGroup.Text id="inputGroupPrepend"><FaSearch/></InputGroup.Text>
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
                                <ConsoleButtons></ConsoleButtons>
                            </Container>
                            </Tab>
                            <Tab eventKey="developer" title="Developer">
                            <Container style={{padding:"10px",marginTop:"30px"}}>
                                <DeveloperButtons></DeveloperButtons>
                            </Container>
                            </Tab>
                            <Tab eventKey="genre" title="Genre">
                            <Container style={{padding:"10px",marginTop:"30px"}}>
                                <GenreButtons></GenreButtons>
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