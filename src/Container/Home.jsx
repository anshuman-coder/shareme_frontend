import React, { useState, useRef,useEffect } from 'react'
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Link, Route, Routes } from 'react-router-dom';


// importing the components files
import { Sidebar, UserProfile } from '../Components';
import { client } from '../client';

//importing from containers
import Pins from './Pins';

// importing the assets
import logo from '../assets/logo.png';


const Home = () => {
  return (
    <div>
      Home
    </div>
  )
}

export default Home