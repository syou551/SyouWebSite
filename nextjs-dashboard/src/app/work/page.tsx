"use client";

import Image from "next/image";
import Card from "@/app/ui/card";
import {useState, useEffect} from "react";
import BlogCard from "@/app/ui/blogcard";
import Parser from "rss-parser";
import { parse } from "path";
import { revalidatePath } from "next/cache";
import handleRevalidate from "@/app/actions/refetch";

export interface Article {
    title: string;
    link: string;
    pubDate: string;
    site: string
}

interface RSSSite{
    url : string,
    name: string,
}

const RSSLinks : RSSSite[] = [
    {url : 'https://note.com/syou_551/rss', name : "note"},
    {url: 'https://qiita.com/syou551/feed', name : "Qiita"},
    {url: 'https://syou551.hatenablog.com/rss', name: "hatenaブログ"}
 ]

export default function Page(){
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(()=>{
        const FetchArticles = async () =>{
            if(!isLoading) return;
            let refetch = await fetch('api/revalidation',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(RSSLinks)
            });
            const res = await fetch('/api/rss', { next: { revalidate: 5 } });
            const data = await res.json();
            setArticles(data);
            setIsLoading(false);
        }
        FetchArticles();
    },[isLoading]);

    return(
        <>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">制作物 (開発中含む)</p>
            </h1>
            <div className="grid mt-5 justify-center items-center md:grid-cols-3">
                <Card ImageSrc="/logo.png" Title="「Shelter Navi」避難所ナビゲーションアプリ" description="Nakamura-lab, Kobe Univ. Cooperated by JST-GSC" 
                href="https://cs27.org/achieve/data/pdf/1418.pdf" linkDescription="論文リンク先"></Card>
                <Card ImageSrc="https://fpiccdn.com/30615s/w200/h150/mcrop/ejpg/?b818505afffc55b0232f65ff26663185" Title="スイーツリベリオン" description="Shooting Game Created by スイリベ開発室 @ KMC" 
                linkDescription="詳細（Freemへ）" href="https://www.freem.ne.jp/win/game/30615"/>
                <Card ImageSrc="/noimg.png" Title="「Travel Planner」旅程管理アプリ" description="Work in progress...   Contributed by rin-liner" 
                href="https://github.com/syou551/TravelPlannerApp" linkDescription="githubへ"/>
                <Card ImageSrc="/noimg.png" Title="MyFileUploader" description="自作のファイルアップローダー" linkDescription="githubへ" 
                href="https://github.com/syou551/dirShareApp"/>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">記事</p>
            </h1>
            {isLoading ?
                <div className="flex justify-center items-center my-8">
                    <p>読み込み中...</p>
                </div>
                :
                <div className="grid mt-5 justify-center items-center md:grid-cols-2">
                    {articles?.map((item, index)=>
                        <BlogCard key={index} Title={item.title!} date={item.pubDate}
                        description={item.site} href={item.link!}/>
                    )}
                </div>
            }
        </>
    )
}