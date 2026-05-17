import { Button } from "@heroui/react";
import Image from "next/image";

const slide1 = () => {
    return (
        <section className="relative overflow-hidden">

            {/* 🌈 Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-blue-100"></div>

            <div className="container mx-auto  flex items-center px-6 relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 space-y-5">

                    <p className="text-blue-600 font-medium">
                        Welcome to MediFax
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        We are Committed <br /> To Your Health
                    </h1>

                    <p className="text-gray-600 max-w-md">
                        It is a well-established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout.
                    </p>

                    <Button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
                        Meet a Doctor
                    </Button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/banner.png"
                        alt="doctor banner"
                        width={600}
                        height={600}
                        className="drop-shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default slide1;