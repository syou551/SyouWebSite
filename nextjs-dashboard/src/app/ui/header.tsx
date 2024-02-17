'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useState } from "react";

const links = [
  { name: 'home', href: '/'},
  { name: 'work', href: '/work'},
  /*{
    name: 'recommend',
    href: '/recommend',
  },*/
];

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setOpen] = useState<boolean>(false);
  const handleMenuOpen = () => {
    setOpen(!isOpen);
  };
  // 追加
  const handleMenuClose = () => {
    setOpen(false);
  };

  return (
    <header className="bg-white lg:w-full">
      <nav className="mx-auto shadow-md flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="font-mono text-xl -m-1.5 p-1.5">
            Syou Page
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
            <>
          {links.map((link) => {
            return (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'flex grow items-center justify-center ont-mono gap-2 rounded-md bg-white p-3 text-md font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                  {
                    'bg-sky-100 text-blue-600': pathname === link.href,
                  },
                )}
              >
                <p className="hidden md:block">{link.name}</p>
              </Link>
            );
          })}
        </>
        </div>
        <div className='flex lg:hidden'>
          <button className="z-50 space-y-2" onClick={handleMenuOpen}>
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
          <span
            className={
              isOpen ? "block opacity-0 duration-300" : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
          <span
            className={
              isOpen
                ? "block w-8 h-0.5 bg-gray-600 -rotate-45 duration-300"
                : "block w-8 h-0.5 bg-gray-600 duration-300"
            }
          />
        </button>
        <nav className={
          isOpen
            ? "bg-white fixed top-0 right-0 left-0 z-40"
            : "fixed right-[-100%]"
        }
      >
        <ul
          className={
            isOpen ? "flex h-screen items-center mt-10 mb-10 flex-col gap-6" : "block"
          }
        >
          {links.map((link) => {
            return (
              <li key={link.name}>
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'items-center justify-center bg-white ont-mono text-lg',
                    {
                      'bg-sky-100 text-blue-600': pathname === link.href,
                    },
                  )}
                  onClick={handleMenuClose}
                >
                  <p className="flex md:block">{link.name}</p>
                </Link>
              </li>
            );
          })}
        </ul>
        </nav>
        </div>
      </nav>
      
    </header>
  );
}