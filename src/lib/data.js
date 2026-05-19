export const getDoctorsData = async (search) => {
    const url = new URL(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`
    );

    if (search) {
        url.searchParams.set("search", search);
    }

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error("Failed to fetch doctors data");
    }

    return res.json();
};

export const getDoctorDetails = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`)
    const data = await res.json()
    return data
}

export const getTopRatedData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/top-rated`)
    const data = await res.json()
    return data
}

export const postAppointData = async (appointData) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoints`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointData)
    })
    const data = await res.json()
    return data
}

export const getMyAppointData = async (userId) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoints/${userId}`)
    const data = await res.json()

    return data
}

