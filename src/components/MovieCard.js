import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





function MovieCard ({movie}) {


    return (
    <div >
        {
         
          
         
          
        <Card key={movie.id}  style={{ width: '18rem', margin :'30px' }} >
           <Card.Img variant="top" src= {movie.posterURL} alt="blabla" style={{height : '30rem'}}/>
             <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                     {movie.description}
               </Card.Text>
                     <Button variant="primary">See trailer</Button>
              </Card.Body>
              
        </Card>
        }
        
    </div>
    )
}
export default MovieCard