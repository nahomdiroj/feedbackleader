import React, { useContext,useEffect,useState } from 'react'
import {nameContext} from './Landing'
const Board = () => {

    const [name, setname] = useContext(nameContext)
    const [data, setData] = useState([])
    const [search, setSearch] = useState("")


    const handleClick7=async()=>{
      await fetch(`http://localhost:8080/api/${name}7`)
      .then(response => response.json())
      .then(data=>setData(data))
     
    }
    const handleClick30=async()=>{
      await fetch(`http://localhost:8080/api/${name}30`)
      .then(response => response.json())
      .then(data=>setData(data))
    
    }
    
    const handleClickall=async()=>{
      await fetch(`http://localhost:8080/api/${name}`)
      .then(response => response.json())
      .then(data=>setData(data))
     
    }

    function order(data){
        return data.sort((a, b) => b.score - a.score);
      }
      
    
    useEffect(() => {
        handleClickall()
    }, [name])
    
    

  return (
    <section
    style={{
    //   backgroundImage: `url(${bg})`,
    //   backgroundRepeat: "no-repeat",
    //   backgroundPosition: "right",
    }}
  >
    <div className="max-w-4xl container mx-auto  px-10 my-4 py-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">Bank of Abisiniya</span>
        <div className='py-2'>
       
        <input type="text" id="search" placeholder='search' name="search" onChange={(e)=>setSearch(e.target.value)} className='border rounded-lg border-gray-600 px-2'/>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-2xl text-gray-700 font-bold hover:text-gray-600">
      
       
        </span>

          
        
        <div className="mt-3 flex justify-end">

        <div className="board">
        <div className="duration">
            <button onClick={handleClick7} data-id='7'>7 Days</button>
            <button onClick={handleClick30} data-id='30'>30 Days</button>
            <button onClick={handleClickall} data-id='0'>All-Time</button>
        </div>
        </div>

              
        </div>
        
        <div id="profile">
             <>
            {
                order(data)?.filter((item)=>{
                    return search==''?item:item.name.includes(search.toUpperCase())
                }).map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                      
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                {/* <span>{value.location}</span> */}
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Board