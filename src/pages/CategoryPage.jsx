import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Button from 'react-bootstrap/Button'

export default function CategoryPage() {

    const { categoryName } = useParams()
    const [products, setProducts] = useState([])


    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${categoryName}`).then(json => setProducts(json.data.products))

    }, [categoryName])



    return (
        <div className="container bg-secondary">
            <div className="my-5 text-center bg-secondary">
                <h1>{categoryName.toUpperCase()}</h1>
                <p className="text-dark">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda magni officia recusandae minima cumque quam esse perferendis eveniet, est libero id inventore vitae ipsa, repellat modi repellendus eius omnis laudantium debitis? Perferendis suscipit consequatur tempore illo, sunt cupiditate modi. Quae expedita dolorem quos, non corrupti suscipit cumque debitis? Ipsa!</p>
            </div>

            <div className="row">
                {
                    products.map((val, key) =>

                        <div className="col-md-6 my-4 " key={key}>
                            <Link className='text-decoration-none' to={`/products/${val.id}`}>
                                <Card>
                                    <Card.Img variant="top" src={val.thumbnail} width='200%' height='300px'/>
                                    <Card.Body>
                                        <Card.Title>{val.title} - {val.price}$</Card.Title>
                                        <Card.Text className='text-dark'>{val.description}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>

                    )
                }
            </div>
        </div>
    )
}