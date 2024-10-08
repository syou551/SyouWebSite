import Image from "next/image";
import Link from 'next/link';
import Header from '@/app/ui/header';

export default function Home() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">{/*side*/}
        <div className="flex h-full flex-col px-3 py-4 md:px-2 items-center">
            <a href="https://www.nijisanji.jp/talents/l/toko-inui">
              <Image src="/icon.jpg" width={200} height={200} alt="icon" className="transition rounded-full hover:-translate-y hover:scale-105"></Image>
            </a>
            <p className="font-mono mt-6 text-4xl align-bottom">Syou</p>
            <div className="align-center mt-4">
              <a href={"https://twitter.com/syou_551"}>
                <span className="transition i-bxl-twitter w-8 h-8 bg-gray-500 hover:bg-blue-500 hover:-translate-y hover:scale-125"></span>
              </a>
              <a href="https://github.com/syou551">
                <span className="transition i-bxl-github w-8 h-8 bg-gray-500 ml-3 hover:bg-black hover:-translate-y hover:scale-125"></span>
              </a>
            </div>
            <p className="transition ont-mono mt-6 hover:bg-gray-100 hover:rounded-xl hover:-translate-y hover:scale-105">
              <a href="https://www.kit.ac.jp" className="ml-2 mr-2">Kyoto Institute of Technology</a>
            </p>
            <p className="transition ont-mono mt-2 hover:bg-gray-100 hover:rounded-xl hover:-translate-y hover:scale-105">
              <a href="https://www.is.kit.ac.jp/" className="ml-2 mr-2">Infomation Tech Cource</a>
            </p>
            
            <p className="ont-mono mt-2">Undergraduate Stu.</p>
            <p className="ont-mono mt-2">・</p>
            <p className="transition ont-mono mt-2 hover:bg-gray-100 hover:rounded-xl hover:-translate-y hover:scale-105">
              <a href="https://www.kmc.gr.jp/" className="ml-2 mr-2">KMC member</a>
            </p>
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
              <span className="i-bxl-python w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-simple-icons-go w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <p className="flex mt-28 ml-3 ont-mono text-lg">etc.</p>
            </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xl mb-5 mt-4">バイト/インターンでの開発経験</div>
        </div>
        <div className="flex justify-center">
          <div className="grid">
            <li>C# (WPFフレームワークを用いたWindowsアプリケーション開発): バイト </li>
            <li>Python (VPSとのファイル共有等を行う簡易プログラム): 同上 </li>
            <li>React (不動産情報検索Webアプリ):  いい生活サマーインターン2023</li>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl mb-5">個人開発経験</div>
        </div>
        <div className="flex justify-center">
          <div className="grid">
            <li>React+Vite (画像共有Webアプリ) </li>
            <li>Next.js (旅程管理アプリ, ファイル管理アプリ フロントエンド) </li>
            <li>Go (ファイル管理アプリ バックエンド) </li>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl mb-5">その他（研究等）</div>
        </div>
        <div className="flex justify-center">
          <div className="grid">
            <li>Shelter Navi「コロナ禍における避難支援ツール」(2020-2021) JST-GSC ROOTプログラムでの研究開発 </li>
            <li>上記研究成果を電子情報通信学会 LOIS研究会(2021/1/21)において発表</li>
          </div>
        </div>
      </div>


    </div>
  );
}
