"use client";

import { postAppointData } from "@/lib/data";
import { Button, Input, Label, Modal, Surface, TextField, Description, ListBox, Select, FieldError, DateField, TimeField, Avatar } from "@heroui/react";
import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";

export function BookAppointModal({ doctor }) {
    const { _id, name, image } = doctor

    const [gender, setGender] = useState('')

    const handleAppoint = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const data = Object.fromEntries(formData.entries());
        const appointData = {
            doctorId: _id,
            userEmail: data.UserEmail,
            doctorName: data.doctorName,
            date: data.date,
            time: data.time,
            reason: data.reason,
            number: data.number,
            gender: gender
        }

        postAppointData(appointData)
        console.log(appointData)
    };

    return (
        <Modal>
            <Button variant="secondary">Get Appoint</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-lg">
                        <Modal.CloseTrigger />
                        <div className=" flex justify-center text-center">
                            <Modal.Header >
                                <Avatar className=" mx-auto">
                                    <Avatar.Image alt="John Doe" src={image} />
                                    <Avatar.Fallback>JD</Avatar.Fallback>
                                </Avatar>
                                <p className="mt-1.5 text-sm leading-5 text-muted">
                                    Fill the form for Appoint with {name}
                                </p>
                            </Modal.Header>
                        </div>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleAppoint} className="flex flex-col gap-4">
                                    {/* UserEmail */}
                                    <TextField isReadOnly defaultValue="john@example.com" isRequired name="UserEmail" type="email">
                                        <Label>User email</Label>
                                        <Input placeholder="john@example.com" />
                                        <FieldError />
                                    </TextField>

                                    {/* Doctor Name */}
                                    <TextField isReadOnly defaultValue={name} isRequired className="w-full" name="doctorName" type="text">
                                        <Label>Full Name</Label>
                                        <Input />

                                    </TextField>

                                    {/* Name */}
                                    <TextField isRequired className="w-full" name="name" type="text">
                                        <Label>Full Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>

                                    <div className=" flex gap-2">

                                        {/* Gender */}
                                        <TextField className="w-[50%]">
                                            <Label>Gender</Label>

                                            <Select
                                                selectedKeys={gender ? [gender] : []}
                                                onSelectionChange={(keys) => {
                                                    const value = Array.from(keys)[0];
                                                    setGender(value);
                                                }}
                                                isRequired
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
                                        </TextField>
                                        {/* number */}
                                        <TextField isRequired className="w-[50%]" name="number" type="text">
                                            <Label>Number</Label>
                                            <Input placeholder="Enter your number" />
                                        </TextField>
                                    </div>

                                    <div className=" flex gap-2">
                                        {/* Date */}
                                        <DateField className={'w-[50%]'} name="date">
                                            <Label>Date</Label>
                                            <DateField.Group>
                                                <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                            </DateField.Group>
                                        </DateField>

                                        {/* Time */}
                                        <TimeField isRequired className="w-[256px]" name="time">
                                            <Label>Time</Label>
                                            <TimeField.Group>
                                                <TimeField.Input>{(segment) => <TimeField.Segment segment={segment} />}</TimeField.Input>
                                            </TimeField.Group>
                                        </TimeField>
                                    </div>

                                    {/* Reason */}
                                    <TextField className="w-full" name="reason" type="text">
                                        <Label>Reason</Label>
                                        <Input placeholder="Enter your Reason" />
                                    </TextField>

                                    <div className=" space-x-1.5">
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit">Submit</Button>
                                    </div>
                                </form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop >
        </Modal >
    );
}