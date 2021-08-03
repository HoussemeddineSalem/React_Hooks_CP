import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import movieAppLogo from './img/movieAppLogo.png';
import './component.css'



export default function NavBar({setTitleSearch}){ 
  const handleChange = (event) => setTitleSearch(event.target.value);
  
    return (

    <Navbar className="nav-bar-styl" bg="light" expand="lg" sticky="top">
             <img src ={ movieAppLogo } alt="blabla" width='200px' height='75px' />
              
                <Navbar.Brand href="#"  className="nav-bar-brand-styl">BlablaFlix</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px', fontSize:'20px', marginRight:'50px' }}
                        navbarScroll
                      >
                        <Nav.Link href="#action1">Home</Nav.Link>
                         <Nav.Link href="#action2">Films</Nav.Link>
                          <Nav.Link href="#action2">Series</Nav.Link>
                         
                          
                       </Nav>
                       
                               <Form className="d-flex">
                                 <FormControl
                                   type="search"
                                   placeholder="Place a Movie Title"
                                   className="mr-2"
                                   aria-label="Search"
                                   onChange={handleChange}
                                   style={{width :'500px'}}
                                 />
                                     
                                </Form>
                                <AddMovie />
                    </Navbar.Collapse>
                                
  
    </Navbar>

        

    )

}




