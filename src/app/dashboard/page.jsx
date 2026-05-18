import DashboardTab from "@/components/DashboardTab";
import { auth } from "@/lib/auth";
import { getMyAppointData } from "@/lib/data";
import { headers } from "next/headers";

const DashBoardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const id = user?.id

    const data = await getMyAppointData(id)
    const bookings = data?.data

    if (!data.success) {
        return (
            alert(data.meassage)
        );
    }
    return (
        <div>
            <DashboardTab bookings={bookings} />
        </div>
    );
};

export default DashBoardPage;