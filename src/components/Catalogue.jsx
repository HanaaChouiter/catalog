import React, { Component } from 'react';
import catalogue from '../catalogue.json'
import { Link } from 'react-router-dom';

class Catalogue extends Component {
    render() {
        return (
           <>
                {catalogue.map(movie => (
                    <>
                        <Link to={`/movie/${movie.id}`}>
                            <p>{movie.title}</p>
                        </Link>
                    </>
                ))}
            </>
        );
    }
}

export default Catalogue;