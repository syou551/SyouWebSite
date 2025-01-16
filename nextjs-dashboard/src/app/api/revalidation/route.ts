import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

interface RSSSite{
    url : string,
    name: string,
}

export const runtime = 'edge';

export async function POST(request : NextRequest){
    const body : RSSSite[] = await request.json();
    body.map((item)=>revalidatePath(item.url));

    const res = "revalidation finish";
    return new Response(JSON.stringify({ body:res}))
}