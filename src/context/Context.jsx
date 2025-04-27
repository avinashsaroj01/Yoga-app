// import {createContext,useState,useContext} from 'react'

// const myContext = createContext()
// export const useMyContext=()=>{
//     return useContext(myContext)
// }
//  export const MyContextProvider=({children})=>{
//     const[cart,setcart]=useState([])
// const allObj={
//     cart,
//     setcart,
// };
// console.log(cart)
// return (<myContext.Provider value={allObj}>{children}</myContext.Provider>)}
import { createContext, useState, useContext } from 'react';

// Use PascalCase for context name (convention)
const MyContext = createContext();

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

export const MyContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // Consistent naming (setCart instead of setcart)
  
  // No need for separate allObj if you're just passing cart and setCart
  const value = {
    cart,
    setCart, // Make sure to use the same name when destructuring later
  };

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};