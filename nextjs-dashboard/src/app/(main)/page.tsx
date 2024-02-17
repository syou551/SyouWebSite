import Image from "next/image";
import Link from 'next/link';
import Header from '@/app/ui/header';

export default function Home() {
  return (
    <div className="h-full">
      <div className="w-full flex-none md:w-64">{/*side*/}
        <div className="flex h-full flex-col px-3 py-4 md:px-2 items-center">
            <Image src="/icon.jpg" width={200} height={200} alt="icon" className="rounded-full"></Image>
            <p className="font-mono mt-6 text-4xl align-bottom">Syou</p>
            <div className="align-center">
              <a href={"https://twitter.com/1512155Hiroto"}>
                <span className="i-bxl-twitter w-8 h-8 bg-gray-500"></span>
              </a>
              <a href="https://github.com/syou551">
                <span className="i-bxl-github w-8 h-8 bg-gray-500 ml-3"></span>
              </a>
            </div>

        </div>
      </div>


    </div>
  );
}
