import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import axios from "axios";
import useFetch from '../../hooks/useFetch';

// const data = [
//     {
//         id: 1,
//         img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
//         title: "Long Sleeve Shirt",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id: 2,
//         img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
//         title: "Long Sleeve Shirt",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id: 3,
//         img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
//         title: "Long Sleeve Shirt",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id: 4,
//         img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//         img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
//         title: "Long Sleeve Shirt",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
// ]

function FeaturedProducts({type}){
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    return(
        <div className='featuredproducts'>
            <div className='top'>
                <h1>{type} products</h1>
                {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p> */}
                <div className='bottom'>
                {error ? "Something went wrong :(" : (loading ? "loading" : data?.map(item => <Card item={item} key={item.id} />))}
            </div>
            </div>
            {/* <div className='bottom'>
                {error ? "Something went wrong :(" : (loading ? "loading" : data?.map(item => <Card item={item} key={item.id} />))}
            </div> */}
        </div>
    )
}

export default FeaturedProducts;