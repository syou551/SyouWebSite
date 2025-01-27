'use client';

import Image from 'next/image';
import Link from 'next/link';

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
        <div className="flex relative transition justify-center items-center bg-gray-100 hover:bg-blue-100 rounded-md shadow-md mx-5 mb-5 md:h-5/6 md:hover:translate-y-2 md:hover:scale-105 hover:translate-y-1 hover:scale-105">
            <Link href={href} className='grid w-full md:py-10' target='_blank'>
                <div className="grid justify-center items-center mr-5 ml-5 mt-3 mb-3">
                    <div className="flex w-full justify-center items-center">
                        <Image src={ImageSrc} width={200} height={200} alt="icon" className=""></Image>
                    </div>
                </div>
                <div className="grid justify-center items-center mr-5 ml-5 mt-3 mb-3">
                    <div className="flex justify-center ont-mono text-lg mt-5">{Title}</div>
                    <div className="ml-3 mr-3">
                        <p className="ont-mono mt-4 mb-14 md:mb-10"> {description} </p>
                        <div className='flex justify-center items-center'>
                            <p className="absolute bottom-6 onm-mono mt-3 font-semibold text-sky-600">{linkDescription}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}