'use server'

import { NextResponse } from 'next/server';
import Parser from 'rss-parser';
import dayjs from 'dayjs'

interface RSSSite{
    url : string,
    name: string,
}

interface Article {
    title: string;
    link: string;
    pubDate: string;
    site: string
}

const RSSLinks : RSSSite[] = [
   {url : 'https://note.com/syou_551/rss', name : "note"},
   {url: 'https://qiita.com/syou551/feed', name : "Qiita"},
   {url: 'https://syou551.hatenablog.com/rss', name: "hatenaブログ"}
]

const parser = new Parser();

export async function GET() {
    try{
        let articles : Article[] = [];
        let promises = RSSLinks.map(async(site)=>{
            const feed = await parser.parseURL(site.url);
            let _articles = feed.items.map((item)=>({
                title : item.title!,
                link : item.link!,
                pubDate : item.pubDate? dayjs(item.pubDate).format('YYYY-MM-DD') : '',
                site : site.name
            }));
            articles = articles.concat(_articles);
        });
        let ret = await Promise.all(promises);
        articles.sort((item1, item2)=> dayjs(item2.pubDate).unix() - dayjs(item1.pubDate).unix());

        return NextResponse.json(articles);
    }catch(err){
        console.log(err);
    }
}