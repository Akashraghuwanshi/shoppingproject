import React from 'react'
import ListItems from './ListItems'
const Product = () => {
    const items=[{
        id:1,
        discountedPrice:350,
    price:450,
    title:"Item-1",
    thumnail:"tshirt.jpg"
    },
    {
        id:2,
        discountedPrice:550,
        price:650,
        title:"Item-2",
        thumnail:"being.jpg"
      },
      {
          id:3,
          discountedPrice:409,
          price:550,
          title:"Item-3",
          thumnail:"jacket.webp"
        },
      {
          id:4,
          discountedPrice:999,
          price:1199,
          title:"Item-4",
          thumnail:"Tshirt1.webp"
        },
      {
          id:5,
          discountedPrice:1999,
          price:2199,
          title:"Item-5",
          thumnail:"Tshirt2.webp"
        },
      {
          id:6,
          discountedPrice:899,
          price:799,
          title:"Item-6",
          thumnail:"Tshirt3.webp"
        }
        
      
    ]
  return (
    <div className='product-list'>
    <div className='product-list-wrapper'>
         <ListItems data={items[0]}/>
         <ListItems data={items[1]}/>
         <ListItems data={items[2]}/>
         <ListItems data={items[3]}/>
         <ListItems data={items[4]}/>
         <ListItems data={items[5]}/>
    </div>
    </div>

    
  )
}

export default Product