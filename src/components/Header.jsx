import React from 'react';
import { Button, Navbar, TextInput } from 'flowbite-react';
import Logo from '../assets/images/Logo-GEC.png';
import ScrollingNav from './ScrollingNav';

const Header = () => {
    const newsItems = [
        "News Item 1",
        "News Item 2",
        "News Item 3",
        "News Item 4",
        "News Item 5",
    ];

    return (
        <div className="sticky top-0 z-50">
            <Navbar fluid className='bg-primary'>
                <Navbar.Brand href="#">
                    <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold text-white">GCE, Bargur</span>
                </Navbar.Brand>
                <div className="flex md:order-2 searchdiv relative">
                    <input type="text" placeholder='Search' className='rounded-lg border-0' />
                    <svg className="w-6 h-6 text-gray-800 dark:text-white search" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="#" className='hover:underline text-white custom-hover-black'>
                        Students
                    </Navbar.Link>
                    <Navbar.Link href="#" className='hover:underline text-white custom-hover-black'>Faculty & Staff</Navbar.Link>
                    <Navbar.Link href="#" className='hover:underline text-white custom-hover-black'>Families</Navbar.Link>
                    <Navbar.Link href="#" className='hover:underline text-white custom-hover-black'>Visitors</Navbar.Link>
                    <Navbar.Link href="#" className='hover:underline text-white custom-hover-black'>Alumni</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
            <ScrollingNav newsItems={newsItems} />
        </div>
    );
};

export default Header;
