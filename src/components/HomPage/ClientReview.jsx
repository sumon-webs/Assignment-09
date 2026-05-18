import { FaStar } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Patient",
        comment:
            "Very smooth experience! I booked a doctor within minutes and got proper consultation online.",
        rating: 5,
        image: "/client1.png",
    },
    {
        name: "John Smith",
        role: "Businessman",
        comment:
            "Excellent service. The doctors are very professional and helpful.",
        rating: 5,
        image: "/client2.png",
    },
    {
        name: "Ayesha Rahman",
        role: "Teacher",
        comment:
            "I love how easy it is to get medical advice from home. Highly recommended!",
        rating: 4,
        image: "/client3.png",
    },
];

const ClientReview = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">

            <div className="container mx-auto px-4">

                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        What Our Clients Say
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Real feedback from our happy patients
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6"
                        >

                            {/* Rating */}
                            <div className="flex items-center gap-1 text-yellow-500 mb-3">
                                {Array.from({ length: item.rating }).map((_, i) => (
                                    <FaStar key={i} />
                                ))}
                            </div>

                            {/* Comment */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                "{item.comment}"
                            </p>

                            {/* User */}
                            <div className="flex items-center gap-3 mt-5">

                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800">
                                        {item.name}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {item.role}
                                    </p>
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default ClientReview;