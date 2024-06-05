// 'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ASSETS} from '../../../../public/Assets'
import { useSession } from 'next-auth/react';

function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  // <SessionProvider>
    
  // </SessionProvider>
  // const { data: session } = useSession();
  // const user = session?.user.email?.substring(0, session.user.email.indexOf("@"));

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  // const Links = [
  //   // {
  //   //     name:"Home",
  //   //     link:"/"
  //   // }
  // ]

  return (
    <div>
      <nav className="bg-bg-gray-100  w-full ">
        <div className="flex flex-wrap items-center py-2 sm:py-0 flex-col sm:flex-row justify-between max-w-screen-xl px-4 mx-auto">
          {/* <Link href="/" >
          <Image
          src={ASSETS.logo}
          alt="travel the world"
          height={120}
          width={120}
          />
          </Link> */}
          <div className="flex items-center gap-x-12  ml-2 mt-2 sm:mt-0 sm:gap-x-0  sm:ml-0 lg:order-2">
            {/* {users} */}
            {/* <Link
              href="/book-now"
              className="   bg-[#43B97F] border-2 border-gray-100 text-white transition-all hover:ring-4 hover:ring-[#43B97F] font-medium rounded-3xl text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
              >
              {user} 
            </Link>*/}
          </div>
          <div
            // className={`${
            //   isMenuOpen ? 'block' : 'hidden'
            // } items-center justify-between w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
          {
            // Links.map((item,index)=>(
            //     <li key={index}>
            //     <Link
            //       href={item.link}
            //       className="block py-2 font-semibold pl-3 pr-4 text-black  rounded lg:bg-transparent lg:hover:text-emerald-600 lg:p-0 "
            //       aria-current="page"
            //     >

            //       {item.name}
            //     </Link>
            //   </li>
            // ))
          }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;