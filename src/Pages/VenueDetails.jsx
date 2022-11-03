import React from 'react'

import Navbar from '../Layouts/Navbar'
import VenueDetailsHead from '../Components/VenueDetails_Components/VenueDetailsHead'
import VenueDetailsImage from '../Components/VenueDetails_Components/VenueDetailsImage'
import VenueDetailsDescription from '../Components/VenueDetails_Components/VenueDetailsDescription'
import VenueDetailsFacilities from '../Components/VenueDetails_Components/VenueDetailsFacilities'
import VenueReview from '../Components/VenueDetails_Components/VenueReview'
import Footer from '../Layouts/Footer'

import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const VenueDetails = () => {

  const { detailsId } = useParams();

  const [item, setItem] = useState([]);
  //const query = new URLSearchParams(useLocation().search);
  //console.log(detailsId);
  //const id = query.get(":id");

  //console.log(id);

  useEffect(() => {
    const fetch = async () => {
      try {
        const getItem = axios.get(`http://localhost:3000/item/${detailsId}`);
        const res = await axios.all([getItem]);
        setItem(res[0].data);
      }
      catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, []);
  return (
    <div>
      <Navbar/>
      <VenueDetailsHead data={item} />
      <VenueDetailsImage data={item} />
      <VenueDetailsDescription data = {item}/>
      <VenueDetailsFacilities data={item} />
      <VenueReview/>
      <Footer/>
    </div>
  )
}

export default VenueDetails