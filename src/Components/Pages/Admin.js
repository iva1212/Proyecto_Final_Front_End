import React,{Component} from 'react';
import {ListGroup,Container,Row,Col,Tab,Card} from 'react-bootstrap';

class Admin extends Component{

    render(){
        return(
            <Container style={{minHeight: '82vh',padding:'10px'}} fluid={true}>
                <h2>Admin Panel</h2>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#AddGame">
                    <Row>
                        <Col sm={4}>
                        <ListGroup>
                            <ListGroup.Item action href="#AddGame">
                                Add Game
                            </ListGroup.Item>
                            <ListGroup.Item action href="#DelGame">
                                 Delete Game
                            </ListGroup.Item>
                            <ListGroup.Item action href="#AddConsole">
                                Add Console
                            </ListGroup.Item>
                            <ListGroup.Item action href="#DelConsole">
                                Delete Console
                            </ListGroup.Item>
                            <ListGroup.Item action href="#AddGenre">
                                Add Genre
                            </ListGroup.Item>
                            <ListGroup.Item action href="#DelGenre">
                                Delete Genre
                            </ListGroup.Item>
                            <ListGroup.Item action href="#AddDeveloper">
                                Add Developer
                            </ListGroup.Item>
                            <ListGroup.Item action href="#DelDeveloper">
                                Delete Developer
                            </ListGroup.Item>
                        </ListGroup>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="#AddGame">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelGame">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#AddConsole">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelConsole">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#AddGenre">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelGenre">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#AddDeveloper">
                            <p>text</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelDeveloper">
                            <p>text</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
                
            </Container>
        )
    }


}

export default Admin;