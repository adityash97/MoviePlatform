import {Navbar} from '../components/Navbar.js';
import { Outlet } from "react-router-dom";
import React,{useState} from 'react'

export function IndexLayout (props) {
    return (
      <>
        <div
          className="index-section border broder-warning vh-100"
        >
          <Navbar />
          <Outlet />
        </div>
        {/* All pages will be displayed here */}
        <footer className="text-white text-center">2023 Movie Platform</footer>
      </>
    );
}

