import React from 'react';
import NextLink from 'next/link';
import Sidenav from './Sidenav';
import { useSideMenu } from '../../lib/side-menu-hook';
import NavMenu from './NavMenu';
import LangSelector from './LangSelector';
import Image from 'next/image';

const whiteLogoImageUrl = process.env['NEXT_PUBLIC_HEADER_LOGO'];

export default function MenuLogo({ showMenuTrigger, menuData, domainName }) {
  const { isNavOpen, setNavOpenState } = useSideMenu();

  return (
    <>
      <Sidenav setNavOpenState={setNavOpenState} menuData={menuData || {}} />

      <div className="flex items-center justify-between w-full">
        <div className='top-logo w-[30%] grow'>
          <NextLink
            prefetch={false}
            href={domainName ? `/${domainName}` : '/'}
          >
            <Image className="w-full" src={`/${whiteLogoImageUrl}`} alt="logo" width={100} height={100} />
          </NextLink>
        </div>
        <div className="flex grow items-center">
          <NavMenu />
          <LangSelector />

          <div className='menu-icon'>
            <div className="grid-button" onClick={() => setNavOpenState(!isNavOpen)}>
              <span className={`grid ${isNavOpen ? 'close' : 'open'}`}></span>
            </div>
          </div>

          {/* <div
            onClick={() => setNavOpenState(!isNavOpen)}
            className={`${showMenuTrigger ? 'inline-block' : 'hidden'
              } text-black h-6 w-6 cursor-pointer`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div> */}
        </div>
      </div>
    </>
  );
}
