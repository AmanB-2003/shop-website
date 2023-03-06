import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import List from '../../components/List/List';
import useFetch from '../../hooks/useFetch';
import "./Products.scss";

function Products(){

    const catId = parseInt(useParams().id)
    const [maxPrice, setmaxPrice] = useState(5000);
    const [sort, setSort] = useState(null);
    const [selectedSubCats,setSelectedSubCats] = useState([]);

    //fetch available subcategories
    const {data, loading, error} = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
    console.log(data);

    const handleChange = (e) =>{
       const value = e.target.value;
       const isChecked = e.target.checked; 

       setSelectedSubCats(isChecked ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value))
    };

    console.log(selectedSubCats);

    return(
        <div className='products'>
            <div className='left'>
                <div className='filterItem'>
                    <h2>Product Categories</h2>
                    {data?.map(item => (<div className='inputItem' key={item.id}>
                        <input type="checkbox" id="1" value={item.id} onChange={handleChange}></input>
                        <label htmlFor={item.id}>{item.attributes.title}</label>
                    </div>) )}
                    
                </div>
                <div className='filterItem'>
                    <h2>Filter by Price</h2>
                    <div className='inputItem'>
                        <span>0</span>
                        <input type="range" min={0} max={5000} onChange={(e)=> setmaxPrice(e.target.value)} ></input>
                        <span>{maxPrice}</span>
                    </div>
                </div>
                <div className='filterItem'>
                    <h2>Sort by</h2>
                    <div className='inputItem'>
                        <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc") } ></input>
                        <label htmlFor='desc'>Price {"Lowest first"}</label>
                    </div>
                    <div className='inputItem'>
                        <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc") } ></input>
                        <label htmlFor='desc'>Price {"Highest first"}</label>
                    </div>
                </div>
            </div>
            <div className='right'>
            <img className="catImg"
            src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats}/>
            </div>
        </div>
    )
}

export default Products;