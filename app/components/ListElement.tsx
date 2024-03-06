'use client'

import { useRouter } from "next/navigation"

const ListElement = ({label, href} : {label: string, href: string}) => {
    const router = useRouter();


    return (
        <button onClick={() => router.push(href)} className="uppercase text-lg font-semibold text-gray-800 sm:text-sm mb-2 hover:opacity-75">
            {label}
        </button>
    )
};

export default ListElement;