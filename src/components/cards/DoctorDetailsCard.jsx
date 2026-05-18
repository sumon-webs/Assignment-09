import Image from "next/image";

const DoctorDetailsCard = ({ doctor }) => {
    return (
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden mt-23">

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

                </div>
            </div>

        </div>
    );
};

export default DoctorDetailsCard;