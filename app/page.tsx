"use client"

import Navbar from "./components/Header";



{/*    <button onClick={notify}>Notify!</button>
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Header';
   <ToastContainer />
   const notify = () => toast ("Wow so easy!");
   <Navbar />*/}

const page = () => {
  return (
    <div className=' w-full flex h-auto py-2'>
      <Navbar />
    </div>
  );
}

export default page;
