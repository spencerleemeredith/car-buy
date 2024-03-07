import React from 'react'

import { MdOutlineMapsHomeWork } from 'react-icons/md';
import { RiCarWashingLine } from 'react-icons/ri';
import { BsTruckFlatbed } from 'react-icons/bs';

function ChooseCarbuy() {
    return (
        <section className='lg:h-[600px] h-[800px]'>
            <div className='container mx-auto flex flex-col items-center justify-around h-full w-full'>
                <hr className='border-1 border-gray-300 w-full' />
                <h1 className='text-4xl text-carvana-blue font-bold'>Why choose Carbuy?</h1>
                <div className='flex lg:flex-row flex-col justify-center items-center lg:gap-0 gap-[25px]'>
                    <div className='flex flex-col justify-center items-center w-[400px] gap-[8px]'>
                        <RiCarWashingLine className='text-carvana-blue text-5xl' />
                        <h1 className='text-carvana-blue font-semibold text-xl'>Quality Vehicles</h1>
                        <p className='text-center text-gray-500'>All our cars are inspected and reconditioned by<br /> quality technicians. Still don't love it? Check out<br /> our <a className='text-blue-500 underline' href='https://www.carvana.com/help/purchasing-a-car/what-are-the-limits-of-the-7-day-money-back-guarantee'>7-Day Money Back Guarantee</a>.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[400px] gap-[8px]'>
                        <MdOutlineMapsHomeWork className='text-carvana-blue text-5xl' />
                        <h1 className='text-carvana-blue font-semibold text-xl'>Convenient Pickup</h1>
                        <p className='text-center text-gray-500'>Never set foot in a dealership again. Pick up<br /> your next ride at one of our <a className='text-blue-500 underline' href='https://www.carvana.com/vending-machine'>33 Carbuy Vending<br /> Machines</a> nationwide.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[400px] gap-[8px]'>
                        <BsTruckFlatbed className='text-carvana-blue text-5xl' />
                        <h1 className='text-carvana-blue font-semibold text-xl'>Touchless Delivery</h1>
                        <p className='text-center text-gray-500'>Who says you have to leave your house? We'll<br /> deliver your car directly to you in as soon as <a className='text-blue-500 underline' href='https://www.carvana.com/buying-a-car-online-how-it-works'>3<br /> days</a>.</p>
                    </div>
                </div>
                <button className='text-blue-500 outline outline-1 rounded uppercase px-16 py-4 font-bold text-sm hover:bg-blue-500 hover:text-white transition-all'>Shop Vehicles</button>
                <hr className='border-1 border-gray-300 w-full' />
            </div>
        </section>
    )
}

export default ChooseCarbuy