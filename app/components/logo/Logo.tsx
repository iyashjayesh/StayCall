'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

type LogoProps = {
    logoPath: string;
}

const Logo = ({ logoPath }: LogoProps) => {
    const router = useRouter();
    return (
        <div className="flex flex-row items-center gap-3">
            {/* <Image
                src={logoPath}
                alt="logo"
                className="h-6 w-6"
            /> */}
            <h1 className="text-lg font-bold text-rose-500 cursor-pointer" onClick={() => router.push('/')} >StayCall</h1>
        </div>
    )
}

export default Logo;