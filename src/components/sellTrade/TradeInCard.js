import React from 'react'

function TradeInCard() {
    return (
        <section className='lg:px-0 px-5'>
            <div className='container mx-auto rounded-2xl height flex lg:flex-row flex-col lg:gap-0 gap-[40px] items-center justify-between bg-carvana-blue lg:w-[1300px] h-auto mt-10 lg:pt-0 pt-6'>
                <div className='px-16 flex flex-col gap-[25px]'>
                    <h1 className='text-white text-4xl font-bold'>Trade In and Save on Your Purchase</h1>
                    <p className='text-white text-lg'>Save more when you trade-in the car you have for the car you want. It's easy and all online.</p>
                    <div className='flex items-center gap-[40px]'>
                        <button className='text-white outline outline-2 px-4 rounded-full py-2 font-semibold hover:bg-white hover:text-carvana-blue'>Get Started</button>
                        <a className='text-white hover:underline font-semibold' href='https://www.carvana.com/selling-or-trades-how-it-works'>Learn More</a>
                    </div>
                </div>
                <img className='w-[600px]' src='https://static.fastly.carvana.io/stc-home-ui/next/images/HappyFamily.webp' alt='family dining' />
            </div>
        </section>
    )
}

export default TradeInCard