export const getDoctorsData = async () => {
    const res = await fetch(`${process.env.SERVER_PUBLIC_URL}/doctors`)
    const data = await res.json()
    return data
}

export const getDoctorDetails = async (id) => {
    const res = await fetch(`${process.env.SERVER_PUBLIC_URL}/doctors/${id}`)
    const data = await res.json()
    return data
}

export const getTopRatedData = async () => {
    const res = await fetch(`${process.env.SERVER_PUBLIC_URL}/top-rated`)
    const data = await res.json()
    return data
}