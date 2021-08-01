import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './AddMovie';
import movieAppLogo from './img/movieAppLogo.png'



export default function NavBar({setTitleSearch}){ 
  const handleChange = (event) => setTitleSearch(event.target.value);
  
    return (

    <Navbar bg="light" expand="lg" sticky="top">
             <img src ={ movieAppLogo } alt="blabla" width='200px' height='75px' />
              
                <Navbar.Brand href="#">BaraFlix</Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                      <Nav
                        className="mr-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                      >
                        <Nav.Link href="#action1">Home</Nav.Link>
                         <Nav.Link href="#action2">Films</Nav.Link>
                          <Nav.Link href="#action2">Series</Nav.Link>
                          <AddMovie />
                          
                       </Nav>
                               <Form className="d-flex">
                                 <FormControl
                                   type="search"
                                   placeholder="Place a Movie/Serie Title"
                                   className="mr-2"
                                   aria-label="Search"
                                   onChange={handleChange}
                                 />
                                     <Button variant="outline-success" >Search</Button>
                                </Form>
                    </Navbar.Collapse>
                                
  
    </Navbar>

        

    )

}




