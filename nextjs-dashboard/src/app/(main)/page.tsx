'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '@/app/ui/header';
import { useEffect, useState } from 'react';
import BlogCard from '../ui/blogcard';
import { Article } from '@/app/work/page';
import Diagram from '../ui/diagram';

export default function Home() {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const FetchArticles = async () => {
      if (!isLoading) return;
      const res = await fetch('/api/rss', { next: { revalidate: 5 } });
      const data = await res.json();
      setArticles(data);
      setIsLoading(false);
    };
    FetchArticles();
  });

  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        {/*side*/}
        <div className="flex h-full flex-col px-3 py-4 md:px-2 items-center">
          <a href="https://www.nijisanji.jp/talents/l/toko-inui">
            <Image
              src="/icon.jpg"
              width={200}
              height={200}
              alt="icon"
              className="transition rounded-full hover:-translate-y hover:scale-105"
            ></Image>
          </a>
          <p className="font-mono mt-6 text-4xl align-bottom">Syou</p>
          <div className="align-center mt-4">
            <a href={'https://twitter.com/syou_551'}>
              <span className="transition i-bxl-twitter w-8 h-8 bg-gray-500 hover:bg-blue-500 hover:-translate-y hover:scale-125"></span>
            </a>
            <a href="https://github.com/syou551">
              <span className="transition i-bxl-github w-8 h-8 bg-gray-500 ml-3 hover:bg-black hover:-translate-y hover:scale-125"></span>
            </a>
          </div>
          <p className="transition ont-mono mt-6 hover:bg-gray-100 hover:rounded-xl hover:-translate-y hover:scale-105">
            <a
              href="https://www.soc.i.kyoto-u.ac.jp/"
              className="flex flex-col items-center justify-center ml-2 mr-2"
            >
              <p className="text-sm">Graduate School of Informatics,</p>
              <p className="text-sm">Kyoto University</p>
              <p className="text-sm">Social Informatics Course M1</p>
            </a>
          </p>
          <p className="ont-mono mt-2 text-sm">・</p>
          <p className="transition ont-mono mt-2 hover:bg-gray-100 hover:rounded-xl hover:-translate-y hover:scale-105">
            <a href="https://www.kmc.gr.jp/" className="text-sm ml-2 mr-2">
              KMC member
            </a>
          </p>
        </div>
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {/*Page*/}
        <h1 className="grid ont-mono h-300 mb-10 text-xl w-full shadow-md rounded-xl bg-lime-100">
          <p className="ml-5 mt-3 mb-3 h-30">Recent Blogs</p>
        </h1>
        {isLoading ? (
          <div className="flex justify-center items-center my-8">
            <p>読み込み中...</p>
          </div>
        ) : (
          <>
            <div className="grid mt-5 justify-center items-center md:grid-cols-2">
              {articles?.map((item, index) => {
                if (index < 2) {
                  return (
                    <BlogCard
                      key={index}
                      Title={item.title!}
                      date={item.pubDate}
                      description={item.site}
                      href={item.link!}
                    />
                  );
                } else {
                }
              })}
            </div>

            <div className="flex relative justfy-center items-center mt-4 mb-10">
              <p className="transition grid absolute right-2 px-4 py-2 rounded-md hover:bg-gray-100 hover:scale-105 hover:text-blue-600">
                <Link href={'/work'}>{'Show Other Blogs ->'}</Link>
              </p>
            </div>
          </>
        )}
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
          <Diagram
            Title="京都工芸繊維大学 入学"
            description="工芸科学部 情報工学課程"
            header="2022/4"
          />
          <Diagram
            Title="株式会社 演算工房 アルバイト勤務"
            description="C#(WPF)を用いたWindowsアプリケーション開発"
            header="2023/2 〜 現在"
          />
          <Diagram
            Title="セキュリティ・ミニキャンプ in 東京 参加"
            description="Cトラック サンドボックス上でのマルウェア動的解析入門"
            header="2023/5"
          />
          <Diagram
            Title="株式会社 いい生活 インターン参加"
            description="React + Vue.js を用いた物件検索Webアプリ作成"
            header="2023/9"
            href={'https://note.com/syou_551/n/ne0332ab0cd26'}
          />
          <Diagram
            Title="株式会社 いい生活 長期インターン参加"
            description="C#およびTypeScriptを用いたアプリケーション開発業務"
            header="2025/3 〜 現在"
          />
          <Diagram
            Title="株式会社 CyberAgent インターン参加"
            description="物理サーバー構築＆ネットワーク構築体験型1dayインターンシップ"
            header="2025/7"
            href={'https://note.com/syou_551/n/n919ac6efc97a'}
          />
          <Diagram
            Title="株式会社 はてな インターン参加"
            description="前半(講義)パート参加"
            header="2025/8"
            href={'https://syou551.hatenablog.com/entry/2025/08/22/165430'}
          />
          <Diagram
            Title="Internet Week 2025 NOCチーム参加"
            description="Cableチーム"
            header="2025/11"
            href={'https://syou551.hatenablog.com/entry/2026/02/07/171006'}
          />
          <Diagram
            Title="京都工芸繊維大学 学業成績優秀賞 受賞"
            header="2026/3"
            description=""
          />
          <Diagram
            Title="京都工芸繊維大学 卒業"
            header="2026/3"
            description="学士(工学)取得"
          />
          <Diagram
            Title="京都大学大学院 情報学研究科 入学"
            header="2026/4"
            description="社会情報学コース 修士課程"
          />
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl mb-5">Personal Project</div>
        </div>
        <div className="grid justify-center">
          <Diagram
            Title="画像共有Webアプリ+Eye-Tracking漫画ビューワー"
            description="React+ViteとGoを用いてタグ付けなどを実現"
            header="2023"
            href="https://docs.google.com/presentation/d/1QneVk5nwheyd5IBRXQ-JV496W_lctv_L18mOd2IMEXo/edit?usp=sharing"
          />
          <Diagram
            Title="旅程管理アプリ"
            description="Next.jsのフロントエンドとJavaのバックエンドを用いて実現"
            header="2024 〜 現在（開発中）"
          />
          <Diagram
            Title="ファイルアップローダー"
            description="Next.jsのフロントエンドとGoのバックエンド等を用いて実現"
            header="2025"
            href="/service/fileup"
          />
          <Diagram
            Title="推しの雑談配信通知アプリ「推し雑」"
            description="FlutterのフロントエンドとGoのバックエンドを用いてgRPCで実現"
            header="2025"
            href="https://github.com/syou551/OshiZatsu"
          />
        </div>
        <div className="flex justify-center mt-4">
          <div className="text-xl mb-5">
            Other Experience（Research, Certification etc...）
          </div>
        </div>
        <div className="grid justify-center">
          <Diagram
            Title="Shelter Navi「コロナ禍における避難支援ツール」"
            description="JST-GSC ROOTプログラムでの研究開発"
            header="2020/3 〜 2021/3"
          />
          <Diagram
            Title="電子情報通信学会 LOIS研究会 研究発表"
            description="JST-GSC ROOTプログラムでの研究開発成果を発表および論文作成"
            header="2021/1/21"
            href="https://cs27.org/achieve/data/pdf/1418.pdf"
          />
          <Diagram
            Title="基本情報技術者試験 合格"
            header="2024/4"
            description=""
          />
          <Diagram
            Title="応用情報技術者試験 合格"
            header="2024/7"
            description=""
          />
          <Diagram
            Title="情報処理安全確保支援士試験 合格"
            header="2025/7"
            description=""
          />
          <Diagram
            Title="第228回ヒューマンインタフェース学会研究会 口頭発表"
            description="題目「特に地震を想定した高齢者における災害リスクの将来推計と可視化」"
            header="2026/3/24"
            href="https://jp.his.gr.jp/2026/01/15/meeting228/"
          />
        </div>
      </div>
    </div>
  );
}
