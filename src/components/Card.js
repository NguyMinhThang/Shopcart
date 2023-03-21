import React from 'react';
import "./Card.css"
function Card({item,handleClick}) {
    const {name,cell,gps,infrared,wifi,image,price}=item;
    return (<div className='cards'>
        <div className='image-box'>
            <img src={image} alt="true"></img>
        </div>
        <div className='details'>
            <p>{name}</p>
            <p>{cell}</p>
            <p>{gps}</p>
            <p>{infrared}</p>
            <p>{wifi}</p>
            <p>Price - {price}$</p>
        </div>
        <button onClick={()=>handleClick(item)}>Add to Cards</button>
    </div> );
}

export default Card;