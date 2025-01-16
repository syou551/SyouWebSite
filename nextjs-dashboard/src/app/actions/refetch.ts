'use server';

import { revalidatePath } from "next/cache";

export default async function handleRevalidate(path: string) {
    revalidatePath(path);
};