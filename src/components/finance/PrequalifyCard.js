import React from 'react'

function PrequalifyCard() {
    return (
        <section className='h-[350px]'>
            <div className='lg:px-28 flex flex-col justify-center lg:items-start items-center gap-[20px] container mx-auto rounded-lg bg-[url("https://assets.fastly.carvana.io/customer-acquisition/finance-landing-page/asset-rings-desktop.jpg")] bg-no-repeat bg-cover bg-center h-full lg:w-[1200px]'>
                <h1 className='text-4xl text-carvana-blue font-bold'>Pre-qualify for financing</h1>
                <p className='text-gray-500'>See your monthly payment on every car. No hit on your credit.</p>
                <button className='uppercase font-bold text-white bg-blue-500 hover:bg-blue-800 px-16 py-4 rounded transition-all'>Get your terms</button>
            </div>
        </section>
    )
}

export default PrequalifyCard