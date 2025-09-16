"use client";

import Image from "next/image";
import ServiceCard from "@/app/ui/servicecard";
import {useState, useEffect} from "react";
import BlogCard from "@/app/ui/blogcard";

export default function Page(){
    const [isLoading, setIsLoading] = useState(true);

    return(
        <>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">syou551.devで提供中のサービス</p>
            </h1>
            <div className="grid mt-5 justify-center items-center md:grid-cols-3">
                <ServiceCard ImageSrc="https://avatars.githubusercontent.com/u/4921466?s=280&v=4" Title="auth" description="syou551.devサービスの認証基盤" 
                href="/service/auth" linkDescription="詳細"/>
                <ServiceCard ImageSrc="https://www.proxmox.com/favicon.svg" Title="pve" description="Proxmoxを用いたVM運用基盤" 
                linkDescription="詳細" href="/service/pve"/>
                <ServiceCard ImageSrc="/noimg.png" Title="fileup" description="自作のファイルアップローダー（認証機能有）" 
                href="/service/fileup" linkDescription="詳細"/>
                <ServiceCard ImageSrc="https://coder.syou551.dev/_static/src/browser/media/favicon.ico" Title="coder" description="code-server(VScodeのWeb版)" linkDescription="詳細（github) " 
                href="https://github.com/syou551/homeServer/tree/main/code-server"/>
                <ServiceCard ImageSrc="https://overleaf.syou551.dev/favicon.svg" Title="overleaf" description="クラウド型TeXエディタOSS overleafのセルフホスト" linkDescription="詳細" 
                href="/service/overleaf"/>
            </div>
        </>
    )
}