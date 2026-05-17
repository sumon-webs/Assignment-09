import { Button } from "@heroui/react";
import Image from "next/image";

const Slide3 = () => {
    return (
        <section className="relative overflow-hidden">

            {/* 🌈 Background */}
            <div className="absolute min-h-[80vh]  inset-0 bg-gradient-to-r from-purple-50 via-white to-pink-100"></div>

            <div className="container mx-auto flex items-center px-6 relative z-10">

                {/* LEFT CONTENT */}
                <div className="flex-1 space-y-5">

                    <p className="text-purple-600 font-medium">
                        Expert Doctors Online
                    </p>

                    <h1 className="text-5xl font-bold leading-tight text-gray-900">
                        Consult Top Doctors <br /> Anytime Anywhere
                    </h1>

                    <p className="text-gray-600 max-w-md">
                        Connect with certified specialists and get professional medical advice from the comfort of your home.
                    </p>

                    <Button className="bg-purple-600 text-white px-6 py-3 rounded-xl">
                        Start Consultation
                    </Button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex-1 flex justify-center">
                    <Image
                        src="/banner3.png"
                        alt="doctor consultation"
                        width={500}
                        height={500}
                        className="drop-shadow-xl"
                    />
                </div>

            </div>
        </section>
    );
};

export default Slide3;