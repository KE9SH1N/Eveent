import React from 'react'
import './Services.scss'

import { useState,useEffect } from 'react'
import axios from 'axios';

import { Link } from 'react-router-dom'

const Services = () => {

  const [service, setService] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('http://localhost:3000/services');
        setService(data);
      }
      catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  
  return (
    <div>
      <div className='servicesContainer'>
        <div className='servicesContents'>
          <h4>Our services</h4>
          <div className='twostackitemContainer'>
            {/*<div className="twostackitemContents" >
              <div className="leftItem">
                <h5></h5>
                <Link to=""><img src="" alt="" /></Link>
              </div>
            </div>*/}
          </div>

          <div className='threestackitemContainer'>
            <div className="threestackitemContents">
              {service.map(service => {
                return (
                  <div className="leftItem" key={service.id}>
                    <h5>{service.title}</h5>
                    <Link to=""><img src={service.img} alt="" /></Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        </div>
    </div>
    
  )
}

export default Services