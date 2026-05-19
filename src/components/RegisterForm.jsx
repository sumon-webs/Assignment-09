"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaGoogle, FaSpinner } from "react-icons/fa6";

function RegisterForm() {
    const [loading, setLoading] = useState(false)


    const router = useRouter()
    const [error, setError] = useState()


    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log(userData);

        const { data, error } = await authClient.signUp.email({
            name: userData.name, // required
            email: userData.email, // required
            password: userData.password, // required
            image: userData.imageUrl,
        });
        if (data) {
            toast.success("Log in success")
            router.push('/log-in')
            setLoading(false)
        }
        if (error) {
            setError(error.message)
            setLoading(false)
        }
    };
    const handlegoogleLogin = async () => {
        toast.loading("Redirecting to Google...");

        await authClient.signIn.social({
            provider: "google",
        });
    };
    return (
        <div className=" container mx-auto mt-23 bg-gray-100 px-4">

            <Card className=" max-w-sm mx-auto shadow-xl shadow-blue-400 rounded-2xl">
                {error && (
                    <p className="text-red-600 text-xs text-center font-medium">
                        {error}
                    </p>
                )}

                <h1 className="text-2xl font-bold text-center mb-6">
                    <div className="rounded-2xl  ">
                        <Image
                            src="/logos.jpg"
                            width={50}
                            height={50}
                            alt="logoimage"
                            className="object-cover rounded-xl mx-auto "
                        />
                    </div>
                    Create Account
                </h1>

                <Form className=" space-y-3" onSubmit={onSubmit}>
                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        validate={(value) => {
                            if (value.length < 3) {
                                return "Name must be at least 3 characters";
                            }
                            return null;
                        }}
                    >
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 6) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Must contain 1 uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Must contain 1 number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            8+ chars, 1 uppercase, 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField
                        isRequired
                        name="imageUrl"
                        type="url"
                        validate={(value) => {
                            try {
                                new URL(value);
                                return null;
                            } catch {
                                return "Please enter a valid image URL";
                            }
                        }}
                    >
                        <Label>Profile Image URL</Label>
                        <Input placeholder="https://example.com/image.jpg" />
                        <FieldError />
                    </TextField>

                    {/* Buttons */}
                    <div className="flex gap-2 pt-2">
                        <Button type="submit" className={'w-full'} >
                            {loading ? <FaSpinner className="animate-spin" /> : "Sing in"}
                        </Button>
                    </div>

                </Form>
                <div className=" space-y-3 text-center">
                    <p className=" text-center ">OR</p>
                    <Button onClick={handlegoogleLogin} fullWidth variant="outline"><FaGoogle className="text-red-500" />Continue with google</Button>
                    <p className="text-gray-300 font-semibold">Have a Accoutn?
                        <Link className="text-blue-500 hover:border-b-0" href={'/log-in'}> Log in</Link>
                    </p>
                </div>
            </Card>
        </div>
    );
}

export default RegisterForm;