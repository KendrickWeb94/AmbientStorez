"use client"
import { Navbar } from "./components/Header";
import { Hero } from "./components/Hero";



{/*    <button onClick={notify}>Notify!</button>
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Header';
   <ToastContainer />
   const notify = () => toast ("Wow so easy!");
   <Navbar />*/}

const page = () => {
  return (
    <div className=' w-full inter h-auto'>
        <Hero />
    </div>
  );
}

export default page;

