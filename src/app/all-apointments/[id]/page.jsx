import DoctorDetailsCard from "@/components/cards/DoctorDetailsCard";
import { getDoctorDetails } from "@/lib/data";

const DoctorDetialsPage = async ({ params }) => {
    const { id } = await params
    const data = await getDoctorDetails(id)

    const doctor = data.data

    if (!data.success) {
        return (
            <p className="text-red-500">
                {data.message}
            </p>
        );
    }

    return (
        <div>
            <DoctorDetailsCard doctor={doctor} />
        </div>
    );
};

export default DoctorDetialsPage;