import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

function Faq() {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <section className={`${open ? 'lg:h-[2800px]' : 'lg:h-[800px]'} py-10 lg:px-0 px-10 mt-28`}>
            <div className='container mx-auto h-full w-full flex lg:flex-row flex-col items-start justify-center lg:gap-[200px] gap-[100px]'>
                <div className='flex flex-col items-start justify-center gap-[30px]'>
                    <h1 className='text-5xl font-semibold text-carvana-blue'>Frequently Asked<br /> Questions</h1>
                    <p className='text-gray-500'>Have questions about selling or trading your<br /> car? We've got you covered</p>
                    <button className='text-xl outline outline-2 px-8 py-3 rounded-full text-carvana-blue hover:bg-carvana-blue hover:text-white'><a href='https://www.carvana.com/help/sell-or-trade'>View All FAQs</a></button>
                </div>
                <div className='flex flex-col gap-[25px] lg:w-[700px]'>
                    <div onClick={handleClick} className='cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>How do I sell my Car online with Carbuy?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>The process is simple and 100% online. To get a real offer for your car or truck, we will ask a
                            few questions, starting with your license plate number or vehicle identification number (VIN), which helps us gather specific information about your vehicle.
                            We'll ask a few quick questions about your vehicle's overall condition, mileage, and features.
                            Based on this information, we're able to make you a real offer, instantly.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>From there, we will ask you to upload a few documents to verify you can sell the car, and then
                            you choose how you'd like to be paid, and schedule an appointment to complete the sale. Depending on your location, we'll pick up your car, meet you in the middle
                            , or have you drop it off at a Carbuy location near you.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>For more details, check out <a href='https://www.carvana.com/selling-or-trades-how-it-works' className='underline text-blue-600'>how it works.</a></p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div onClick={handleClick} className='cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>Can I sell my vehicle to Carbuy without buying a car from Carvana?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>Yes! You can absolutely sell us your car, even if you're not ready to buy another car now. It's an easy, online process to sell or trade-in your vehicle. We buy
                            thousands of cars each week from customers like you.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div onClick={handleClick} className='cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>How do I trade in a vehicle with Carbuy?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>A "trade-in" happens when you sell your current vehicle as part of the purchase of your next vehicle. Trading in your vehicle with Carbuy is simple and can increase your buying power by lowering your down payment.
                            Plus, in many states there are big sales tax savings only available when you trade-in.
                        </p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>To get started, answer a few questions to get an offer for your current car. Your offer is valid for 7 days, and if you save it to your Carbuy account, you'll see the benefit of your trade-in as you shop.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>We will be there to help guide you the whole day!</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div className='cursor-pointer' onClick={handleClick}>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>How does Carbuy determine the value of my vehicle</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>We combine the vehicle details you provide, such as options, accident history, and mileage, along with data from service records, trusted pricing guides, and our own market analysis. We analyze hundreds of data points to create a real offer, personalized for you. You'll receive the
                            You'll receive the strongest offer we can give based on our anaylysis of your vehicle's value and current auto market conditions.
                        </p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div onClick={handleClick} className='cursor-pointer'>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>What documents do I need to sell my car to Carbuy?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>In most cases, we ask for photos of three items: your ID, your vehicle's title, and odometer. We tailor what we request based on considerations unique to you and your car and don't ask for anything we don't need. We'll request documents unique to your situation, like if you have a loan, a lease, or multiple title owners.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>We make it easy and secure to send documents right from your mobile phone or laptop. And we're here to answer any questions you have along the way.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div className='cursor-pointer' onClick={handleClick}>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>If I sell my car to Carbuy, how and when will I get paid?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>Carbuy will pay you for your car at your pickup or drop-off appointment. We'll either hand you a printed check or initiate payment via an ACH direct deposit into your checking or savings account (ACH transfers normally take between 2-5 business days).
                            The appointment is fast - we simply confirm the basic details about your vehicle and complete final sale documents - ensuring you get paid as quickly as possible.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div className='cursor-pointer' onClick={handleClick}>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>How does Carbuy handle options for pickup or drop-off?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>Depending on your location, we offer home appointments, meet-ups or vehicle dropoff at one of our convenient Carbuy hubs or awesome vending machines. Our appointments are fast and easy - we will take a quick look at your car to confirm the vehicle details, pass you a couple of papers to sign, and then pay you on the spot! There may be an additional fee for home pick up.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div className='cursor-pointer' onClick={handleClick}>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>Can I still sell my car to Carbuy even if I still have a loan on the vehicle</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>Yes, we help lots of customers sell cars with loans. We'll guide you through the process to gather your loan payoff information, and in some cases, we can help gather it directly from your lender. We'll pay your loan provider directly when we buy your vehicle.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>If your vehicle is worth more than you owe, we'll pay you the difference, or you can apply it toward the purchase of your next vehicle from Carvana.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>Until the sale of your vehicle to Carvana is completed, please continue to make your normal loan payments to avoid late payment penalties with your lender. You'll be reimbursed for any overpayment.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div className='cursor-pointer' onClick={handleClick}>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>Will Carbuy buy my leased vehicle</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>We are here to help you sell your leased car, but whether we can buy it depends on your leasing company policies. Some leasing companies allow us to pay off leases early (sometimes called a “lease buyout”), but others will not allow Carbuy to pay off a customer's lease.
                            Include your lease information as part of your answers to the appraisal questions, and in most cases we can provide next steps with your offer.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                    <div className='cursor-pointer' onClick={handleClick}>
                        <div className='flex items-center justify-between'>
                            <h4 className='capitalize font-semibold text-carvana-blue hover:text-blue-500'>Will the offer I receive for my car from Carbuy ever change?</h4>
                            <AiOutlinePlus className='text-carvana-blue text-xl hover:rounded-full hover:bg-carvana-blue hover:text-white' />
                        </div>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>Your offer from Carbuy is valid for 7 days. If the information you provide accurately reflects your vehicle details and condition, your offer will not change.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>If you submit updated information, we will generate a new offer for you, automatically. We'll also update your offer if you resubmit the same information at a later date. We use the best information available to us to make the
                            strongest offers we can, based on our analysis of your vehicle's value and current auto market conditions.</p>
                        <p className={`${open ? "block text-gray-600 mt-5" : "hidden"}`}>We rely on our customers to submit accurate information about their vehicle details and condition. We do a combination of automated checks, car photo reviews, and a final confirmation at the pick-up appointment to ensure the car
                            matches the information submitted for appraisal. If we identify a mismatch, we'll work with you to generate an updated offer.</p>
                    </div>
                    <hr className='border-1 border-carvana-blue' />
                </div>
            </div>
        </section>
    )
}

export default Faq;