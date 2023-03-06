import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./Cart.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = ()=> {
    //find products from redux state
    const products = useSelector(state=>state.cart.products);
    const dispatch = useDispatch();

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
            title: "Long Sleeve Shirt",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ",
            isNew: true,
            oldPrice: 19,
            price: 12,
        },
    ];

    const totalPrice = ()=> {
        let total= 0;
        products.forEach(item => {
            total += item.quantity*item.price;
        });
        return total.toFixed(2);
    }

    return(
    <div className="cart">
     <h1>Products in your cart</h1>
     {products?.map(item => (
        <div className="item" key={item.id}>
            <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc && item.desc.substring(0,100)}</p>
                <div className="price">${item.quantity} x {item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))} />
        </div>
     ) )};

     <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
     </div>
     <button>PROCEED TO CHECKOUT</button>
     <span className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</span>
    </div>
    );
}

export default Cart;