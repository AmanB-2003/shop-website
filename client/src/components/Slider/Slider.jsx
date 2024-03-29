import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    // const data = [
    //     "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    //     "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    // ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    }

    return (
        <div className="slider">
            <div className="container" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
                <img src="/img/cover-gardening2.jpg" alt="" ></img>
                {/* <img src={data[1]} alt="" ></img> */}
                <img src="/img/cover-gardening.jpg" alt="" ></img>
                <img src="/img/cover-dress.jpg" alt="" ></img>
            </div>

            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <WestOutlinedIcon />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <EastOutlinedIcon />
                </div>
            </div>

            <div className="collection">
                <button>View Collection</button>
            </div>
        </div>
    )
}

export default Slider