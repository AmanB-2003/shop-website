import React from 'react';
import "./List.scss";
import Card from '../Card/Card';

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
//         title: "Long Sleeve Shirt",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
// ]

function List({subCats, maxPrice, sort, catId}){
    return(
        <div className='list'>
        {/* {data.map(item=> 
        ( <Card item={item} key={item.id} />)) } */}
        </div>
    )
}

export default List;