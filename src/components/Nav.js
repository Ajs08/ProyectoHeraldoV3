import React from 'react';

function Nav(props) {
    return (
        <div className="container-fluid p-0 mb-3">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
                <a href="#" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-5 text-uppercase"><span className="text-danger">EL HERALDO</span></h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-2">
                        <a href="index.html" className="nav-item nav-link active">Home</a>
                        <a href="index.html" className="nav-item nav-link">Deportes</a>
                        <a href="index.html" className="nav-item nav-link">Judiciales</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Noticias</a>
                            <div className="dropdown-menu rounded-0 m-0">
                                <a href="#" className="dropdown-item">Menu item 1</a>
                                <a href="#" className="dropdown-item">Menu item 2</a>
                                <a href="#" className="dropdown-item">Menu item 3</a>
                            </div>
                        </div>
                        <a href="index.html" className="nav-item nav-link">Deportes</a>
                        <a href="index.html" className="nav-item nav-link">Politica</a>

                    </div>
                    <div className="input-group ml-auto" style={{width: "100%", maxWidth: "300px"}}>
                        <input type="text" className="form-control" placeholder="Keyword" />
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Nav;