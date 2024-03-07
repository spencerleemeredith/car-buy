import React from 'react'

function CarValue() {
    return (
        <section className='bg-white lg:h-[200px] lg:w-[1000px] md:w-[600px] relative left-[50%] translate-x-[-50%] lg:top-[-72px] rounded-lg outline outline-1 outline-slate-300 z-20'>
            <div className='container mx-auto h-full w-full flex lg:flex-row flex-col gap-[30px] items-center jusitfy-center p-8'>
                <img className='w-[200px] rounded' src='https://static.fastly.carvana.io/stc-home-ui/next/images/trackw600.webp' alt='Volkswagen price graph' />
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='capitalize text-3xl text-carvana-blue font-semibold'>Track your car's value</h1>
                    <p className='text-gray-500 text-lg'>Get your offer and we'll send you updates so you always know how much your<br /> car is worth. <a href='https://www.carvana.com/sell-my-car/getoffer/vehicle' className='underline text-blue-500'>Get started</a></p>
                </div>
            </div>
        </section>
    )
}

export default CarValue;