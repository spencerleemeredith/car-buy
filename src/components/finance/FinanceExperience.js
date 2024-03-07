import React from 'react'

import { AiOutlinePrinter } from 'react-icons/ai';
import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { BsShieldCheck, BsShieldLock } from 'react-icons/bs';
import { RiCarWashingLine, RiPriceTag3Line } from 'react-icons/ri';


function FinanceExperience() {
    return (
        <section className='lg:h-[500px] mt-20 lg:px-0 px-4'>
            <div className='container mx-auto h-full w-full flex flex-col items-center justify-center gap-[20px]'>
                <h1 className='text-carvana-blue text-4xl font-bold text-center'>Skip the dealership and buy with<br /> confidence</h1>
                <p className='text-center text-gray-500'>Your experience doesn't end when you get the keys. At Carbuy, we give you peace of<br /> mind every step of the way.</p>
                <div className='flex lg:flex-row flex-col items-center justify-center lg:gap-0 gap-[20px]'>
                    <div className='flex flex-col items-center w-[400px]'>
                        <AiOutlinePrinter className='text-carvana-blue text-5xl' />
                        <p>No dealer fees</p>
                    </div>
                    <div className='flex flex-col items-center w-[400px]'>
                        <MdOutlineMapsHomeWork className='text-carvana-blue text-5xl' />
                        <p className='text-center'>Pick up your car or have<br /> it delivered</p>
                    </div>
                    <div className='flex flex-col items-center w-[400px]'>
                        <RiPriceTag3Line className='text-carvana-blue text-5xl' />
                        <p>Save $1,700 on average</p>
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-center mb-8 lg:gap-0 gap-[20px]'>
                    <div className='flex flex-col items-center w-[400px]'>
                        <BsShieldCheck className='text-carvana-blue text-5xl' />
                        <p className='text-center'>7-Day Money-Back<br /> Guarantee</p>
                    </div>
                    <div className='flex flex-col items-center w-[400px]'>
                        <RiCarWashingLine className='text-carvana-blue text-5xl' />
                        <p className='text-center'>Wide range of affordable<br /> vehicles</p>
                    </div>
                    <div className='flex flex-col items-center w-[400px]'>
                        <BsShieldLock className='text-carvana-blue text-5xl' />
                        <p className='text-center'>100 Day / 4,100 Mile<br /> Limited Warranty</p>
                    </div>
                </div>
                <button className='text-blue-500 outline outline-1 rounded uppercase px-16 py-4 font-bold text-sm hover:bg-blue-500 hover:text-white transition-all'>Shop for Vehicles</button>
            </div>
        </section>
    )
}

export default FinanceExperience