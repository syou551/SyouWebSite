import Image from "next/image";

export default function Page(){
    return(
        <>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">制作物など</p>
            </h1>
            <div className="flex mt-5 justify-center items-center">
                <div className="grid grid-cols-1 items-center bg-gray-100 rounded-md shadow-md mr-3 ml-3">
                    <div className="grid mr-10 ml-10 mt-3 mb-3">
                    <Image src="/logo.png" width={200} height={200} alt="icon" className="ml-12 md:ml-28"></Image>
                    <div className="ont-mono text-lg mt-5">「Shelter Navi」避難所ナビゲーションアプリ</div>
                    <div className="ml-7">
                        <p className="ont-mono mt-3"> Nakamura-lab, Kobe Univ.  Cooperated by JST-GSC </p>
                        <a href="https://cs27.org/achieve/data/pdf/1418.pdf">
                            <p className="onm-mono mt-3 font-semibold text-sky-600">論文リンク先</p>
                        </a>
                    </div>
                    </div>
                </div>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
            <p className="ml-5 mt-3 mb-3 h-30">記事</p>
            </h1>
        </>
    )
}