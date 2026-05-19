import DoctorCard from "@/components/cards/DoctorCard";
import SearchDoctors from "@/components/SearchDoctor";
import { getDoctorsData } from "@/lib/data";
import { FaUserDoctor } from "react-icons/fa6";

export const metadata = {
    title: "DocAppoint || All Doctors",
};

const AllDoctorsPage = async ({ searchParams }) => {
    const params = await searchParams;

    const search = params?.search;
    const data = await getDoctorsData( search);

    const doctors = data?.data || [];

    if (!data.success) {
        return <p className="text-red-500">{data.message}</p>;
    }

    return (
        <div className="container mx-auto">

            <h1 className="text-2xl flex gap-2 justify-center font-semibold py-8">
                <FaUserDoctor />
                All Available Doctors
            </h1>

            {/* SEARCH COMPONENT */}
            <SearchDoctors />

            {/* DOCTORS LIST */}
            {doctors.length === 0 ? (
                <p className="text-center text-gray-500 py-10">
                    No Data Found
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {doctors.map((doctor) => (
                        <DoctorCard key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            )}

        </div>
    );
};

export default AllDoctorsPage;