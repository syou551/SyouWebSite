'use client'

import Image from "next/image";
import Link from 'next/link';
import Header from '@/app/ui/header';
import { useEffect, useState } from "react";
import BlogCard from "../ui/blogcard";
import {Article} from "@/app/work/page"

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(()=>{
    const FetchArticles = async () =>{
      if(!isLoading) return;
      const res = await fetch('/api/rss', { next: { revalidate: 5 } });
      const data = await res.json();
      setArticles(data);
      setIsLoading(false);
    }
    FetchArticles();
  });

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
          <p className="ml-5 mt-3 mb-3 h-30">Recent Blogs</p>
        </h1>
        {isLoading ?
                <div className="flex justify-center items-center my-8">
                    <p>読み込み中...</p>
                </div>
                :
                <>
                  <div className="grid mt-5 justify-center items-center md:grid-cols-2">
                      {articles?.map((item, index)=>
                        { if(index<2){
                            return (<BlogCard key={index} Title={item.title!} date={item.pubDate}
                            description={item.site} href={item.link!}/>);
                          }else{}
                        }
                      )}
                  </div>

                  <div className="flex relative justfy-center items-center mt-4 mb-10">
                    <p className="transition grid absolute right-2 px-4 py-2 rounded-md hover:bg-gray-100 hover:scale-105 hover:text-blue-600">
                      <Link href={"/work"}>
                        {"Show Other Blogs ->"}
                      </Link>
                    </p>
                  </div>
                </>
            }
        <h1 className="grid ont-mono mt-5 h-300 mb-10 text-xl w-full shadow-md rounded-xl bg-lime-100">
          <p className="ml-5 mt-3 mb-3 h-30">My profile</p>
        </h1>
        <div className="flex justify-center w-full">
          <p className="text-xl mb-5">Language/Skill Set</p>
        </div>
        <div className="flex justify-center">
          <div className="grid justify-center grid-cols-3 gap-3">
              <span className="i-bxl-react w-20 h-20 lg:w-40 lg:h-40  bg-gray-500"></span>
              <span className="i-simple-icons-typescript w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-simple-icons-csharp w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-bxl-python w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-simple-icons-go w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-bxl-docker w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-bxl-kubernetes w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-bxl-tux w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
              <span className="i-bxl-unity w-20 h-20 lg:w-40 lg:h-40 bg-gray-500"></span>
            </div>
        </div>
        <div className="flex justify-center">
          <div className="text-xl mb-5 mt-4">Experience</div>
        </div>
        <div className="grid justify-center">
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2022/4</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">京都工芸繊維大学 入学</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">工芸科学部 情報工学課程</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2023/2 〜 現在</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">株式会社 演算工房 アルバイト勤務</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">C#(WPF)を用いたWindowsアプリケーション開発</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2023/5</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">セキュリティ・ミニキャンプ in 東京 参加</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">Cトラック サンドボックス上でのマルウェア動的解析入門</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2023/9</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="transition grid hover:bg-gray-100 hover:rounded-xl hover:shadow-md">
              <Link href={"https://note.com/syou_551/n/ne0332ab0cd26"} target="_blank">
                <p className="flex justify-left items-left mt-1 mx-10 text-md">株式会社 いい生活 インターン参加</p>
                <p className="flex justify-left items-left mt-1 lg:mt-2 mx-10 text-sm text-gray-400">React + Vue.js を用いた物件検索Webアプリ作成</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2025/3 〜 現在</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">株式会社 いい生活 長期インターン参加</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">C#およびTypeScriptを用いたアプリケーション開発業務</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2025/7</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">株式会社 CyberAgent インターン参加</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">物理サーバー構築＆ネットワーク構築体験型1dayインターンシップ</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2025/8</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">株式会社 はてな インターン参加</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">前半(講義)パート参加</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl mb-5">Personal Project</div>
        </div>
        <div className="grid justify-center">
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2023</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="transition grid hover:bg-gray-100 hover:rounded-xl hover:shadow-md">
              <Link href={"https://docs.google.com/presentation/d/1QneVk5nwheyd5IBRXQ-JV496W_lctv_L18mOd2IMEXo/edit?usp=sharing"} target="_blank">
                <p className="flex justify-left items-left mt-1 mx-10 text-md">画像共有Webアプリ+Eye-Tracking漫画ビューワー</p>
                <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">React+ViteとGoを用いてタグ付けなどを実現</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2024 〜 現在（開発中）</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">旅程管理アプリ</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">Next.jsのフロントエンドとJavaのバックエンドを用いて実現</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2025</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="transition grid hover:bg-gray-100 hover:rounded-xl hover:shadow-md">
              <Link href={"/service/fileup"} target="_blank">
                <p className="flex justify-left items-left mt-1 mx-10 text-md">ファイルアップローダー</p>
                <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400">Next.jsのフロントエンドとGoのバックエンド等を用いて実現</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl mb-5">Other Experience（Research, Certification etc...）</div>
        </div>
        <div className="grid justify-center">
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2020/3 〜 2021/3</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-1 mx-10 text-md">Shelter Navi「コロナ禍における避難支援ツール」</p>
              <p className="flex justify-left items-left mt-1 mx-10 text-sm text-gray-400"> JST-GSC ROOTプログラムでの研究開発</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2021/1/21</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="transition grid hover:bg-gray-100 hover:rounded-xl hover:shadow-md">
              <Link href={"https://cs27.org/achieve/data/pdf/1418.pdf"} target="_blank">
                <p className="flex justify-left items-left mt-1 mx-10 text-md">電子情報通信学会 LOIS研究会 研究発表</p>
                <p className="flex justify-left items-left mt-1 lg:mt-2 mx-10 text-sm text-gray-400"> JST-GSC ROOTプログラムでの研究開発成果を発表および論文作成</p>
              </Link>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2024/4</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-4 mx-10 text-md">基本情報技術者試験 合格</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2024/7</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-4 mx-10 text-md">応用情報技術者試験 合格</p>
            </div>
          </div>
          <div className="flex justify-left shadow-md rounded-md bg-lime-50 mt-4">
            <span className="i-iconamoon-arrow-right-6-circle mr-4 w-7 h-7 lg:w-8 lg:h-8 bg-lime-400"></span>
            <p className="flex justify-left items-left mt-1 text-md">2025/7</p>
          </div>
          <div className="flex justify-left">
            <div className="grid">
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
              <span className="i-iconamoon-arrow-down-2-bold w-5 h-5 lg:w-8 lg:h-8 bg-gray-400"></span>
            </div>
            <div className="grid">
              <p className="flex justify-left items-left mt-4 mx-10 text-md">情報処理安全確保支援士試験 合格</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
