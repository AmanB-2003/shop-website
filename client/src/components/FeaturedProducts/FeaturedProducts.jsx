import React from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";

const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
        title: "Long Sleeve Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
        title: "Long Sleeve Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
        title: "Long Sleeve Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        img2: "https://images.pexels.com/photos/2530790/pexels-photo-2530790.jpeg",
        title: "Long Sleeve Shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
    },
]

function FeaturedProducts({type}){
    return(
        <div className='featuredproducts'>
            <div className='top'>
                <h1>{type} products</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
                lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida. Risus commodo viverra maecenas.
                </p>
            </div>
            <div className='bottom'>
                {data.map(item => <Card item={item} key={item.id} />)}
            </div>
        </div>
    )
}

export default FeaturedProducts;