import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h2 className='content'>Movies DataBase</h2>
      <Outlet />
      <Footer />
    </div>
  )
}
