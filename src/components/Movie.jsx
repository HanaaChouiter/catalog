import React, { Component } from 'react';
import catalogue from '../catalogue.json'


class Movie extends Component {
    render() {
        const movie = catalogue.find( film => film.id == this.props.match.params.id)
        console.log(movie)
        return (
            <div>
             <h1>{movie.title}</h1>
             <p>{movie.director}</p>
             <p>{movie.stars}</p> 
             <img className="" src={movie.image} alt=""></img>
             <p>{movie.description}</p>
            </div>
            
        );
    }
}

export default Movie;