import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
    return (
        <header>
            <Header />
            {children}
            <Footer />
        </header>
    );
}

export default MainLayout;
