export const deleteAppoinData = async (userId, id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appoints/${userId}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()

    return data
}