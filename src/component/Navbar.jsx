import React, { useContext,useEffect,useState } from 'react'
import {nameContext} from './Landing'
import logo from "./BoA_logo.png";

const Navbar = () => {

    const [name, setname] = useContext(nameContext)
    const [data , setData]=useState([])

    // const handleClick7=async()=>{
    //   await fetch(`http://localhost:8080/api/${name}7`)
    //   .then(response => response.json())
    //   .then(data=>setData(data))
     
    // }
    // const handleClick30=async()=>{
    //   await fetch(`http://localhost:8080/api/${name}30`)
    //   .then(response => response.json())
    //   .then(data=>setData(data))
    
    // }
    
    // const handleClickall=async()=>{
    //   await fetch(`http://localhost:8080/api/${name}`)
    //   .then(response => response.json())
    //   .then(data=>setData(data))
     
    // }
    



    useEffect(() => {

        // handleClickall()
        console.log(name);
        console.log(data)
        console.log(`http://localhost:8080/api/${name}7`)
    }, [name]);

    const handleClickBranch=()=>{
        setname("branch")

    }

    const handleClickDistrict=()=>{
        setname("district")
        
    }


  return (
    <div className="max-w-4xl container mx-auto  px-10 my-4 py-6 bg-white rounded-lg shadow-md"> 
                <div className="flex justify-between items-center">
                    <img src={logo} alt="" className='w-1/4' />

                    <div className="board">
                    <div className="duration">
                        <button onClick={handleClickBranch} >Branch</button>
                        <button onClick={handleClickDistrict} >District</button>
                        
                    </div>
                    </div>
                   
            </div>

            <div className="mt-2">
                <span className="text-2xl text-gray-700 font-bold hover:text-gray-600">
                </span>
            </div>
    </div>
  )
}

export default Navbar