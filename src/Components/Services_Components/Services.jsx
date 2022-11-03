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
        const { getService } = await axios.get('http://localhost:3000/services');
        const res = await axios.all([getService]);
        setService(res[0].data);
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
        <h4>Our services</h4>
          <div className='twostackitemContainer'>
            <div className="twostackitemContents" >
              <div className="leftItem">
                <h5></h5>
                <Link to=""><img src="" alt="" /></Link>
              </div>
            </div>
          </div>

          <div className='threestackitemContainer'>
            <div className="threestackitemContents">
              <div className="leftItem">
                <h5>Catering <br /> Services</h5>
                <Link to=""><img src="" alt="" /></Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    
  )
}

export default Services