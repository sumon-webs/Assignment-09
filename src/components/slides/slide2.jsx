import { Button } from "@heroui/react";
import Image from "next/image";

const Slide2 = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">

            {/* Background Glow */}
            <div className="absolute top-[-100px] right-[-100px] h-80 w-80 rounded-full bg-green-200/40 blur-3xl"></div>
            <div className="absolute bottom-[-120px] left-[-80px] h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"></div>

            <div className="container mx-auto min-h-[90vh] px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-14 relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left">

                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
                        🚑 24/7 Emergency Support
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        Fast & Reliable <br />
                        <span className="text-green-600">
                            Medical Services
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
                        Get instant access to trusted doctors, emergency treatment,
                        and healthcare support anytime you need. We care about your
                        health and safety.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 rounded-xl shadow-lg shadow-green-200 transition-all duration-300"
                        >
                            Book Appointment
                        </Button>

                        <Button
                            variant="bordered"
                            size="lg"
                            className="border-green-600 text-green-600 font-semibold px-8 rounded-xl"
                        >
                            Emergency Help
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                24/7
                            </h3>
                            <p className="text-gray-500">
                                Emergency Care
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                50+
                            </h3>
                            <p className="text-gray-500">
                                Specialist Doctors
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                15K+
                            </h3>
                            <p className="text-gray-500">
                                Happy Patients
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 relative flex justify-center">

                    {/* Glow */}
                    <div className="absolute h-[420px] w-[420px] bg-green-200/40 rounded-full blur-3xl"></div>

                    {/* Main Card */}
                    <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-[40px] p-6">

                        <Image
                            src="/banner2.png"
                            alt="medical service"
                            width={420}
                            height={420}
                            priority
                            className="relative z-10 object-contain"
                        />

                        {/* Floating Card */}
                        <div className="absolute top-8 -left-8 bg-white shadow-xl rounded-2xl px-5 py-4">
                            <p className="text-sm text-gray-500">
                                Emergency Team
                            </p>
                            <h4 className="font-bold text-green-600">
                                Ready Anytime
                            </h4>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-8 -right-8 bg-white shadow-xl rounded-2xl px-5 py-4">
                            <p className="text-sm text-gray-500">
                                Average Response
                            </p>
                            <h4 className="font-bold text-gray-900">
                                Under 10 Min
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slide2;