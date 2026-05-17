'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavActiveLink = ({ href, children }) => {
    const pathName = usePathname()

    const active = pathName === href

    return (
        <Link
            className={`hover:text-blue-300 ${active ? "text-blue-400" : " "}`}
            href={href}>
            {children}
        </Link>
    );
};

export default NavActiveLink;