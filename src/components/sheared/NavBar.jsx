'use client'

import Image from "next/image";
import { Button } from "@heroui/react";
import NavActiveLink from "./NavActiveLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-blue-100 bg-white/80 backdrop-blur-xl">

            <header className="container mx-auto flex h-20 items-center justify-between px-4">

                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">

                    <div className="rounded-2xl bg-blue-50 p-1.5 shadow-sm">
                        <Image
                            src="/logos.jpg"
                            width={50}
                            height={50}
                            alt="logoimage"
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            <span className="text-slate-900">Doc</span>
                            <span className="text-blue-500">Appoint</span>
                        </h1>

                        <p className="text-xs text-slate-500 -mt-1">
                            Smart Medical Booking
                        </p>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8 font-medium text-slate-700">

                    <NavActiveLink href={"/"}>
                        Home
                    </NavActiveLink>

                    <NavActiveLink href={"/all-apointments"}>
                        All Appointments
                    </NavActiveLink>

                    <NavActiveLink href={"/dashboard"}>
                        Dashboard
                    </NavActiveLink>
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-3">

                    <Link href={'/log-in'}>
                        <Button
                            variant="bordered"
                            className="w-full font-medium"
                        >
                            Login
                        </Button>
                    </Link>

                    <Link href={'/register'}>
                        <Button
                            color="primary"
                            radius="full"
                            className="w-full font-semibold"
                        >
                            Register
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                    {
                        isOpen
                            ? <X className="w-5 h-5 text-slate-700" />
                            : <Menu className="w-5 h-5 text-slate-700" />
                    }
                </button>

            </header>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen
                    ? "max-h-[400px] opacity-100 border-t border-slate-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-5 bg-white/95 backdrop-blur-xl space-y-5">

                    {/* Nav Links */}
                    <div className="flex flex-col gap-4 font-medium text-slate-700">

                        <NavActiveLink href={"/"}>
                            Home
                        </NavActiveLink>

                        <NavActiveLink href={"/all-apointments"}>
                            All Appointments
                        </NavActiveLink>

                        <NavActiveLink href={"/dashboard"}>
                            Dashboard
                        </NavActiveLink>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex flex-col gap-3 pt-2">

                        <Link href={'/log-in'}>
                            <Button
                                variant="bordered"
                                className="w-full font-medium"
                            >
                                Login
                            </Button>
                        </Link>

                        <Link href={'/register'}>
                            <Button
                                color="primary"
                                radius="full"
                                className="w-full font-semibold"
                            >
                                Register
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavBar;