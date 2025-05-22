import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {

    const { id } = useParams()
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((response) => response.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }, [id])

    if (loading) {
        return (
            <div className='container'>
                <h1>Loading...</h1>
            </div>
        )
    }
    if (!products) {
        return (
            <div>
                <h1>Product not found</h1>
            </div>
        )
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <img src={products.images} alt="" />
                </div>
                <div className="col-lg-6">
                    <div className="product-data">
                        <h1>{products.title}</h1>
                        <p><b>Brand: {products.brand}</b></p>
                        <p>{products.description}</p>
                        <p>Category: {products.category}</p>
                        <p>Price: ${products.price}</p>
                        <p>{products.returnPolicy} </p>
                        <button className='btn btn-secondary me-2'>Add to cart</button>
                        <button className='btn btn-outline-danger'>Add to wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDetails;
