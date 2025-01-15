'use client';
import clsx from "clsx";
import Link from "next/link";


export default function BlogCard(
    {Title,
     date,
     description,
     href,}
    :{Title : string , 
    date : string,
    description : string ,
    href : string ,
    }
    ): JSX.Element{

    return(
        <div className="flex transition justify-left items-left md:h-5/6 bg-gray-100 hover:bg-blue-100 rounded-md shadow-md mr-5 ml-5 mb-5  hover:translate-y hover:scale-105">
            <Link href={href} className="relative grid w-full " target="_blank">
                <div className="flex mr-5 ml-5 justify-left items-left h-full">
                    <div className="ont-mono text-lg mt-5">{Title}</div>
                </div>
                <div className="flex relative ml-3 mr-3 items-left py-5 h-full">
                    <div className="flex absolute bottom-2">
                        <p className={clsx("ont-mono mt-3",{
                         'bg-green-200' : description == 'Qiita' ,
                         'bg-gray-300'  : description == 'note' ,
                         'bg-blue-100' : description == 'hatenaブログ' ,
                        },
                         "rounded-md px-2")}> {description} </p>
                        <p className="ont-mono mt-3 px-2 text-gray-400"> {date} </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}