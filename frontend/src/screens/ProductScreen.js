import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem, FormControl } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'


const ProductScreen = ({ history,match }) => {
    const [qty, setQty] = useState(0)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error } = productDetails

    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match])

    const addToCartHandler = () =>{
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <div>
            <Link to='/'>
                <div className='btn btn-light'> Back </div>
            </Link>
            {
                loading
                    ? <Loader />
                    : error ? <Message variant='danger'>{error}</Message>
                        : (
                            <Row>
                                <Col md={6}>
                                    <Image src={product.image} alt={product.name} fluid></Image>
                                </Col>
                                <Col md={3}>
                                    <ListGroup variant='flush'>
                                        <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Price: Rs {product.price}
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            Description: Rs {product.description}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                                <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>${product.price}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        <strong>{product.countInStock > 0 ? 'In stock' : 'Out of Stock'}</strong>
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            {
                                                product.countInStock>0 && (
                                                    <ListGroup.Item>
                                                        <Row>
                                                            <Col>Qty</Col>
                                                            <Col>
                                                                <FormControl as='select' value={qty} onChange={(e)=> setQty(e.target.value)}>
                                                                    {
                                                                        [...Array(product.countInStock).keys()].map(x=>(
                                                                            <option key={x+1} value={x+1}> {x+1} </option>
                                                                        ))
                                                                    }
                                                                </FormControl>
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                )
                                            }

                                            <ListGroup.Item>
                                                <Button onClick={addToCartHandler} className='btn bt-block' type='button' disabled={product.countInStock <= 0}>
                                                    Add to Cart
                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
                        )
            }

        </div>
    )
}

export default ProductScreen
