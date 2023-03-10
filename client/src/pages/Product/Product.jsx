import React, { useState } from 'react';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import "./Product.scss";
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartReducer';

function Product(){
    const id = useParams().id;
    const [selectedImg, setSelectedImg] = useState("img");
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();

    // const images = [
    //     "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //     "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    // ];

    //fetch product data (populate - to fetch images)
    const {data, loading, error} = useFetch(`/products/${id}?populate=*`);


    return( loading? "loading..." : <div>
        <div className='product'>
            <div className='left'>
                <div className='images'>
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e=> setSelectedImg("img")} />
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e=> setSelectedImg("img2")} />
                </div>
                <div className='mainImg'>
                    <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes[selectedImg].data?.attributes?.url} alt="" />
                </div>
            </div>
            <div className='right'>
                <h1>{data?.attributes?.title}</h1>
                <span className='price'>${data?.attributes?.price}</span>
                <p>{data?.attributes?.desc}</p>
                <div className='quantity'>
                    <button onClick={()=> setQuantity((prev)=> prev === 1 ? 1 : prev-1)}>-</button>
                    {quantity}
                    <button onClick={()=> setQuantity((prev)=> prev+1)} >+</button>
                </div>

                {/* // addToCart -- redux */}
                <button className='add' onClick={()=>{dispatch(addToCart({
                    id: data.id,
                    title: data.attributes.title,
                    desc: data.attributes.desc,
                    price: data.attributes.price,
                    quantity,
                    img: data.attributes.img.data.attributes.url,
                }));
                setQuantity(1);
                }}>
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
        </div>
    );
};

export default Product;