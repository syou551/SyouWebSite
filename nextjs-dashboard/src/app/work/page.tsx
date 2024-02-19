import Image from "next/image";
import Card from "@/app/ui/card";

export default function Page(){
    return(
        <>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">制作物など</p>
            </h1>
            <div className="grid grid-cols-1 mt-5 justify-center items-center md:grid-cols-3">
                <Card ImageSrc="/logo.png" Title="「Shelter Navi」避難所ナビゲーションアプリ" description="Nakamura-lab, Kobe Univ.  Cooperated by JST-GSC" 
                href="https://cs27.org/achieve/data/pdf/1418.pdf" linkDescription="論文リンク先"></Card>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">記事</p>
            </h1>
        </>
    )
}