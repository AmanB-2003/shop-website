import React from 'react';
import "./Card.scss";
import {Link} from "react-router-dom";

function Card({item}){
    return(
        <Link to={`/product/${item.id}`}>
            <div className="card">
                <div className="image">
                    {item.attributes.new && <span>New</span>}
                    <img
                     src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img.data.attributes.url} 
                     alt="" className="mainImg"></img>
                    <img 
                     src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url} 
                     alt="" className="secondImg"></img>
                </div>
                <h2>{item.attributes.title}</h2>
                <div className="prices">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.attributes.price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card