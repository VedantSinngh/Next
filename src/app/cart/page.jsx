'use client'
import { usePathname, useSearchParams } from "next/navigation"
export default function Cart() {

    const pathName = usePathname();
    console.log(pathName);
    const searchParams = useSearchParams();
    console.log(searchParams.get('search'));
    return(
        <div>
            <h1>Cart Page</h1>
        </div>
    )
}