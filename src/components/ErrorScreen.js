import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/ErrorScreen.css';

export const ErrorScreen = () => {
    return (
        <div className="container mt-5 error-404 animate__animated animate__rubberBand">
            <h3>Error 404</h3>
            <small>Page not found</small>
            <Link to="/" className="btn btn-outline-primary error-link">GO BACK HOME</Link>
        </div>
    )
}
