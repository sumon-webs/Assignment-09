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

export const updateAppoint = async (userId, id, payload) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/appoints/${userId}/${id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }
    );

    return await res.json();
};