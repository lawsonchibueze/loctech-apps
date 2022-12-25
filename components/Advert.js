import Image from "next/image";
import bannerImg1 from '../public/images/banner-image.png'
import bannerImg2 from '../public/images/banner-image-laptop.png'

export default function Advert() {
    return (
        <div className="mt-36 lg:px-20 px-4 flex gap-8">
            <div className="flex px-8 bg-[#F6F3ED] rounded-lg items-end">
                <div className="flex flex-col gap-6 py-8">
                    <h1 className='text-xl font-semibold text-[#252525]'>Become An Instructor</h1>
                    <p className='text-[#696969]'>Top instructors from around the world teach millions of students on Loctech.</p>
                    <button className='hover:text-[#0071dc] hover:bg-[#f8f8f8] font-bold text-base self-start px-6 py-2 rounded-md bg-[#0071dc] text-white transition-all duration-300 ease-linear'>Start teching today</button>
                </div>
                <Image
                    src={bannerImg1}
                    alt=""
                    className="object-contain w-72"
                />
            </div>
            <div className="flex px-8 bg-[#EEF0F4] rounded-lg items-end">
                <div className="flex flex-col gap-6 py-8">
                    <h1 className='text-xl font-semibold text-[#252525]'>Transform Access To Education</h1>
                    <p className='text-[#696969]'>Create an account to receive our newsletter, course recommendations and promotions.</p>
                    <button className='hover:text-[#0071dc] hover:bg-[#f8f8f8] font-bold text-base self-start px-6 py-2 rounded-md bg-[#0071dc] text-white transition-all duration-300 ease-linear'>Register for free</button>
                </div>
                <Image
                    src={bannerImg2}
                    alt=""
                    className="object-contain w-72"
                />
            </div>
        </div>
    )
}