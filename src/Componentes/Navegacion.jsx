import React from "react";
//import { Component } from 'react';

class Navegacion extends React.Component {

    render() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a className="navbar-brand" href="https://www.capacitarte.org/" target="_blank">
            Navbar
        </a>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank">
                Home
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.capacitarte.org/"  rel="noopener noreferrer" target="_blank">
                Cursos
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="https://www.capacitarte.org/" rel="noopener noreferrer" target="_blank">
                Programas
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}
}

export default Navegacion;
