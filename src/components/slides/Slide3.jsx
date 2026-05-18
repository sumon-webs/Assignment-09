import { Button } from "@heroui/react";
import Image from "next/image";

const Slide3 = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] h-80 w-80 rounded-full bg-purple-200/40 blur-3xl"></div>
            <div className="absolute bottom-[-120px] right-[-80px] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"></div>

            <div className="container mx-auto min-h-[90vh] px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-14 relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left">

                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
                        👨‍⚕️ Expert Doctors Online
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        Consult Top Doctors <br />
                        <span className="text-purple-600">
                            Anytime Anywhere
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
                        Connect instantly with certified specialists and receive
                        professional healthcare advice from the comfort of your home.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <Button
                            size="lg"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 rounded-xl shadow-lg shadow-purple-200 transition-all duration-300"
                        >
                            Start Consultation
                        </Button>

                        <Button
                            variant="bordered"
                            size="lg"
                            className="border-purple-600 text-purple-600 font-semibold px-8 rounded-xl"
                        >
                            Find Specialists
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                100+
                            </h3>
                            <p className="text-gray-500">
                                Certified Doctors
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                24/7
                            </h3>
                            <p className="text-gray-500">
                                Online Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                20K+
                            </h3>
                            <p className="text-gray-500">
                                Online Consultations
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 relative flex justify-center">

                    {/* Glow */}
                    <div className="absolute h-[420px] w-[420px] bg-purple-200/40 rounded-full blur-3xl"></div>

                    {/* Main Card */}
                    <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-[40px] p-6">

                        <Image
                            src="/banner3.png"
                            alt="doctor consultation"
                            width={420}
                            height={420}
                            priority
                            className="relative z-10 object-contain"
                        />

                        {/* Floating Card */}
                        <div className="absolute top-8 -left-8 bg-white shadow-xl rounded-2xl px-5 py-4">
                            <p className="text-sm text-gray-500">
                                Video Consultation
                            </p>
                            <h4 className="font-bold text-purple-600">
                                Live & Secure
                            </h4>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 -right-8 bg-white shadow-xl rounded-2xl px-5 py-4">
                            <p className="text-sm text-gray-500">
                                Specialist Access
                            </p>
                            <h4 className="font-bold text-gray-900">
                                Anytime Online
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slide3;