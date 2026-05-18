"use client";

import { updateAppoint } from "@/lib/action";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
    ListBox,
    Select,
    FieldError,
    DateField,
    TimeField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export function BookingUpdateModal({ booking, user }) {
    const router = useRouter()

    const [loading, setLoading] = useState(false);
    const [gender, setGender] = useState(booking?.gender || "");

    const userId = user?.id;

    const {
        _id,
        doctorName,
        userEmail,
        patientName,
        number,
        reason,
    } = booking;

    const handleAppoint = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const appointData = {
            doctorId: _id,
            patientName: data.name,
            userId: user?.id,
            userEmail: user?.email,
            doctorName: data.doctorName,
            date: data.date,
            time: data.time,
            reason: data.reason,
            number: data.number,
            gender: gender,
        };

        const res = await updateAppoint(userId, _id, appointData);

        setLoading(false);

        if (res.success) {
            toast.success(res.message);
            router.push('/dashboard')
            e.target.reset();
            setGender("");
        } else {
            toast.error(res.message);
        }
    };

    return (
        <Modal>
            <Button>Update</Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleAppoint} className="flex flex-col gap-4">

                                    {/* Email */}
                                    <TextField
                                        defaultValue={userEmail}
                                        isReadOnly
                                        isRequired
                                        name="userEmail"
                                    >
                                        <Label>User email</Label>
                                        <Input />
                                        <FieldError />
                                    </TextField>

                                    {/* Doctor */}
                                    <TextField
                                        defaultValue={doctorName}
                                        isReadOnly
                                        isRequired
                                        name="doctorName"
                                    >
                                        <Label>Doctor Name</Label>
                                        <Input />
                                    </TextField>

                                    {/* Name */}
                                    <TextField
                                        defaultValue={patientName}
                                        isRequired
                                        name="name"
                                    >
                                        <Label>Full Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <div className="flex gap-2">

                                        {/* Gender */}
                                        <div className="w-[50%]">
                                            <Label>Gender</Label>

                                            <Select
                                                isRequired
                                                onSelectionChange={(keys) => {
                                                    const value = [...(keys || [])][0];
                                                    if (typeof value === "string") {
                                                        setGender(value);
                                                    }
                                                }}
                                            >
                                                <Select.Trigger>
                                                    <Select.Value placeholder="Select gender" />
                                                    <Select.Indicator />
                                                </Select.Trigger>

                                                <Select.Popover>
                                                    <ListBox>
                                                        <ListBox.Item id="male">Male</ListBox.Item>
                                                        <ListBox.Item id="female">Female</ListBox.Item>
                                                        <ListBox.Item id="others">Others</ListBox.Item>
                                                    </ListBox>
                                                </Select.Popover>
                                            </Select>
                                        </div>

                                        {/* Number */}
                                        <TextField
                                            defaultValue={number}
                                            isRequired
                                            name="number"
                                            className="w-[50%]"
                                        >
                                            <Label>Number</Label>
                                            <Input />
                                        </TextField>
                                    </div>

                                    <div className="flex gap-2">

                                        {/* Date */}
                                        <DateField isRequired name="date" className="w-[50%]">
                                            <Label>Date</Label>
                                            <DateField.Group>
                                                <DateField.Input>
                                                    {(segment) => <DateField.Segment segment={segment} />}
                                                </DateField.Input>
                                            </DateField.Group>
                                        </DateField>

                                        {/* Time */}
                                        <TimeField isRequired name="time" className="w-[50%]">
                                            <Label>Time</Label>
                                            <TimeField.Group>
                                                <TimeField.Input>
                                                    {(segment) => <TimeField.Segment segment={segment} />}
                                                </TimeField.Input>
                                            </TimeField.Group>
                                        </TimeField>
                                    </div>

                                    {/* Reason */}
                                    <TextField defaultValue={reason} name="reason">
                                        <Label>Reason</Label>
                                        <Input />
                                    </TextField>

                                    <div className="space-x-2">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>

                                        <Button type="submit" isDisabled={loading}>
                                            {loading ? "Updating..." : "Update"}
                                        </Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}