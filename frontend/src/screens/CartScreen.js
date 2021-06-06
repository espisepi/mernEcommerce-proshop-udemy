import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'

//Redux
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/cartAction'



const CartScreen = ({ match, location, history }) => {

    const cart = useSelector(  state => state.cart )
    const { cartItems } = cart
    console.log(cartItems)

    const  productId = match.params.id
    const qty = location.search ? Number(location.search.split('=')[1]) : 1     // location.search  =>  ' ?qty=4 '
    
    const dispatch = useDispatch()
    useEffect( () => {
        if (productId) {
            dispatch( addToCart( productId, qty ) )
        }
    }, [dispatch, productId, qty])

    return (
        <div>
            Cart
        </div>
    )
}

export default CartScreen
