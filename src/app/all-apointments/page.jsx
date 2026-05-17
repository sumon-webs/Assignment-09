import DoctorCard from "@/components/cards/DoctorCard";
import { getDoctorsData } from "@/lib/data";
import { FaUserDoctor } from "react-icons/fa6";

const AllApointmentsPage = async () => {
    const data = await getDoctorsData()
    const doctors = data?.data

    if (data.success === false) {
        alert(data.message)
    }


    return (
        <div className=" container mx-auto ">
            <h1 className=" md:text-2xl lg:text-3xl flex gap-1 justify-center font-semi-bold py-8"><FaUserDoctor /> All Available Doctors</h1>
            <div className=" grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} />)
                }
            </div>
        </div>
    );
};

export default AllApointmentsPage;