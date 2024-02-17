'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'home', href: '/'},
  { name: 'work', href: '/work'},
  {
    name: 'recommend',
    href: '/recommend',
  },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
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
              'flex grow items-center justify-center gap-2 rounded-md bg-white p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
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
      </nav>
      
    </header>
  );
}