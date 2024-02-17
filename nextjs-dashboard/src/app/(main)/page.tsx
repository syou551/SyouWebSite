import Image from "next/image";
import Link from 'next/link';
import Header from '@/app/ui/header';

export default function Home() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">{/*side*/}
        <div className="flex h-full flex-col px-3 py-4 md:px-2 items-center">
            <Image src="/icon.jpg" width={200} height={200} alt="icon" className="rounded-full"></Image>
            <p className="font-mono mt-6 text-4xl align-bottom">Syou</p>
            <div className="align-center mt-4">
              <a href={"https://twitter.com/1512155Hiroto"}>
                <span className="i-bxl-twitter w-8 h-8 bg-gray-500"></span>
              </a>
              <a href="https://github.com/syou551">
                <span className="i-bxl-github w-8 h-8 bg-gray-500 ml-3"></span>
              </a>
            </div>
            <p className="ont-mono mt-6">Kyoto Institute of Technology</p>
            <p className="ont-mono mt-2">Infomation Tech Cource</p>
            
            <p className="ont-mono mt-2">Undergraduate Stu.</p>
            <p className="ont-mono mt-2">・</p>
            <p className="ont-mono mt-2">KMC member</p>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{/*Page*/}
        <h1 className="grid ont-mono h-300 mb-10 text-xl w-full shadow-md rounded-xl bg-lime-100">
          <p className="ml-5 mt-3 mb-3 h-30">My profile</p>
        </h1>
        <div className="flex justify-center w-full">
          <p className="text-xl mb-5">言語/開発経験</p>
        </div>
        <div className="flex justify-center">
          <div className="grid justify-center grid-cols-3 gap-3">
              <span className="i-bxl-react w-20 h-20 lg:w-40 lg:h-40  bg-gray-500"></span>
              <span className="i-simple-icons-typescript w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-simple-icons-csharp w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-bxl-java w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-simple-icons-go w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <p className="flex mt-28 ml-3 ont-mono text-lg">etc.</p>
            </div>
        </div>
      </div>


    </div>
  );
}
