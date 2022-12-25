import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { MdOutlineNotificationsActive } from 'react-icons/md'
import hero1 from '../public/images/home-01.png'
import brain from '../public/images/artificial-intelligence.PNG'
import book from '../public/images/certificate.png'
import cert from '../public/images/porfolio.png'
import cur from '../public/images/user.png'

export default function Hero() {
    return (
        <div className="flex flex-col bg-[#f8f8f8] pt-20">
            <div className="flex justify-between lg:px-20 px-4 flex-col lg:flex-row">
                <div className="flex flex-col gap-5 flex-1">
                    <h2 className="text-[#0071DC] text-xl font-semibold tracking-widest">START TO SUCCESS</h2>
                    <p className="font-semibold text-5xl leading-snug">Access To <span className="text-sky-600">5500+</span> Courses <br /> from <span className="text-sky-600">480</span> Instructors & <br /> Institutions</p>
                    <h3 className="text-gray-600 text-xl">Take your learning organisation to the next level.</h3>
                    <div className="flex justify-between bg-white p-2 px-4 rounded-md drop-shadow-lg items-center lg:w-3/4 w-full">
                        <input type="text" placeholder="What do you to learn?" className="w-full p-4 outline-none" />
                        <FiSearch className='w-6 h-6 text-[#0071DC] font-bold cursor-pointer' />
                    </div>
                </div>
                <div className="mt-10 lg:mt-0">
                    <div className="relative">
                        <Image src={hero1} alt="hero 1" />
                        <div className="absolute bg-white lg:w-[48%] w-[75%]  px-8 py-5 rounded-lg drop-shadow-xl -bottom-2 lg:-left-20 left-1">
                            <div className="">Tomorrow is our <span className="font-semibold">&quot;When I Grow Up&quot; Spirit Day!</span>
                                <div className="absolute bg-[#FFC221] p-1 h-14 w-14 rounded-full flex justify-center items-center -top-7 -left-5">
                                    <MdOutlineNotificationsActive className="w-10 h-10 text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#0071DC] flex flex-col lg:flex-row justify-between lg:px-20 px-4 py-4 mt-14 gap-8 lg:gap-0">
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                    <Image src={brain} alt='' className="w-12 h-12" />
                    <span className="text-white text-xl font-semibold">Learn The Essential Skills</span>
                </div>
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                    <Image src={book} alt='' className="w-12 h-12" />
                    <span className="text-white text-xl font-semibold">Earn Certificates And Degrees</span>
                </div>
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                    <Image src={cert} alt='' className="w-12 h-12" />
                    <span className="text-white text-xl font-semibold">Get Ready for The Next Career</span>
                </div>
                <div className="flex items-center gap-4 flex-col lg:flex-row">
                    <Image src={cur} alt='' className="w-12 h-12" />
                    <span className="text-white text-xl font-semibold">Master at Different Areas</span>
                </div>

            </div>
        </div>
    )
}