import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



import Landing from './Pages/Landing'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Search from './Pages/SearchResult'
import Details from './Pages/VenueDetails'
import Services from './Components/Services_Components/Services';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/searchresult">
          <Route index element={<Search />}/>
          <Route path='venuedetails/:detailsId' element={<Details/>} />
        </Route>

        <Route path="/services">
          <Route index element={<Services />} />
          <Route path='/servicesdetails/:/servicesId' element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
