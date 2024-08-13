import React, {  useState } from 'react'
import Board from './Board'
import Navbar from './Navbar'

export const nameContext = React.createContext();
const Landing = () => {

     
    const [name, setname] = useState("district");
  return (
    <>
    <nameContext.Provider value={[name, setname]}>
        <Navbar />
        <Board/>
    </nameContext.Provider>
        

    </>
  )
}

export default Landing