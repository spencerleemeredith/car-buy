import React from 'react'
import { BsStarFill } from "react-icons/bs";

function FinanceTestimonial() {
    return (
        <section className='lg:h-[600px] mt-20'>
            <div className='container mx-auto h-full w-full flex flex-col items-center gap-[80px]'>
                <hr className='border-1 border-gray-300 w-full' />
                <h1 className='text-4xl text-carvana-blue capitalize font-bold'>Customer Reviews</h1>
                <div className='flex lg:flex-row flex-col items-center gap-8'>
                    <div className='w-[300px] flex flex-col gap-3'>
                        <div className='flex items-center gap-1 text-yellow-500 text-xs'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <h2 className='font-semibold text-carvana-blue'>Will never buy anywhere else</h2>
                        <div className='flex items-center text-gray-500 justify-between'>
                            <p>Jim C</p>
                            <p>Feb 3, 2022</p>
                        </div>
                        <p className='text-gray-500'>From the get-go, this process was easy. I didn't have to take hours of my day to wait at a dealership and for them to "run my numbers" - I was given up front the amount ...</p>
                        <p className='text-blue-500 underline cursor-pointer'>Read More</p>
                    </div>
                    <div className='w-[300px] flex flex-col gap-3'>
                        <div className='flex items-center gap-1 text-yellow-500 text-xs'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <h2 className='font-semibold text-carvana-blue'>Amazing!</h2>
                        <div className='flex items-center text-gray-500 justify-between'>
                            <p>Samantha P</p>
                            <p>Sep 1, 2021</p>
                        </div>
                        <p className='text-gray-500'>The entire process was so easy! No hidden fees, extremely visible financing terms, quick delivery! Now just waiting on the out of state plate transfer but so far zero issues.</p>
                        <p className='text-blue-500 underline cursor-pointer'>Read More</p>
                    </div>
                    <div className='w-[300px] flex flex-col gap-3'>
                        <div className='flex items-center gap-1 text-yellow-500 text-xs'>
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                            <BsStarFill />
                        </div>
                        <h2 className='font-semibold text-carvana-blue'>This is how to buy a car!!</h2>
                        <div className='flex items-center text-gray-500 justify-between'>
                            <p>Kevin G</p>
                            <p>Sep 2, 2021</p>
                        </div>
                        <p className='text-gray-500'>I was dreading having to buy a car after my accident but this process was so easy! Financing was a breeze and customer service, both before and after my purchase was outs...</p>
                        <p className='text-blue-500 underline cursor-pointer'>Read More</p>
                    </div>
                </div>
                <hr className='border-1 border-gray-300 w-full' />
            </div>
        </section>
    )
}

export default FinanceTestimonial