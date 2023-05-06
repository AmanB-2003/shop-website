import React, { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { useSelector } from "react-redux";
import Cart from '../Cart/Cart';
import '../../fonts/goldoni.regular.otf';


function Navbar(){
    const [open, setOpen] = useState(false);
    const products = useSelector(state=>state.cart.products);

    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                    </div>
                    <div className="item">
                        <Link className='link' to="products/tops">Women</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="products/2">Trending</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="products/3">Sale</Link>
                    </div>
                </div>

                <div className="center">
                    <Link className='link' to="/">DAMBRIE</Link>
                </div>

                <div className="right">
                    <div className="item">
                        <Link className='link' to="/">Home</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">About</Link>
                    </div>
                    <div className="item">
                        <Link className='link' to="/">Blog</Link>
                    </div>
                    <div className="icons">
                        <SearchIcon />
                        <Link className='link' to="/user"><PersonOutlineOutlined /></Link>
                        <FavoriteBorderOutlinedIcon />
                        <div className="cartIcon" onClick={()=> setOpen(!open)}  >
                            <ShoppingCartOutlinedIcon />
                            <span>{products.length}</span>
                        </div>
                    </div>
                </div>
            </div>
            {open && <Cart />}
        </div>
    )
}

export default Navbar;