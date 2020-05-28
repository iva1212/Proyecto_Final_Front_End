import React,{Component} from 'react';
import {ListGroup,Container,Row,Col,Tab,Card,Form,Button, FormControl} from 'react-bootstrap';
import Select from 'react-select';
class Admin extends Component{
    constructor(props) {
		super(props)
		this.state = {
            consoles: [],
            developers:[],
            genres:[],
            games:[],
            SelectedConsoles:[],
            SelectedGenres:[],
            developer: 0,
            deleteQuery: "",
        }
        this.handleAddGameSubmit = this.handleAddGameSubmit.bind(this)
        this.handleChangeDel = this.handleChangeDel.bind(this)
        this.handleDelGameSubmit=this.handleDelGameSubmit.bind(this)
        this.handleDelConsoleSubmit = this.handleDelConsoleSubmit.bind(this)
        this.handleDelGenreSubmit = this.handleDelGenreSubmit.bind(this)
        this.handleDelDeveloperSubmit = this.handleDelDeveloperSubmit.bind(this)
        
    }
    handleAddGameSubmit(event){
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        const title = form.querySelector('#titleGame').value;
        const year = form.querySelector('#yearGame').value;
        const consoles = this.state.SelectedConsoles;
        const developer = this.state.developer;
        const genres = this.state.SelectedGenres;
        const description = form.querySelector('#descriptionGame').value;
        const img_url = form.querySelector('#imgGame').value;
        
        let data = {
            title,
            year,
            consoles,
            description,
            genres,
            developer,
            img_url
        }
        let url = ' http://127.0.0.1:8080/api/games';
        console.log( JSON.stringify( data ))
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        return response.json();
                    }
                    throw new Error( response.statusText );
                })
                .then( responseJSON => {
                    alert("Game Added");
                    form.reset();
                    window.location.reload();
                    
                })
                .catch( err => {
                    alert(err.message);
                });
    }
    handleAddConsoleSubmit(event){
        const form = event.currentTarget;
        const name = form.querySelector('#addConsoleName').value
        const img_url=form.querySelector('#addConsoleImg').value
        const description=form.querySelector('#addConsoleDes').value
        event.preventDefault();
        event.stopPropagation();
        let data = {
            name,
            description,
            img_url
        }
        let url = 'http://127.0.0.1:8080/api/consoles';
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        return response.json();
                    }
                    throw new Error( response.statusText );
                })
                .then( responseJSON => {
                    alert("Console Added");
                    form.reset();
                    window.location.reload();
                    
                })
                .catch( err => {
                    alert(err.message);
                });

    }
    handleAddGenreSubmit(event){
        const form = event.currentTarget;
        const name = form.querySelector('#addGenreName').value
        const img_url=form.querySelector('#addGenreImg').value
        event.preventDefault();
        event.stopPropagation();
        let data = {
            name,
            img_url
        }
        let url = 'http://127.0.0.1:8080/api/genres';
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        return response.json();
                    }
                    throw new Error( response.statusText );
                })
                .then( responseJSON => {
                    alert("Genre Added");
                    form.reset();
                    window.location.reload();
                    
                })
                .catch( err => {
                    alert(err.message);
                });
        

    }
    handleAddDeveloperSubmit(event){
        const form = event.currentTarget;
        const name = form.querySelector('#addDeveloperName').value
        const country = form.querySelector('#addDeveloperCountry').value
        const img_url=form.querySelector('#addDeveloperImg').value
        event.preventDefault();
        event.stopPropagation();
        let data = {
            name,
            country,
            img_url
        }
        
        let url = 'http://127.0.0.1:8080/api/developers';
        let settings = {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify( data )
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        return response.json();
                    }
                    throw new Error( response.statusText );
                })
                .then( responseJSON => {
                    alert("Developer Added");
                    form.reset();
                    window.location.reload();
                    
                })
                .catch( err => {
                    alert(err.message);
                });
        
    }
    handleDelGameSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const title = this.state.deleteQuery;
        console.log(title);
        let data={
            title:title
        }
        let url = ' http://127.0.0.1:8080/api/removeVideoGame';
        let settings = {
          method : 'DELETE',
          headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( data)
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        alert("Game Deleted");
                        this.setState({deleteQuery: ""})
                         window.location.reload();
                    }
                    else{
                        throw new Error( response.statusText );
                    }
                })
                .catch( err => {
                    alert(err.message);
                });
    }
    handleDelConsoleSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const name = this.state.deleteQuery;
        console.log(name);
        let data={
            name:name
        }
        let url = ' http://127.0.0.1:8080/api/removeConsole';
        let settings = {
          method : 'DELETE',
          headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( data)
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        alert("Console Deleted");
                        this.setState({deleteQuery: ""})
                         window.location.reload();
                    }
                    else{
                        throw new Error( response.statusText );
                    }
                })
                .catch( err => {
                    alert(err.message);
                });
    }

    handleDelGenreSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const name = this.state.deleteQuery;
        console.log(name);
        let data={
            name:name
        }
        let url = ' http://127.0.0.1:8080/api/removeGenre';
        let settings = {
          method : 'DELETE',
          headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( data)
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        alert("Genre Deleted");
                        this.setState({deleteQuery: ""})
                         window.location.reload();
                    }
                    else{
                        throw new Error( response.statusText );
                    }
                })
                .catch( err => {
                    alert(err.message);
                });
    }
    handleDelDeveloperSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        const name = this.state.deleteQuery;
        console.log(name);
        let data={
            name:name
        }
        let url = ' http://127.0.0.1:8080/api/removeDeveloper';
        let settings = {
          method : 'DELETE',
          headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify( data)
        }
        fetch( url, settings )
                .then( response => {
                    if( response.ok ){
                        alert("Developer Deleted");
                        this.setState({deleteQuery: ""})
                         window.location.reload();
                    }
                    else{
                        throw new Error( response.statusText );
                    }
                })
                .catch( err => {
                    alert(err.message);
                });
    }
    fetchConsoles(){
        let url = ' http://127.0.0.1:8080/api/consoles';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
            let options=[]
            for(let i=0;i<data.length;i++){
                options.push(
                    {
                    value: data[i].name,
                    label:data[i].name
                    }
                )
            }
          this.setState({consoles: options})
        })
    }
    fetchDevelopers(){
        let url = ' http://127.0.0.1:8080/api/developers';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
            let options=[]
            for(let i=0;i<data.length;i++){
                options.push(
                    {
                    value: data[i].name,
                    label: data[i].name
                    }
                )
            }
          this.setState({developers: options})
        })
    }
    fetchGenres(){
        let url = ' http://127.0.0.1:8080/api/genres';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
            let options=[]
            for(let i=0;i<data.length;i++){
                options.push(
                    {
                    value: data[i].name,
                    label: data[i].name
                    }
                )
            }
          this.setState({genres: options})
        })
    }
    fetchGames(){
        let url = ' http://127.0.0.1:8080/api/games';
        let settings = {
          method : 'GET'
        }
        fetch(url,settings)
        .then(res => res.json())
        .then((data)=>{
            let options=[]
            for(let i=0;i<data.length;i++){
                options.push(
                    {
                    value: data[i]._id,
                    label: data[i].title
                    }
                )
            }
          this.setState({games: options})
        })
    }
    handleChange(e,target) {
        if(e != null){
        let value = Array.from(e, option => option.value);
        if(target === "consoles")
            this.setState({SelectedConsoles: value});
        else if(target === "developer")
            this.setState({developer: e.value});
        else if(target=== "genres")
            this.setState({SelectedGenres: value});
        }
        else{
            if(target === "consoles")
                this.setState({SelectedConsoles: []});
            else if(target === "developer")
                this.setState({developer: 0});
            else if(target=== "genres")
                this.setState({SelectedGenres: []});
        }
        
      }
      handleChangeDel(event){
          this.setState({deleteQuery : event.label})
      }
    componentDidMount(){
        this.fetchConsoles()
        this.fetchDevelopers()
        this.fetchGenres()
        this.fetchGames()
    }
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
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleAddGameSubmit}>
                                    <Form.Group controlId="titleGame">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" placeholder="Title" required />
                                    </Form.Group>
                                    <Form.Group controlId="yearGame">
                                        <Form.Label>Realease Year</Form.Label>
                                        <Form.Control type="number" placeholder="1990" required/>
                                    </Form.Group>
                                    <Form.Group controlId="consolesGame" >
                                    <Form.Label>Consoles</Form.Label>
                                        <Select options={this.state.consoles} onChange={
                                            (event)=>{ this.handleChange(event,"consoles")}} isMulti={true}>
                                        
                                        </Select>
                                         
                                            <input
                                            value={this.state.SelectedConsoles}
                                            tabIndex={-1}
                                            autoComplete="off"
                                            style={{ opacity: 0, height: 0 }}
                                            required={true}
                                            />
                                            
                                        
                                    </Form.Group>
                                    <Form.Group controlId="developerGame" >
                                    <Form.Label>Developer</Form.Label>
                                        <Select options={this.state.developers} onChange={
                                            (event)=>{ this.handleChange(event,"developer")}}>
                                        
                                        </Select>
                                        <input
                                            value={this.state.developer}
                                            tabIndex={-1}
                                            autoComplete="off"
                                            style={{ opacity: 0, height: 0 }}
                                            required={true}
                                            />
                                        
                                    </Form.Group>
                                    <Form.Group controlId="genresGame" >
                                    <Form.Label>Genres</Form.Label>
                                        <Select options={this.state.genres} onChange={
                                            (event)=>{ this.handleChange(event,"genres")}}isMulti={true}>
                                        
                                        </Select>
                                        <input
                                            value={this.state.SelectedGenres}
                                            tabIndex={-1}
                                            autoComplete="off"
                                            style={{ opacity: 0, height: 0 }}
                                            required={true}
                                            />
                                        
                                    </Form.Group>
                                    
                                    <Form.Group controlId="descriptionGame">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows="3" required/>
                                    </Form.Group>
                                    <Form.Group controlId="imgGame">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control type="text" placeholder="URL" required/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                         Submit
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelGame">
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleDelGameSubmit}>
                                <Form.Group controlId="titleGameDel">
                                        <Form.Label>Title to delete</Form.Label>
                                        <Select options={this.state.games} onChange={
                                            (event)=>{ this.handleChangeDel(event)}}>

                                            </Select>
                                    </Form.Group>
                                    <Button variant="danger" type="submit">
                                         Delete
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#AddConsole">

                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleAddConsoleSubmit}>
                                <Form.Group controlId="addConsoleName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" required />
                                </Form.Group>
                                <Form.Group controlId="addConsoleDes">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows="3"placeholder="Description" required />
                                </Form.Group>
                                <Form.Group controlId="addConsoleImg">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control type="text" placeholder="URL" required/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                         Add
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelConsole">
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleDelConsoleSubmit}>
                                <Form.Group controlId="nameConsoleDel">
                                        <Form.Label>Console to delete</Form.Label>
                                        <Select options={this.state.consoles} onChange={
                                            (event)=>{ this.handleChangeDel(event)}}>
                                            </Select>
                                    </Form.Group>
                                    <Button variant="danger" type="submit">
                                         Delete
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#AddGenre">
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleAddGenreSubmit}>
                                <Form.Group controlId="addGenreName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" required />
                                </Form.Group>
                                <Form.Group controlId="addGenreImg">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control type="text" placeholder="URL" required/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                         Add
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelGenre">
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleDelGenreSubmit}>
                                <Form.Group controlId="nameGenreDel">
                                        <Form.Label>Genre to delete</Form.Label>
                                        <Select options={this.state.genres} onChange={
                                            (event)=>{ this.handleChangeDel(event)}}>
                                            </Select>
                                    </Form.Group>
                                    <Button variant="danger" type="submit">
                                         Delete
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#AddDeveloper">
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleAddDeveloperSubmit}>
                                <Form.Group controlId="addDeveloperName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Name" required />
                                </Form.Group>
                                <Form.Group controlId="addDeveloperCountry">
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type="text" placeholder="Country" required />
                                </Form.Group>
                                <Form.Group controlId="addDeveloperImg">
                                        <Form.Label>Image URL</Form.Label>
                                        <Form.Control type="text" placeholder="URL" required/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                         Add
                                     </Button>
                                </Form>
                            </Card>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#DelDeveloper">
                            <Card style={{padding:'10px',marginRight:'10px'}}>
                                <Form onSubmit={this.handleDelDeveloperSubmit}>
                                <Form.Group controlId="nameDeveloperDel">
                                        <Form.Label>Developer to delete</Form.Label>
                                        <Select options={this.state.developers} onChange={
                                            (event)=>{ this.handleChangeDel(event)}}>
                                            </Select>
                                    </Form.Group>
                                    <Button variant="danger" type="submit">
                                         Delete
                                     </Button>
                                </Form>
                            </Card>
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