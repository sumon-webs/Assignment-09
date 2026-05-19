import DashboardTab from "@/components/DashboardTab";
import { auth } from "@/lib/auth";
import { getMyAppointData } from "@/lib/data";
import { headers } from "next/headers";

export const metadata = {
    title: "DocAppoint || DashBoard",
};

const DashBoardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    const userId = user?.id;



    const data = await getMyAppointData(userId);
    const bookings = data?.data;

    if (!data.success) {
        return (
            <div className="text-red-500 text-center mt-10">
                {data.message || "Failed to load data"}
            </div>
        );
    }


    return (
        <div>
            <DashboardTab user={user} bookings={bookings} />
        </div>
    );
};

export default DashBoardPage;