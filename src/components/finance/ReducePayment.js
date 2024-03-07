import React from 'react'

function ReducePayment() {
    return (
        <section className='lg:h-[600px] lg:px-0 px-6 lg:py-0 py-8'>
            <div className='container mx-auto flex lg:flex-row flex-col justify-center items-center h-full gap-[150px]'>
                <img className='w-[500px]' src='https://assets.fastly.carvana.io/customer-acquisition/finance-landing-page/asset-trade-in-img-desktop.jpg' alt='Phone displaying car offer' />
                <div className='flex flex-col items-start gap-[20px]'>
                    <h1 className='text-carvana-blue text-4xl font-bold'>Reduce your payments by<br /> trading in your car</h1>
                    <p className='text-gray-500'>We're committed to helping you get the most out of your<br /> trade in. Find out what your vehicle is worth in
                        minutes<br /> and learn how you can apply your trade-in value to lower<br /> monthly payments.</p>
                    <button className='text-blue-500 outline outline-1 rounded uppercase px-16 py-4 font-bold text-sm hover:bg-blue-500 hover:text-white transition-all'>Get Your Offer</button>
                </div>
            </div>
        </section>
    )
}

export default ReducePayment