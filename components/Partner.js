import Image from 'next/image'
import client1 from '../public/images/client-logo-01.jpg'
import client2 from '../public/images/client-logo-02.jpg'
import client3 from '../public/images/client-logo-03.jpg'
import client4 from '../public/images/client-logo-04.jpg'
import client5 from '../public/images/client-logo-05.jpg'
import client6 from '../public/images/client-logo-06.jpg'
import client7 from '../public/images/client-logo-07.jpg'
import client8 from '../public/images/client-logo-08.jpg'
import client9 from '../public/images/client-logo-09.jpg'
import client10 from '../public/images/client-logo-10.jpg'
import client11 from '../public/images/client-logo-11.jpg'
import client12 from '../public/images/client-logo-12.jpg'

const images = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12
]

export default function Partner() {
    return (
        <div className="flex lg:flex-row flex-col gap-8 mt-36 lg:px-20 px-4">
            <div className='flex flex-col gap-6 w-1/2 flex-1'>
                <h1 className='text-3xl font-semibold text-gray-900 w-1/2'>Who Will You Learn With?</h1>
                <p className='text-[#696969] w-10/12'>You can list your partners or instructors brands here to show off your site reputation and students can trust you more.</p>
                <button className='text-[#0071dc] bg-[#f8f8f8] font-bold text-lg self-start px-6 py-4 rounded-md hover:bg-[#0071dc] hover:text-white transition-all duration-300 ease-linear'>View all partners</button>
            </div>
            <div className='grid grid-cols-6 gap-10'>
                {images.map((image, index) => <Image key={index} src={image} alt='' />)}
            </div>
        </div>
    )
}