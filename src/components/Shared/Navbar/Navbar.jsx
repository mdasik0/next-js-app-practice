import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='flex items-center justify-center my-6 text-lg'>
          <ul className="flex gap-3 font-semibold font-mono">
            <li>
              <Link href={"/"}>Home</Link>
            </li>{" "}
            <li>
              <Link href={"/contact-info"}>contact</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/image"}>Image</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>DashBoard</Link>
            </li>
          </ul>
        </nav>
    );
};

export default Navbar;