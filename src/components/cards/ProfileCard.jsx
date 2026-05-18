'use client'
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, FieldError, Input, Label, Modal, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa6";

const ProfileCard = ({ user }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("imageUrl");

        console.log(name, image)

        const { data, error } = await authClient.updateUser({
            name,
            image,
        });
        if (data) {
            router.push('/dashboard')
            toast.success("Profile update success")
            setLoading(false)
        }
        if (error) {
            setLoading(false)
        }
    };

    return (
        <div>
            <Card className="max-w-sm text-center" variant="secondary">
                <Avatar className=" mx-auto">
                    <Avatar.Image alt="John Doe" src={user?.image} />
                    <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar>
                <Card.Header>
                    <Card.Title>{user?.name}</Card.Title>
                </Card.Header>
                <Card.Content>
                    <p>{user?.email}</p>
                </Card.Content>
                <Modal>
                    <Button className="mx-auto" variant="secondary">
                        Update profile
                    </Button>

                    <Modal.Backdrop>
                        <Modal.Container>
                            <Modal.Dialog className="sm:max-w-[360px]">

                                <Modal.CloseTrigger />

                                <Modal.Header>
                                    <Modal.Heading>
                                        Update Your profile
                                    </Modal.Heading>
                                </Modal.Header>

                                <Modal.Body>
                                    <form onSubmit={handleUpdateProfile} className="flex flex-col gap-4">

                                        <TextField
                                            defaultValue={user?.name}
                                            name="name"
                                            isRequired
                                        >
                                            <Label>Name</Label>
                                            <Input />
                                        </TextField>

                                        <TextField
                                            defaultValue={user?.image}
                                            name="imageUrl"
                                            isRequired
                                        >
                                            <Label>Image</Label>
                                            <Input />
                                        </TextField>

                                        <Button type="submit">
                                            {loading ? (
                                                <span className="flex items-center gap-2">
                                                    <FaSpinner className="animate-spin" />
                                                    Updating...
                                                </span>
                                            ) : (
                                                "Update"
                                            )}
                                        </Button>

                                    </form>
                                </Modal.Body>

                            </Modal.Dialog>
                        </Modal.Container>
                    </Modal.Backdrop>
                </Modal>
            </Card>
        </div>
    );
};

export default ProfileCard;