import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../services/apiController'
function Products() {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        handleFetchData()
    }, [])

    const handleFetchData = async () => {
        try {
            setLoader(true)
            const response = await getAllPosts()
            setData(response.data)
            console.log(response.data, 'this is data');
            setLoader(false)
        } catch (error) {
            console.log(error.message, 'API Fetch Error');
        }
    }
    if (loader) {
        return (
            <h1>Loading</h1>
        )
    }
    return (
        <>
            {/* <h1>Total Count:{data?.length}</h1> */}
            {data?.map((item, index) => (
                <div style={{ backgroundColor: 'yellowgreen' }} key={index}>
                    <div><img src={item.image} alt="" /></div>
                    <h2>{item.title}</h2>
                    <small>{item.price}</small>
                    <p>{item.description}</p>
                    <strong>{item.category}</strong>
                </div>
            ))}
        </>
    )
}

export default Products