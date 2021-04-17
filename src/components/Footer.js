import React from 'react';

function Footer(props) {
    return (
        <footer className="container-fluid bg-light pt-5 px-sm-3 px-md-5">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-5">
                    <a href="index.html" className="navbar-brand">
                        <h1 className="mb-2 mt-n2 display-5 text-uppercase"><span
                            className="text-danger">EL HERALDO</span></h1>
                    </a>
                    <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd
                        et</p>

                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-bold mb-4">Categories</h4>
                    <div className="d-flex flex-wrap m-n1">
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Sports</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Health</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Education</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Science</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Technology</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Entertainment</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Lifestyle</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-bold mb-4">Tags</h4>
                    <div className="d-flex flex-wrap m-n1">
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Politics</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Business</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Sports</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Health</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Education</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Science</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Technology</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Foods</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Entertainment</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Travel</a>
                        <a href="#" className="btn btn-sm btn-outline-secondary m-1">Lifestyle</a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-5">
                    <h4 className="font-weight-bold mb-4">Contact</h4>
                    <div className="d-flex flex-column justify-content-start">
                        <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right text-dark mr-2"></i>Address:
                            Av 18. cuc</a>
                        <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right text-dark mr-2"></i>Tel:
                            +57 111 111 1111</a>
                        <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right text-dark mr-2"></i>Web:
                            elHeraldo.com</a>
                        <a className="text-secondary mb-2" href="#"><i className="fa fa-angle-right text-dark mr-2"></i>Terms
                            & conditions</a>
                        <a className="text-secondary" href="#"><i className="fa fa-angle-right text-dark mr-2"></i>Contact</a>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;