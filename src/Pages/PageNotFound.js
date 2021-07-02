import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'

const PageNotFound = () => {
    return(
        <div id="page-not-found-container">
            <h1>404</h1>
            <p>Sorry, but it looks like the page you were looking for doesn't exist.</p>
            <Link to="/" className="link">Return Home?</Link>
        </div>
    )
}

export default PageNotFound;