import { Store } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}`;

export async function getStore(slugOrId: string): Promise<Store>{
    const res = await fetch(`${URL}/stores/${slugOrId}`);

    return res.json();
}