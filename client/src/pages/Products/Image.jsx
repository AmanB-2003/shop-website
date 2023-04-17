import React from 'react';
import useFetch from '../../hooks/useFetch';
import "./Products.scss";

export default function Image({catId}){
    const {data, loading, error} = useFetch(`/categories?populate=*&[filters][UID][$eq]=${catId}`);
    console.log(data);

    return<img className="catImg"
    src={process.env.REACT_APP_UPLOAD_URL + data[0]?.attributes?.img?.data?.attributes?.url} alt="" />
}