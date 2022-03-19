

import React from 'react';




function Footer() {
    return(

        <React.Fragment>


        <div className="b-example-divider"></div>

        <div className="container">
        <footer className="py-3 my-4">
        <i className="bi bi-facebook fs-1 m-3 text-muted"></i>
        <i className="bi bi-twitter fs-1 m-3 text-muted"></i>
        <i className="bi bi-instagram fs-1 m-3 text-muted"></i>
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank"className="nav-link px-2 text-muted">Home</a></li>
            <li className="nav-item"><a href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank" className="nav-link px-2 text-muted">Features</a></li>
            <li className="nav-item"><a href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank" className="nav-link px-2 text-muted">Pricing</a></li>
            <li className="nav-item"><a href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank" className="nav-link px-2 text-muted">FAQs</a></li>
            <li className="nav-item"><a href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank" className="nav-link px-2 text-muted">About</a></li>
            </ul>
            <p className="text-center text-muted">&copy; 2021 Company, Inc</p>
        </footer>
        </div>
        <div className="b-example-divider"></div>

        </React.Fragment>

    );
    
}

export default Footer;