import React from 'react';
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function MainLayout({children}) {
    
    return (
        <div>
            <Header/>
            <Nav/>
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
