import React from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import './CategoryItem.scss'
//import { eveentCategory } from '../../data'

import { Link } from 'react-router-dom'






const CategoryItem = () => {
  const [category,setCategory] = useState([]);

  useEffect(() =>{
    const fetch = async () => {
      try{
        const { data } = await axios.get('http://localhost:3000/category');
        setCategory(data);
      }
      catch (err){
        console.error(err);
      }
    };

    fetch();
  }, []);
  return (
    <div className='categoryitemContainer'>
      {category.map(category=>{
        return(
          <div className="categoryItem" key={category.id}>
            <Link to=""><img src={category.img} alt="" /></Link>
            <h5>{category.title}</h5>
          </div>
        )
      })}
    </div>
  )
}

export default CategoryItem