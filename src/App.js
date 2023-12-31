
import './App.css';
import React,{useState}from 'react';
import { productContext } from './productcontext';
import ProductDetails from './productdetails';
import BoostrapForms from './boostapform';


function App() {
  const[productName,setProductname]=useState('')
  const[productPrice,setProductprice]=useState('')
  const[productQuantity,setProductquantity]=useState('')
  const[productDes,setProductDes]=useState('')
  const[showProduct,setShowproduct]=useState(false)
  return (
    <div className="App">
      <productContext.Provider value={{productName,setProductname,productPrice,setProductprice,productQuantity,setProductquantity,productDes,setProductDes,setShowproduct}}>
        {
          showProduct? <ProductDetails/>:<BoostrapForms />
        }

      </productContext.Provider>
     
    </div>
  );
}

export default App;