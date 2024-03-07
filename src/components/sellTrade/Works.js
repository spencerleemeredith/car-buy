import React from 'react'
import { GiReceiveMoney } from 'react-icons/gi';
import { BsCarFront } from 'react-icons/bs';
import { FaMoneyBillWave } from 'react-icons/fa';

function Works() {
    return (
        <section className='lg:h-[400px] lg:p-0 p-4'>
            <div className='container mx-auto h-full w-full flex flex-col justify-center items-center gap-[50px]'>
                <div className='flex flex-col gap-[10px]'>
                    <h1 className='capitalize text-4xl font-semibold text-carvana-blue'>How it Works</h1>
                    <p className='text-gray-500 text-xl'>Trade-in or sell your vehicle to Carvana in just a few easy steps.</p>
                </div>
                <div className='flex lg:flex-row flex-col items-center justify-center gap-[40px]'>
                    <div className='flex items-start gap-[20px] h-[150px]'>
                        <div className='bg-carvana-blue rounded p-3'>
                            <GiReceiveMoney className='text-white text-3xl' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h2 className='text-2xl text-carvana-blue font-semibold'>Get Your Offer</h2>
                            <p className='text-gray-600'>Share a few vehicle details and we'll<br /> extend a real offer in 2 minutes. No<br /> haggling. No hassles.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-[20px] h-[150px]'>
                        <div className='bg-carvana-blue rounded p-3'>
                            <BsCarFront className='text-white text-3xl' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h2 className='text-2xl text-carvana-blue font-semibold'>Trade-in or Sell</h2>
                            <p className='text-gray-600'>Trade in your old vehicle for a new<br /> one, or sell it to Carvana.</p>
                        </div>
                    </div>
                    <div className='flex items-start gap-[20px] h-[150px]'>
                        <div className='bg-carvana-blue rounded p-3'>
                            <FaMoneyBillWave className='text-white text-3xl' />
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <h2 className='text-2xl text-carvana-blue font-semibold'>Get Paid</h2>
                            <p className='text-gray-600'>We'll do a quick, on-site review<br /> of your vehicle and pay you<br /> on the spot.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;