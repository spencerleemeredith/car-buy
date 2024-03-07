import React from 'react';
import Navbar from '../components/Navbar';
import Selling from '../components/Selling';
import CarValue from '../components/sellTrade/CarValue';
import Works from '../components/sellTrade/Works';
import Testimonials from '../components/Testimonials';
import Faq from '../components/sellTrade/Faq';
import TradeInCard from '../components/sellTrade/TradeInCard';
import Footer from '../components/Footer';


function SellTrade() {
    return (
        <main>
            <Navbar />
            <Selling />
            <CarValue />
            <Works />
            <Testimonials />
            <Faq />
            <TradeInCard />
            <Footer />
        </main>
    )
}

export default SellTrade