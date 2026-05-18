import { getTopRatedData } from "@/lib/data";
import DoctorCard from "../cards/DoctorCard";
import { Inbox } from "lucide-react";
import { FaUserDoctor } from "react-icons/fa6";

const TopRatedDoctors = async () => {
    const data = await getTopRatedData()

    const doctors = data.data

    if (!data.success) {
        return (
            <p className="text-red-500">
                {data.message}
            </p>
        );
    }

    return (
        <div className=" container mx-auto mt-8 md:mt-12 lg:mt-24">
            <h1 className=" md:text-2xl lg:text-3xl flex gap-1 justify-center font-semi-bold py-8"><FaUserDoctor /> Top Doctors</h1>
            {
                doctors.length === 0
                    ? <div className="flex flex-col items-center justify-center py-24 text-center">
                        <Inbox className="w-12 h-12 text-gray-400" />
                        <h2 className="text-xl font-semibold text-gray-700 mt-3">
                            No Data Found
                        </h2>
                        <p className="text-gray-500 mt-1">
                            Try again later or add new items.
                        </p>
                    </div>
                    :
                    <div className=" grid grid-cols-1  md:grid-cols-3  gap-4">

                        {
                            doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} />)
                        }
                    </div>
            }

        </div>
    );
};

export default TopRatedDoctors;