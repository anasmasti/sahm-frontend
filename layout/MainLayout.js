import React from 'react';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default MainLayout;
