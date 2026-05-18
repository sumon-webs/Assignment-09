import { deleteAppoinData } from "@/lib/action";
import { Card, Button, AlertDialog } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { BookingUpdateModal } from "../BookingUpdateModal";

const BookingCard = ({ booking, onUpdate, onDelete, user }) => {
    const { _id, patientName, date, time, reason } = booking;

    const handleDelete = async () => {
        const data = await deleteAppoinData(user.id, _id)
        if (data) {
            toast.success(data.message)
            redirect('/dashboard')
        }

        if (!data) {
            return alert('data.message')
        }
    }

    return (
        <Card className="max-w-sm shadow-md rounded-xl" variant="tertiary">

            {/* Header */}
            <Card.Header className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-slate-800">
                    {patientName}
                </h3>
                <p className="text-sm text-slate-500">{date}</p>
            </Card.Header>

            {/* Content */}
            <Card.Content className="space-y-1">
                <p className="text-sm text-slate-700">⏰ {time}</p>
                <p className="text-sm text-slate-700">📝 {reason}</p>
            </Card.Content>

            {/* Actions */}
            <div className="flex gap-2 p-4 pt-2">

                <BookingUpdateModal user={user} booking={booking} />

                <AlertDialog>
                    <Button variant="danger">Delete </Button>
                    <AlertDialog.Backdrop>
                        <AlertDialog.Container>
                            <AlertDialog.Dialog className="sm:max-w-[400px]">
                                <AlertDialog.CloseTrigger />
                                <AlertDialog.Header>
                                    <AlertDialog.Icon status="danger" />
                                    <AlertDialog.Heading>Delete appointment permanently?</AlertDialog.Heading>
                                </AlertDialog.Header>
                                <AlertDialog.Body>
                                    <p>
                                        This will permanently delete <strong>My Awesome Project</strong> and all of its
                                        data. This action cannot be undone.
                                    </p>
                                </AlertDialog.Body>
                                <AlertDialog.Footer>
                                    <Button slot="close" variant="tertiary">
                                        Cancel
                                    </Button>
                                    <Button onClick={handleDelete} slot="close" variant="danger">
                                        Delete Appointment
                                    </Button>
                                </AlertDialog.Footer>
                            </AlertDialog.Dialog>
                        </AlertDialog.Container>
                    </AlertDialog.Backdrop>
                </AlertDialog>
            </div>

        </Card>
    );
};

export default BookingCard;