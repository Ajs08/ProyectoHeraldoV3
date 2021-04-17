import React from 'react';

function Header({children}) {
    return (
            <header className="container-fluid">
                <div className="row align-items-center py-2 px-lg-5">
                    <div className="col-lg-4">
                        <a href="#" className="navbar-brand d-none d-lg-block">
                            <h1 className="m-0 display-5 text-uppercase"><span className="text-danger">EL HERALDO</span>
                            </h1>
                            <p className="text-muted">Noticias de Barranquilla, la region caribe y Colombia</p>
                        </a>
                    </div>
                    <div className="col-lg-8 text-center text-lg-right">
                    </div>
                </div>
            </header>
    );
}

export default Header;