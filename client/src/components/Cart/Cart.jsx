import React from "react";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import "./Cart.scss";

const Cart = ()=> {
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

    return(
    <div className="cart">
     <h1>Products in your cart</h1>
     {data.map(item => (
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc && item.desc.substring(0,100)}</p>
                <div className="price">${item.price}</div>
            </div>
            <DeleteOutlinedIcon className="delete"/>
        </div>
     ) )};

     <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
     </div>
     <button>PROCEED TO CHECKOUT</button>
     <span className="reset">Reset Cart</span>
    </div>
    );
}

export default Cart;