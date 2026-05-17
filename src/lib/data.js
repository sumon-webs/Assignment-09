export const getDoctorsData = async() =>{
    const res = await fetch(`${process.env.SERVER_PUBLIC_URL}/doctors`)
    
    const data = await res.json()

    return data
}