import React from 'react'

function FinanceHero() {
    return (
        <section className='lg:h-[600px] lg:mt-0 mt-20'>
            <div className='container mx-auto h-full flex lg:flex-row flex-col items-center justify-center gap-[75px]'>
                <div className='flex flex-col gap-[30px] lg:items-start items-center'>
                    <h1 className='text-carvana-blue text-7xl font-bold uppercase'>Financing<br /> Made Easy</h1>
                    <p className='text-gray-500 lg:text-start text-center'>Get pre-qualified in 2 minutes and see real terms and actual monthly<br /> payments with <span className='text-gray-700 font-semibold'>no impact to your credit score.</span></p>
                    <button className='bg-blue-500 hover:bg-blue-700 transition-all text-white font-semibold uppercase px-16 py-4 rounded'>Get Your Terms</button>
                </div>
                <img className='w-[600px]' src='https://assets.fastly.carvana.io/financelandingpage/_next/static/images/civic-white-hero-037e16ec4c9b7a8322a7fe8b778f3ae7.png' alt='Honda Civic Monthly Payments' />
            </div>
        </section>
    )
}

export default FinanceHero