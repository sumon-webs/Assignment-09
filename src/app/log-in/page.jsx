"use client";

import {
    Button,
    Card,
    FieldError,
    Form,
    Input,
    Label,
    TextField
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa6";

function LogInForm() {

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        console.log(userData);
    };

    return (
        <div className=" container mx-auto mt-23 bg-gray-100 px-4">

            <Card className=" max-w-sm  mx-auto shadow-xl shadow-blue-400  rounded-2xl">

                {/* Header */}
                <div className="text-center mb-6">
                    <div className="rounded-2xl  ">
                        <Image
                            src="/logos.jpg"
                            width={50}
                            height={50}
                            alt="logoimage"
                            className="object-cover rounded-xl mx-auto "
                        />
                    </div>
                    <h1 className="text-3xl font-bold text-primary">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Login to your account
                    </p>
                </div>

                <Form className="flex flex-col gap-5" onSubmit={onSubmit}>

                    {/* Email */}
                    <TextField isRequired name="email" type="email">
                        <Label className="text-primary font-medium">Email</Label>
                        <Input
                            placeholder="john@example.com"
                            className="focus:ring-primary"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField isRequired name="password" type="password">
                        <Label className="text-primary font-medium">Password</Label>
                        <Input placeholder="Enter your password" />
                        <FieldError />
                        <p className=" text-xs hover:border-b cursor-pointer">Forgot Password?</p>
                    </TextField>
                    {/* Button */}
                    <div className="pt-2">
                        <Button
                            type="submit"
                            className="w-full bg-primary text-white hover:bg-primary/90 transition"
                        >
                            Login
                        </Button>
                    </div>

                </Form>
                <div className=" space-y-3 text-center">
                    <p className=" text-center ">OR</p>
                    <Button fullWidth variant="outline"><FaGoogle className="text-red-500" />Continue with google</Button>
                    <p className="text-gray-300 font-semibold">Haven't any Accoutn?
                        <Link className="text-blue-500 hover:border-b-0" href={'/register'}> Register</Link>
                    </p>
                </div>
            </Card>

        </div>
    );
}

export default LogInForm;