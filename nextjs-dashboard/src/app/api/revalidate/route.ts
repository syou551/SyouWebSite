import { WriteStream } from "fs";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { stdout } from "process";

interface RSSSite{
    url : string,
    name: string,
}

export const runtime = 'edge';

export async function POST(request : NextRequest){
    const body = await request.json();
    const feed = await fetch(body.url, {cache : 'no-store'});

    const xml = await feed.text();
    const response = new Response(xml, {
        status: 200,
        statusText: "ok",
      });
    
    response.headers.append("content-type", "text/xml");
    
    return response;
}