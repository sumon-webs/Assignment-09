import { Button } from "@heroui/react";
import Image from "next/image";

const Slide2 = () => {
    return (
        <section className="relative overflow-hidden">

            {/* 🌈 Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-emerald-100"></div>

            <div className="container mx-auto flex items-center px-6 relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 space-y-5">

                    <p className="text-green-600 font-medium">
                        24/7 Emergency Support
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        Fast & Reliable <br /> Medical Services
                    </h1>

                    <p className="text-gray-600 max-w-md">
                        Get instant access to professional doctors and emergency care whenever you need it. Your health is our priority.
                    </p>

                    <Button className="bg-green-600 text-white px-6 py-3 rounded-xl">
                        Book Appointment
                    </Button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/banner2.png"
                        alt="medical service"
                        width={500}
                        height={500}
                        className="drop-shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Slide2;