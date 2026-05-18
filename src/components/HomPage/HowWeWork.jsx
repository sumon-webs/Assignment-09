import { FaUserMd, FaCalendarCheck, FaVideo, FaNotesMedical } from "react-icons/fa";

const steps = [
    {
        icon: <FaUserMd />,
        title: "Find Doctor",
        desc: "Search and choose the best specialist for your needs.",
    },
    {
        icon: <FaCalendarCheck />,
        title: "Book Appointment",
        desc: "Select date and time that fits your schedule easily.",
    },
    {
        icon: <FaVideo />,
        title: "Online Consultation",
        desc: "Connect with doctors via video call anytime, anywhere.",
    },
    {
        icon: <FaNotesMedical />,
        title: "Get Prescription",
        desc: "Receive digital prescription and medical guidance instantly.",
    },
];

const HowWeWork = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">

            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        How We Work
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Simple steps to get your healthcare service
                    </p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 text-center group"
                        >

                            {/* Icon */}
                            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl group-hover:scale-110 transition">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 mt-2 text-sm">
                                {step.desc}
                            </p>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default HowWeWork;