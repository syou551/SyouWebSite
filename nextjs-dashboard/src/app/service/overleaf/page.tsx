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
                オンラインTeXエディタOSSのoverleafをセルフホストしているサービス。<br/>
                公式のDocker Imageを基にして、日本語化および日本語組版対応を行い、運用している。<br/>
                </p>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30">関連する記事</p>
            </h1>
            <div className="flex mt-5 justify-center items-left">
                <p className="flex justify-center items-left mx-5">
                wip
                </p>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30"> その他リンク</p>
            </h1>
            <div className="flex my-3 mx-5">
                <Link href='https://github.com/syou551/homeServer/tree/main/overleaf' target="_blank">
                    <p className="flex mx-2 px-2 text-blue-500 hover:text-blue-800 hover:bg-gray-200 rounded-md">
                        GitHubで詳細を見る
                    </p>
                </Link>
            </div>
        </>
    )
}