import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import TopProduct from '../TopProduct/TopProduct';
import Footer from '../../Shared/Footer/Footer';
import Service from '../Service/Service';
import ProductBanner from '../ProductBanner/ProductBanner';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Service />
            <TopProduct />
            <ProductBanner />
            <Reviews />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;