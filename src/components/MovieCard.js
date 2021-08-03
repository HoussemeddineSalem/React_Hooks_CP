import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from "react-rating-stars-component";





function MovieCard ({movie}) {

    const ratingChanged = (newRating) => {
        console.log(newRating)}
    return (
    <div >
        {

        <Card key={movie.id}  style={{ width: '18rem', margin :'30px' }} >
           <Card.Img variant="top" src= {movie.posterURL} alt="blabla" style={{height : '30rem'}}/>
             <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <ReactStars
                        count={8}
                        onChange={ratingChanged}
                        size={20}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        value={movie.rating}
                    />
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