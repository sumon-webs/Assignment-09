"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchDoctors() {
    const router = useRouter();
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        router.push(
            `/doctors?search=${encodeURIComponent(search)}`
        );
    };

    return (
        <form
            onSubmit={handleSearch}
            className="flex justify-center mb-6"
        >
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search doctor by name..."
                className="border rounded px-4 py-2 w-[280px]"
            />

            <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Search
            </button>
        </form>
    );
}