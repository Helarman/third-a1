'use client'

import { useRouter } from "next/navigation";
import Button from "./Button";


const Hero = () => {
    const router = useRouter();
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <Button label="Browse game" onClick={() => router.push('/games')} />
        </div>
    )
};

export default Hero;