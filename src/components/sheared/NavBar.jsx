import Image from "next/image";
import { Button } from "@heroui/react";
import NavActiveLink from "./NavActiveLink";

const NavBar = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-blue-100  backdrop-blur-xl">
            <header className="container mx-auto flex h-20 items-center justify-between px-4">

                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <div className="rounded-2xl bg-blue-50 p-1.5 shadow-sm">
                        <Image
                            src="/logos.png"
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

                {/* Nav Links */}
                <div className="hidden md:flex items-center gap-8 font-medium text-slate-700">

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

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                    <Button
                        variant="light"
                        className="font-medium"
                    >
                        Login
                    </Button>

                    <Button
                        color="primary"
                        radius="full"
                        className="font-semibold px-6 shadow-md"
                    >
                        Get Started
                    </Button>
                </div>

            </header>
        </nav>
    );
};

export default NavBar;