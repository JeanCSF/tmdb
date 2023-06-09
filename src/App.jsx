import { Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Navbar />
       <Outlet />
      <Footer />
    </div>
  )
}
