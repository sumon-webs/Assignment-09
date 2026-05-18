import { Badge } from "@heroui/react";
import { Star } from "lucide-react";
import Image from "next/image";
import { BookAppointModal } from "../BookAppointModal";

const DoctorDetailsCard = ({ doctor }) => {
    return (
        <div className=" relative max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-23">
            {/* Rating */}
            <div className="absolute top-3 left-12 z-10">
                <Badge className="bg-yellow-500 text-white flex items-center gap-1 px-2 py-1 rounded-full shadow-md">
                    <Star size={14} className="fill-white" />
                    {doctor.rating}
                </Badge>
            </div>

            {/* Top Section */}
            <div className="flex flex-col md:flex-row">

                {/* Image */}
                <div className="md:w-1/3 relative h-[300px]">
                    <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Details */}
                <div className="md:w-2/3 p-6 space-y-3">

                    <h1 className="text-2xl font-bold text-gray-800">
                        {doctor.name}
                    </h1>

                    <p className="text-blue-600 font-medium">
                        {doctor.specialty}
                    </p>

                    <p className="text-gray-600">
                        {doctor.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 mt-4">

                        <p><span className="font-semibold">Experience:</span> {doctor.experience}</p>

                        <p><span className="font-semibold">Fee:</span> ${doctor.fee}</p>

                        <p><span className="font-semibold">Hospital:</span> {doctor.hospital}</p>

                        <p><span className="font-semibold">Location:</span> {doctor.location}</p>

                    </div>

                    {/* Doctor ability */}
                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800">Availability:</h3>

                        <div className="flex flex-wrap gap-2 mt-2">
                            {doctor.availability.map((time, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                >
                                    {time}
                                </span>
                            ))}
                        </div>
                    </div>
                    {/* Get Appoint */}
                    <BookAppointModal doctor={doctor} />

                </div>
            </div>

        </div>
    );
};

export default DoctorDetailsCard;