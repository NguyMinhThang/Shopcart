import React, { useState, useEffect } from "react";
import './Cart.css'
  const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    
  };
  
  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans); 
  };
  const handleSubmitAO=(id,amount)=>{
    let tong=0;
    cart.map((item)=>(tong += item.amount))
    if(tong>=10){
      console.log('Success')
      const arr = cart.filter((item) => item.id !== id);
      setCart(arr);
      const myJson=JSON.stringify(arr);
      document.getElementById("demo").innerHTML =myJson;
    }
    else{
      console.log("fail")
    }
    cart.forEach(item=>{
      if(item.amount<=0){
          alert('false')
      }
    })
  }
  const handleClear=()=>{
    document.getElementById("demo").innerHTML=''
  }
  ///
  const handleSubmitArr=()=>{ 
   const Arr = cart.map((item)=>(
      {
          name:item.name,
          count:item.amount
      }
      ))
      const myArr=JSON.stringify(Arr);
      document.getElementById("demo").innerHTML =myArr;
  }
  const handleSubmitNum=()=>{
    const num = cart.map((item)=>(
      {
          count:item.amount
      }
      ))
      const myNum=JSON.stringify(num);
      document.getElementById("demo").innerHTML =myNum;
  }

  ///
  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
    {cart.map((item) => (
      <div className="cart_box" key={item.id}>
        <div className="cart_img">
          <img src={item.image} alt="" />
          <p>{item.name}</p>
        </div>
        <div>
          <button onClick={() => handleChange(item, 1)}>+</button>
          <button>{item.amount}</button>
          <button onClick={() => handleChange(item, -1)}>-</button>
        </div>
        <div>
          <span>{item.price}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      </div>
    ))}
    <div className="total">
      <span>Total Price of your Cart</span>
      <span>Rs - {price}</span>
    </div>
    <button id="submit" onClick={handleSubmitAO} type="submit">SubmitArrObj</button>
    <p id="demo"></p>
    <button id="submitA" onClick={handleSubmitArr} type="submit">SubmitArr</button>
    <button id="submitA" onClick={handleSubmitNum} type="submit">SubmitNum</button>
    <button id="clear" onClick={handleClear}>Clear</button>
  </article>
  );
};  

export default Cart;