import Image from "next/image";
import { FiFacebook, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import logo from '../public/images/logo.png'

export default function Footer() {
    return (
        <div className="bg-[#f9f9fb] text-[#9b9b9b]">
            <div className="py-36 lg:px-20 px-4 flex justify-between">
                <div className="grid grid-cols-3 gap-44">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-lg text-[#252525]">About</h1>
                        <ul className="flex flex-col gap-5 text-base font-semibold">
                            <li>About Us</li>
                            <li>Courses</li>
                            <li>Instructor</li>
                            <li>Events</li>
                            <li>Become A Teacher</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-lg text-[#252525]">Links</h1>
                        <ul className="flex flex-col gap-5 text-base font-semibold">
                            <li>News & Blogs</li>
                            <li>Library</li>
                            <li>Gallery</li>
                            <li>Partners</li>
                            <li>Career</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="font-bold text-lg text-[#252525]">Support</h1>
                        <ul className="flex flex-col gap-5 text-base font-semibold">
                            <li>Documentation</li>
                            <li>FAQs</li>
                            <li>Forum</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-6 items-center">
                    <h1 className='text-4xl font-bold flex items-center text-[#252525] gap-2'>
                        <Image src={logo} alt='' className="w-16 h-16" />
                        Loctech
                    </h1>
                    <div className="flex gap-10 items-center">
                        <FiTwitter />
                        <FiFacebook />
                        <FiLinkedin />
                        <FiYoutube />
                    </div>
                    <div>
                        © 2022 Loctech. All Rights Reserved
                    </div>
                    <div className="flex flow-row gap-10">
                        <span>Terms of Use</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}