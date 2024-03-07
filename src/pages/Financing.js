import React from 'react'

import Navbar from '../components/Navbar';
import FinanceHero from "../components/finance/FinanceHero";
import ChooseCarbuy from "../components/finance/ChooseCarbuy";
import ReducePayment from "../components/finance/ReducePayment";
import CustomCard from "../components/finance/CustomCard";
import FinanceExperience from "../components/finance/FinanceExperience";
import FinanceTestimonial from "../components/finance/FinanceTestimonial";
import FinanceFaq from "../components/finance/FinanceFaq";
import PrequalifyCard from "../components/finance/PrequalifyCard";
import Footer from '../components/Footer';

function Financing() {
    return (
        <main>
            <Navbar />
            <FinanceHero />
            <ChooseCarbuy />
            <ReducePayment />
            <CustomCard />
            <FinanceExperience />
            <FinanceTestimonial />
            <PrequalifyCard />
            <Footer />
        </main>
    )
}

export default Financing