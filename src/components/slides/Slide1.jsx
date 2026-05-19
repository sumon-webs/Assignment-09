import { Button } from "@heroui/react";
import Image from "next/image";

const Slide1 = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

            {/* Background Blur Shapes */}
            <div className="absolute top-[-100px] left-[-100px] h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>
            <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl"></div>

            <div className="container mx-auto min-h-[90vh] px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-14 relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 text-center lg:text-left">

                    <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-5">
                        💙 Trusted Healthcare Platform
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
                        Your Health Is <br />
                        <span className="text-blue-600">
                            Our Top Priority
                        </span>
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
                        Get connected with experienced doctors, schedule appointments,
                        and receive trusted healthcare services anytime you need.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <Button
                            size="lg"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 rounded-xl shadow-lg shadow-blue-200 transition-all duration-300"
                        >
                            Meet a Doctor
                        </Button>

                        <Button
                            variant="bordered"
                            size="lg"
                            className="border-blue-600 text-blue-600 font-semibold px-8 rounded-xl"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="mt-10 flex flex-wrap gap-8 justify-center lg:justify-start">

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                15+
                            </h3>
                            <p className="text-gray-500">
                                Expert Doctors
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                24/7
                            </h3>
                            <p className="text-gray-500">
                                Emergency Support
                            </p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-gray-900">
                                100%
                            </h3>
                            <p className="text-gray-500">
                                Patient Satisfaction
                            </p>
                        </div>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 relative flex justify-center">

                    {/* Glow */}
                    <div className="absolute h-[420px] w-[420px] bg-blue-200/40 rounded-full blur-3xl"></div>

                    {/* Card */}
                    <div className="relative bg-white/70 backdrop-blur-xl border border-white shadow-2xl rounded-[40px] p-6">

                        <Image
                            src="/banner.png"
                            alt="doctor banner"
                            width={520}
                            height={520}
                            priority
                            className="relative w-auto h-auto z-10 object-contain"
                        />

                        {/* Floating Badge */}
                        <div className="absolute top-8 -left-8 bg-white shadow-xl rounded-2xl px-5 py-4">
                            <p className="text-sm text-gray-500">
                                Online Consultation
                            </p>
                            <h4 className="font-bold text-blue-600">
                                Available Now
                            </h4>
                        </div>

                        {/* Floating Card */}
                        <div className="absolute bottom-8 -right-8 bg-white shadow-xl rounded-2xl px-5 py-4">
                            <p className="text-sm text-gray-500">
                                Trusted By
                            </p>
                            <h4 className="font-bold text-gray-900">
                                12K+ Patients
                            </h4>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slide1;