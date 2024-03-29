import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { removeItem, resetCart } from "../../redux/cartReducer";
import {loadStripe} from '@stripe/stripe-js';
import makeRequests from "../../makeRequests";

const Cart = ()=> {
    //find products from redux state
    const products = useSelector(state=>state.cart.products);
    const isLoggedIn = useSelector(state=>state.user.user);
    const dispatch = useDispatch();

    //react router redirect
    const navigate = useNavigate();

    const totalPrice = ()=> {
        let total= 0;
        products.forEach(item => {
            total += item.quantity*item.price;
        });
        return total.toFixed(2);
    };

    const stripePromise = loadStripe('pk_test_51MibAxSHcbCO3ctinYGL4ea1SIu56WayTtN5fhyRanN50zUMoRKTLJCORBCHlua5ldYwjWyxpLfX70RvOyTqEECm007Notae4b');

    const handlePayment = async ()=>{
        if(isLoggedIn === null){
            navigate('/login')
            return;
        }
        
        try{
            const stripe = await stripePromise;

            const res = await makeRequests.post("/orders",{
                products,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })
        }catch(err){
            console.log(err);
        }
    }

    return(
    <div className="cart">
     <h3>Products in your cart</h3><hr></hr>
     {products?.map(item => (
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <div className="price">${item.quantity} x {item.price}</div>
                <p>size : {item.size}</p>
            </div>
            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))} />
        </div>
     ) )}<hr></hr>

     <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
     </div>
     <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
     <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
    );
}

export default Cart;

    // const data = [
    //     {
    //         id: 1,
    //         img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
    //         title: "Long Sleeve Shirt",
    //         desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ",
    //         isNew: true,
    //         oldPrice: 19,
    //         price: 12,
    //     },
    // ];
