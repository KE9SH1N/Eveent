import React from 'react'
import './Cities.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Cities = () => {

    const [city,setCity]= useState([]);

    useEffect(() =>{
        const fetch = async () => {
            try{
                const { data } = await axios.get('http://localhost:3000/cities');
                setCity(data);
            }
            catch(err){
                console.error(err);
            }
        };
        fetch();
    },[]);
  return (
    <div className="cityContainer">
        <div className="cityContents">
            <h4>cities</h4>
            <div className="gridContainer">
                  {city.map(cities=>{
                        return(
                <div className="gridItem" key={cities.id}>
                    <h5>{cities.city}</h5>
                        <ul>
                            <li><span>{cities.hall}</span></li>
                            <li><span>{cities.resturant}</span></li>
                            <li><span>{cities.catering}</span></li>
                            <li><span>{cities.indoorStadium}</span></li>
                        </ul>
                </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Cities