import BlogCard from "@/app/ui/blogcard"
import Link from "next/link"

export default function Page(){
    return (
        <>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30">概要</p>
            </h1>
            <div className="flex mt-5 justify-center items-left">
                <p className="flex justify-center items-left">
                個人開発で作成したファイルアップローダーを個人使用のためにデプロイしたサービス。<br/>
                GoogleをIdPとしたSSOで認可を行い、authサービスのロールで認証を行う仕組み。<br/>
                （個人使用想定のため、管理者のみアクセス可能となるように設定）
                </p>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30">関連する記事</p>
            </h1>
            <div className="grid mt-5 justify-center items-center md:grid-cols-2">
                <BlogCard Title='keycloak + oauth2-proxy でWebアプリのSSO + ロール認証実装してみた' date='2025-02-13'
                        description='Qiita' href='https://qiita.com/syou551/items/45837a9ce4ef7af962aa'/>
                <BlogCard Title='Docker-composeでNext.js + Go (+ nginx) のWebアプリを動かしてみた' date='2025-01-28'
                        description='Qiita' href='https://qiita.com/syou551/items/6b7d252cf7cd6ca61ed4'/>
            </div>
            <h1 className="grid ont-mono h-300 ml-3 mr-3 mt-10 text-xl shadow-md rounded-xl bg-lime-100">
                <p className="ml-5 mt-3 mb-3 h-30"> その他リンク</p>
            </h1>
            <div className="flex my-3 mx-5">
                <Link href='https://github.com/syou551/homeServer/tree/main/FileUploader' target="_blank">
                    <p className="flex mx-2 px-2 text-blue-500 hover:text-blue-800 hover:bg-gray-200 rounded-md">
                        GitHubで詳細を見る
                    </p>
                </Link>
            </div>
        </>
    )
}