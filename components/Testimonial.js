import Image from 'next/image'
import { useState } from 'react';
import { ImQuotesRight } from 'react-icons/im'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { testimonials } from './data'

export default function Testimonial() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 1 : (prev) => prev - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === 1 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className='flex lg:flex-row flex-col gap-12 mt-36 lg:px-20 px-4'>
            <div className='flex flex-col gap-6 w-2/3'>
                <h1 className='text-3xl font-semibold text-gray-900 w-3/5 min-w-fit'>People Say About Loctech</h1>
                <p className='text-[#696969]'>One-stop solution for any eLearning center, online courses. People love EduMall because they can create their sites with ease here.</p>
                <button className='text-[#0071dc] bg-[#f8f8f8] font-bold text-lg self-start px-6 py-4 rounded-md hover:bg-[#0071dc] hover:text-white transition-all duration-300 ease-linear'>View all</button>
            </div>
            <div className='overflow-hidden flex flex-col'>
                <div className="flex flex-row gap-10 transition-all duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    {testimonials.map((testimonial, index) => {
                        return (
                            <div
                                key={index}
                                className='relative bg-[#f8f8f8] p-8 flex flex-col gap-6 rounded-md min-h-fit w-[330px] min-w-[330px]'
                            >
                                <h2 className='text-[#0071dc] font-semibold text-xl'>Great quality!</h2>
                                <p className='text-[#696969] font-bold leading-loose text-lg min-w-fit'>I wanted to place a review since their support helped me within a day or so, which is nice! Thanks and 5 stars!</p>
                                <div className='flex gap-4 items-center'>
                                    <Image
                                        src={testimonial.image}
                                        alt=''
                                        className='w-16 h-16 rounded-full'
                                    />
                                    <p className='flex flex-col font-bold'>
                                        {testimonial.name}
                                        <span className='font-normal text-[#696969]'>/ {testimonial.occupation}, {testimonial.location}</span>
                                    </p>
                                    <div className='absolute top-2 right-4'>
                                        <ImQuotesRight className='w-10 h-10 text-[#dedede]' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='mx-auto flex mt-8 gap-14'>
                    <div onClick={prevSlide} className='cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-[#0071dc] hover:text-white transition-colors duration-300 ease-linear'>
                        <IoIosArrowBack className='w-5 h-5' />
                    </div>
                    <div onClick={nextSlide} className='cursor-pointer w-7 h-7 flex items-center justify-center rounded-full bg-[#f8f8f8] hover:bg-[#0071dc] hover:text-white transition-colors duration-300 ease-linear'>
                        <IoIosArrowForward className='w-5 h-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}