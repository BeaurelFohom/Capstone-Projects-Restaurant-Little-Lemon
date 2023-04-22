import './App.css';
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import BookingPage from './Pages/BookingPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
