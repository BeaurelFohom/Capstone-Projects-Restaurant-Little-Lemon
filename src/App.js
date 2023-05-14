import './App.css';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import BookingPage from './Pages/BookingPage';
import HomePage from './Pages/HomePage';
import ConfirmedBooking from './Pages/ConfirmedBooking';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <HeroSection/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
