import React , {useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'


const ProductScreen = ({match}) => {
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[match])
    return (
        <div>
            <Link to='/'>
                <div className='btn btn-light'> Back </div>
            </Link>
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
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
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
                                        <strong>{product.countInStock>0 ? 'In stock' : 'Out of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn bt-block' type='button' disabled={product.countInStock <= 0}>
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
