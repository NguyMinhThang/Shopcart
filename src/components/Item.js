import React from 'react';
import data from '../Data';
import Card from './Card';
function Item({handleClick}) {
    return ( 
       <div>
        {data.map((item)=>(<Card key={item.name} item={item} handleClick={handleClick}/>))}
       </div>
     );
}

export default Item;