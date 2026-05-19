import { Badge, Button, Card } from "@heroui/react";
import { MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DoctorCard = ({ doctor }) => {
    const { _id, rating, name, specialty, image, experience, location } = doctor;

    return (
        <Card className="relative group overflow-hidden rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">

            {/* Rating Badge */}
            <div className="absolute top-3 right-3 z-10">
                <Badge className="bg-yellow-500 text-white flex items-center gap-1 px-2 py-1 rounded-full shadow-md">
                    <Star size={14} className="fill-white" />
                    {rating}
                </Badge>
            </div>

            {/* Image */}
            <div className="relative w-full h-[220px] overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4 space-y-2">

                {/* Name */}
                <h2 className="text-xl font-bold text-gray-800">
                    {name}
                </h2>

                {/* Location */}
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={16} />
                    <span>{location}</span>
                </div>

                {/* Specialty */}
                <div className="flex justify-between text-sm">
                    <p className="text-gray-500">Speciality</p>
                    <p className="font-medium text-gray-700">{specialty}</p>
                </div>

                {/* Experience */}
                <div className="flex justify-between text-sm">
                    <p className="text-gray-500">Experience</p>
                    <p className="font-medium text-gray-700">{experience}</p>
                </div>

                {/* Button */}
                <Link href={`/doctors/${_id}`}>
                    <Button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
                        View Details
                    </Button>
                </Link>

            </div>
        </Card>
    );
};

export default DoctorCard;