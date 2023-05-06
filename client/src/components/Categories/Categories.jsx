import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="/img/women.jpeg"
            alt=""
          />
          <button>
            <Link className="link" to="/products/clothing">
              <span>Women</span>
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="/img/tops.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/tops" className="link">
            <span>Tops</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          {" "}
          <img
            src="/img/newIn.jpeg"
            alt=""
          />
          <button>
            <Link to="/products/new" className="link">
            <span>New In</span>
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="/img/bottoms.jpeg"
                alt=""
              />
              <button>
                <Link to="/products/bottoms" className="link">
                <span>Bottoms</span>
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              {" "}
              <img
                src="/img/dresses.jpeg"
                alt=""
              />
              <button>
                <Link to="/products/Dresses" className="link">
                <span>Dresses</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="/img/accessories.jpg"
            alt=""
          />
          <button>
            <Link to="/products/Accessories" className="link">
            <span>Accessories</span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;