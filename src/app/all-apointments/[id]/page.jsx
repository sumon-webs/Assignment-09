import DoctorDetailsCard from "@/components/cards/DoctorDetailsCard";
import { getDoctorDetails } from "@/lib/data";

const DoctorDetialsPage = async({ params }) => {
    const { id } = await params
    const data = await getDoctorDetails(id)

    const doctor = data.data

    if(!data.success) {
        alert(data.message)
    }
    
    return (
        <div>
            <DoctorDetailsCard doctor={doctor}/>
        </div>
    );
};

export default DoctorDetialsPage;