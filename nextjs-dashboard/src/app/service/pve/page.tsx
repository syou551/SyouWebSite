import BlogCard from "@/app/ui/blogcard"
import Link from "next/link"

export default function Page(){
    return (
        <>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30">概要</p>
            </h1>
            <div className="flex mt-5 justify-center items-left">
                <p className="flex justify-center items-left mx-5">
                VM運用基盤であるProxmoxのWebUI（非公開）
                </p>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30">関連する記事</p>
            </h1>
            <div className="grid mt-5 justify-center items-center md:grid-cols-2">
                <BlogCard Title='ラズパイをnftablesを使ってNAPTしてブリッジ的に使ってみた' date='2025-01-06'
                        description='hatenaブログ' href='https://syou551.hatenablog.com/entry/2025/01/16/000557'/>
                <BlogCard Title='ProxmoxのホストとVMを物理的にお引越ししてみた' date='2024-12-29'
                        description='Qiita' href='https://qiita.com/syou551/items/760d749d7fff552948f5'/>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30"> その他リンク</p>
            </h1>
            <div className="flex my-3 mx-5">
                <Link href='https://pve.proxmox.com/wiki/Main_Page' target="_blank">
                    <p className="flex mx-2 px-2 text-blue-500 hover:text-blue-800 hover:bg-gray-200 rounded-md">
                        Proxmox Wiki
                    </p>
                </Link>
            </div>
        </>
    )
}