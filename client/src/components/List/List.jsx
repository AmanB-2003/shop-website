import React from 'react';
import "./List.scss";
import Card from '../Card/Card';
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
//         title: "Long Sleeve Shirt",
//         isNew: true,
//         oldPrice: 19,
//         price: 12,
//     },
// ]

function List({subCats, maxPrice, sort, catId}){
    
    //how to use useFetch conditionally????
    // if(sort){
    //     const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    //         item=> `&[filters][sub_categories][id][$eq]=${item}`)}
    //         &[filters][price][$lte]=${maxPrice}&sort=price:${sort}
    //     `);
    // }else{
    //     const {data, loading, error} = useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
    //         item=> `&[filters][sub_categories][id][$eq]=${item}`)}
    //     `);
    // }

    const {data, loading, error} = useFetch(`/products?populate=*&filters[categories][UID][$eq]=${catId}${subCats.map(
        item=> `&[filters][sub_categories][id][$eq]=${item}`)}&[filters][price][$lte]=${maxPrice}
        ${ sort !== null ?`&sort=price:${sort}` : ``}`
    );

    return(
        <div className='list'>
        {loading ? "loading" : data?.map(item=> 
        ( <Card item={item} key={item.id} />)) }
        </div>
    )
}

export default List;