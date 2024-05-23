"use client"

import { ButtonSpinners } from "./animations/Button-Spinners";
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
    <div className=' w-full  h-auto py-2'>
      <ButtonSpinners />
      <Navbar />
    </div>
  );
}

export default page;
