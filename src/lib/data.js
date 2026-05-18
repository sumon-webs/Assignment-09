export const getDoctorsData = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`)
    const data = await res.json()
    return data
}

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