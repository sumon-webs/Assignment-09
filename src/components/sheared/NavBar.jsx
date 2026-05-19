'use client'

import Image from "next/image";
import { Avatar, Button } from "@heroui/react";
import NavActiveLink from "./NavActiveLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useSession, authClient } from "@/lib/auth-client";
import { FaSpinner } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter()
    const { data: session, isLoading } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const user = session?.user;

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/log-in");
                    toast.success("Log out success") // redirect to login page
                },
            },
        });
    };

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
                            alt="logo"
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
                    <NavActiveLink href={"/"}>Home</NavActiveLink>
                    <NavActiveLink href={"/doctors"}>All Appointments</NavActiveLink>
                    <NavActiveLink href={"/dashboard"}>Dashboard</NavActiveLink>
                </div>

                {/* Desktop Auth */}
                {
                    isLoading ? (
                        <FaSpinner className="animate-spin" />
                    ) : (
                        <div className="hidden md:flex items-center gap-3">

                            {session ? (
                                <div className="flex items-center gap-3">

                                    <Avatar>
                                        <Avatar.Image
                                            alt={user?.name || "User"}
                                            src={
                                                user?.image && user?.image.startsWith("http")
                                                    ? user.image
                                                    : "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                            }
                                        />
                                        <Avatar.Fallback>
                                            {user?.name?.slice(0, 2)?.toUpperCase() || "U"}
                                        </Avatar.Fallback>
                                    </Avatar>

                                    <Button onClick={handleLogout} color="danger" variant="flat">
                                        Log Out
                                    </Button>
                                </div>
                            ) : (
                                <div className="flex gap-2">

                                    <Link href="/log-in">
                                        <Button variant="bordered">Login</Button>
                                    </Link>

                                    <Link href="/register">
                                        <Button color="primary" radius="full">
                                            Register
                                        </Button>
                                    </Link>

                                </div>
                            )}
                        </div>
                    )
                }

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl border border-slate-200 bg-white shadow-sm"
                >
                    {isOpen ? (
                        <X className="w-5 h-5" />
                    ) : (
                        <Menu className="w-5 h-5" />
                    )}
                </button>

            </header>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen
                    ? "max-h-[500px] opacity-100 border-t border-slate-100"
                    : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-5 bg-white/95 backdrop-blur-xl space-y-5">

                    {/* Nav Links */}
                    <div className="flex flex-col gap-4 font-medium text-slate-700">
                        <NavActiveLink href={"/"}>Home</NavActiveLink>
                        <NavActiveLink href={"/doctors"}>All Appointments</NavActiveLink>
                        <NavActiveLink href={"/dashboard"}>Dashboard</NavActiveLink>
                    </div>

                    {/* Mobile User Section */}
                    {isLoading ? (
                        <div className="flex justify-center py-3">
                            <FaSpinner className="animate-spin" />
                        </div>
                    ) : session ? (
                        <div className="flex items-center gap-3 py-3 border-b border-slate-100">

                            <Avatar>
                                <Avatar.Image
                                    alt={user?.name}
                                    src={user?.image || "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"}
                                />
                                <Avatar.Fallback>
                                    {user?.name?.slice(0, 2)?.toUpperCase() || "U"}
                                </Avatar.Fallback>
                            </Avatar>

                            <div>
                                <p className="text-sm font-semibold text-slate-800">
                                    {user?.name}
                                </p>
                                <p className="text-xs text-slate-500">
                                    {user?.email}
                                </p>
                            </div>

                        </div>
                    ) : null}

                    {/* Mobile Buttons */}
                    <div className="flex flex-col gap-3 pt-2">

                        {session ? (
                            <Button
                                onClick={handleLogout}
                                color="danger"
                                variant="flat"
                                className="w-full font-medium"
                            >
                                Log Out
                            </Button>
                        ) : (
                            <>
                                <Link href="/log-in">
                                    <Button variant="bordered" className="w-full">
                                        Login
                                    </Button>
                                </Link>

                                <Link href="/register">
                                    <Button color="primary" className="w-full">
                                        Register
                                    </Button>
                                </Link>
                            </>
                        )}

                    </div>

                </div>
            </div>

        </nav>
    );
};

export default NavBar;