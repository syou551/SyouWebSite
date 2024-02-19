'use client';

import Image from 'next/image';

export default function Card(
    {ImageSrc,
     Title,
     description,
     href,
     linkDescription}
    :{ImageSrc : string,
    Title : string , 
    description : string ,
    href : string ,
    linkDescription : string
    }
    ): JSX.Element{

    return(
        <div className="grid transition justify-center items-center bg-gray-100 hover:bg-blue-100 rounded-md shadow-md mr-5 ml-5 mb-5 hover:-translate-y hover:scale-105">
            <button onClick={()=>location.replace(href)}>
                <div className="grid mr-5 ml-5 mt-3 mb-3">
                    <div className="flex w-full justify-center items-center">
                        <Image src={ImageSrc} width={200} height={200} alt="icon" className=""></Image>
                    </div>
                    <div className="ont-mono text-lg mt-5">{Title}</div>
                    <div className="ml-3 mr-3">
                        <p className="ont-mono mt-3"> {description} </p>
                        <a href={href}>
                            <p className="onm-mono mt-3 font-semibold text-sky-600">{linkDescription}</p>
                        </a>
                    </div>
                </div>
            </button>
        </div>
    )
}