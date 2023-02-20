import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';

function Product(){
    const [selectedImg, setSelectedImg] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const images = [
        "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];


    return(
        <div className='product'>
            <div className='left'>
                <div className='images'>
                    <img src={images[0]} alt="" onClick={e=> setSelectedImg(0)} />
                    <img src={images[1]} alt="" onClick={e=> setSelectedImg(1)} />
                </div>
                <div className='mainImg'>
                    <img src={images[selectedImg]} />
                </div>
            </div>
            <div className='right'>
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
                <div className='quantity'>
                    <button onClick={()=> setQuantity((prev)=> prev === 1 ? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=> setQuantity((prev)=> prev+1)} >+</button>
                </div>
                <button className='add'>
                    <AddShoppingCartIcon /> ADD TO CART
                </button>
                <div className='link'>
                    <div className='item'>
                        <FavoriteBorderIcon /> <span>ADD TO WISH LIST</span>
                    </div>
                    <div className='item'>
                        <BalanceIcon /> <span>ADD TO COMPARE</span>
                    </div>
                </div>
                <div className="info">
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
                </div>
                <hr />
                <div className="info">
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
            </div>
            </div>
        </div>
    );
};

export default Product;