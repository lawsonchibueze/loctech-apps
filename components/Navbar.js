import Link from 'next/link'
import { CgMenuGridO } from 'react-icons/cg'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { useState } from 'react'
import logo from '../public/images/logo.png'
import Image from 'next/image'

const links = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'About Us',
        href: '/about-us'
    },
    {
        name: 'Courses',
        href: '/courses'
    },
    {
        name: 'Article',
        href: '/article'
    },
    {
        name: 'Contact',
        href: '/contact-us'
    },
]

export default function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `w-8 h-[2px] bg-black transition ease transform duration-300`;

    const handleClick = () => {
        setIsOpen(!isOpen)
        setShowLinks(!showLinks)
    }

    const removeLink = () => {
        setShowLinks(false)
        setIsOpen(false)
    }

    return (
        <div className='lg:px-20 px-4 shadow-lg lg:h-24 h-16 flex items-center justify-between bg-white sticky top-0 z-20'>
            <div className='flex gap-4 items-center justify-between lg:justify-start w-full lg:w-fit'>
                <Link href='/' className='text-4xl font-bold flex items-center gap-2'>
                    <Image src={logo} alt='' className='w-16 h-16' />
                    Loctech
                </Link>
                <div onClick={handleClick} className="flex flex-col space-y-2 items-end cursor-pointer lg:hidden z-50">
                    {/* <div className="w-12 h-[2px] bg-[#64ffda]"></div>
                    <div className="w-10 h-[2px] bg-[#64ffda]"></div>
                    <div className="w-8 h-[2px] bg-[#64ffda]"></div> */}
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                    <div
                        className={`${genericHamburgerLine} ${isOpen
                            ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                            : "opacity-50 group-hover:opacity-100"
                            }`}
                    />
                </div>
                <div className='h-9 w-[1px] bg-gray-400 hidden lg:block'></div>
                <div className='lg:flex items-center text-xl gap-3 font-semibold hidden'><CgMenuGridO className='w-6 h-6' /> Category</div>
            </div>
            <div className='bg-[#F2F2F2] lg:flex items-center justify-between px-4 py-3 rounded-md gap-3 w-[25rem] hidden'>
                <input
                    type="text"
                    placeholder='Search...'
                    className='bg-transparent w-full outline-none p-1 text-base font-bold'
                />
                <FiSearch className='w-6 h-6 text-blue-700 font-bold cursor-pointer' />
            </div>
            <div className='lg:flex gap-8 items-center hidden'>
                <div className='flex items-center gap-8 font-semibold'>
                    {links.map((link, index) => {
                        return (
                            <Link key={index} href={link.href}>
                                {link.name}
                            </Link>
                        )
                    })}
                </div>
                <Link href='/cart' className='relative flex'>
                    <FiShoppingCart className='w-6 h-6' />
                    <div className='absolute bg-blue-600 -right-4 bottom-2 rounded-full w-3 h-3 flex justify-center items-center text-white text-sm p-3'>0</div>
                </Link>
            </div>
            {showLinks && (
                <div className="absolute lg:hidden bg-[#112240] inset-y-0 right-0 h-screen w-4/5 bg-opacity-100 z-30 backdrop-blur-lg">
                    <div className="flex flex-col space-y-10 mt-20 p-10 items-center text-white">
                        {links.map((link, index) => (
                            <Link
                                onClick={removeLink}
                                href={link.href}
                                key={index}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="ring-1 ring-cyan-300 text-cyan-200 px-10 py-2 hover:bg-cyan-900 rounded-sm text-xl transition duration-700 ease-in-out">
                            Resume
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}