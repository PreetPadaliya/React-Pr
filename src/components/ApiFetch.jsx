import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const ApiFetch = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.products)
            })
    })

    return (
        <div className='container'>
            <div className="row">
                {
                    products.map((product) => {
                        return (
                            <>
                                <div className="col-lg-3">
                                    <div className="card">
                                        <img src={product.images} className="card-img-top" alt="..." style={{ height: "200px", width: "200px" }} />
                                        <div className="card-body">
                                            <small>Brand: {product.brand}</small>
                                            <h5 className="card-title">{product.title}</h5>
                                            <p className="card-text">{product.description}</p>
                                            <p>Category: {product.category}</p>
                                            <b>Price: ${product.price}</b> <br />
                                            <a href="#" className="btn btn-primary">Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ApiFetch;
