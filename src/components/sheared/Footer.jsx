import Image from "next/image";
import NavActiveLink from "./NavActiveLink";

import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-t border-blue-100 mt-8 md:mt-12 lg:mt-24">

            <div className="container mx-auto px-4 py-14">

                {/* TOP */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* Logo + Description */}
                    <div className="max-w-sm text-center lg:text-left">

                        <div className="flex items-center justify-center lg:justify-start gap-3 cursor-pointer">

                            <div className="rounded-2xl bg-blue-50 p-1.5 shadow-sm">
                                <Image
                                    src="/logos.jpg"
                                    width={50}
                                    height={50}
                                    alt="logoimage"
                                    className="object-cover rounded-xl"
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

                        <p className="mt-5 text-slate-600 leading-relaxed">
                            Easily book appointments with trusted doctors and
                            manage your healthcare online anytime, anywhere.
                        </p>
                    </div>

                    {/* Nav Links */}
                    <div className="flex flex-row sm:flex-row items-center gap-5 sm:gap-8 font-medium text-slate-700">

                        <NavActiveLink href={"/"}>
                            Home
                        </NavActiveLink>

                        <NavActiveLink href={"/doctors"}>
                            All Appointments
                        </NavActiveLink>

                        <NavActiveLink href={"/dashboard"}>
                            Dashboard
                        </NavActiveLink>
                    </div>

                    {/* Social Icons */}
                    <div>

                        <h3 className="text-lg font-semibold text-slate-800 mb-4 text-center lg:text-left">
                            Follow Us
                        </h3>

                        <ul className="flex items-center gap-4">

                            <li>
                                <button className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center text-lg text-slate-700">
                                    <FaFacebook />
                                </button>
                            </li>

                            <li>
                                <button className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-sky-500 hover:text-white transition-all duration-300 flex items-center justify-center text-lg text-slate-700">
                                    <FaTwitter />
                                </button>
                            </li>

                            <li>
                                <button className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center text-lg text-slate-700">
                                    <FaInstagram />
                                </button>
                            </li>

                        </ul>
                    </div>

                </div>

                {/* Divider */}
                <div className="border-t border-blue-100 mt-10 pt-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500">

                        <p>
                            © 2026 DocAppoint. All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-5">
                            <p className="hover:text-blue-600 cursor-pointer transition">
                                Privacy Policy
                            </p>

                            <p className="hover:text-blue-600 cursor-pointer transition">
                                Terms & Conditions
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;