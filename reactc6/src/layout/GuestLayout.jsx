import React from "react";
import { Link, Outlet } from "react-router-dom";
import {image} from "react"


export default function GuestLayout(){
return(
    <>
    
    <header className="p-3 flex justify-between items-center bg-gray-300">
        <span className="text-lg font-semibold">MO6</span>

        <nav className="flex items-center gap-2">
            <Link to = '/home'>Home</Link>
            <Link to = '/counter'>Counter</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/Todo'>Todo</Link>
            
        </nav>
    </header>
    <main>
    <div>
      
    </div>
    </main>
   
        
    <Outlet/>
    
    
    </>

)
}