import React, { useState } from 'react'
import ListItems from './ListItems'
 const Product = () => {

    // const items=[{
    //     id:1,
    //     discountedPrice:350,
    // price:450,
    // title:"Item-1",
    // thumnail:"tshirt.jpg"
    // },
    // {
    //     id:2,
    //     discountedPrice:550,
    //     price:650,
    //     title:"Item-2",
    //     thumnail:"being.jpg"
    //   },
    //   {
    //       id:3,
    //       discountedPrice:409,
    //       price:550,
    //       title:"Item-3",
    //       thumnail:"jacket.webp"
    //     },
    //   {
    //       id:4,
    //       discountedPrice:999,
    //       price:1199,
    //       title:"Item-4",
    //       thumnail:"Tshirt1.webp"
    //     },
    //   {
    //       id:5,
    //       discountedPrice:1999,
    //       price:2199,
    //       title:"Item-5",
    //       thumnail:"Tshirt2.webp"
    //     },
    //   {
    //       id:6,
    //       discountedPrice:899,
    //       price:799,
    //       title:"Item-6",
    //       thumnail:"Tshirt3.webp"
    //     }
        
      
    //   ]; 
        
      const [item1,setItem1] =useState({
          id:1,
          discountedPrice:350,
      price:450,
      title:"Item-1",
      thumnail:"tshirt.jpg"
      })
      const [item2,setItem2] =useState({
        id:2,
            discountedPrice:550,
             price:650,
             title:"Item-2",
             thumnail:"being.jpg"
      })
      const [item3,setItem3] =useState({
        id:3,
           discountedPrice:409,
           price:550,
           title:"Item-3",
           thumnail:"jacket.webp"
      })
      const [item4,setItem4] =useState({
              id:4,
              discountedPrice:999,
              price:1199,
              title:"Item-4",
              thumnail:"Tshirt1.webp"
      })
      const [item5,setItem5] =useState({
        id:5,
              discountedPrice:1999,
              price:2199,
              title:"Item-5",
              thumnail:"Tshirt2.webp"
      })
      const [item6,setItem6] =useState({
        id:6,
          discountedPrice:899,
          price:799,
          title:"Item-6",
          thumnail:"Tshirt3.webp"
      })


      const [title,setTitle]= useState("");
      const [price,setPrice]= useState(0);
      const [discountedPrice,setDiscountedPrice]= useState(0);
      const [thumbnail,setThumbnail]= useState("");

      const handleTitle =(event)=>{
        // console.log(event.target.value);
        setTitle(event.target.value);
      }

      const handlePrice =(event)=>{
        setPrice(event.target.value)
      }
      const handleDiscountedPrice =(event)=>{
        setDiscountedPrice(event.target.value)
      }
      const handleThumbnail =(event)=>{
        setThumbnail(event.target.value)
      }

      const handleFormSubmit =(event)=>{
          event.preventDefault();
          console.log({
            title:title,
            price:price,
            discountedPrice:discountedPrice,
            thumbnail:thumbnail

          })
          setItem1({
            title,
            price,
            discountedPrice,
            thumbnail
          })
      }

  return (
    <div className='product-list'>
    <div className='product-list-wrapper'>
    

    <div className={'product-wrapper'}>
      <div className={"form"}>
        <form onSubmit={handleFormSubmit}>
          <h2>Item Card details:</h2>
          
          <div className="input-field">
         <label htmlFor="title">Title</label>
          <input 
          type="text"
          placeholder='Enter title' 
          value ={title}
          onChange={handleTitle}
         required />
          </div>

          <div className="input-field">
         <label htmlFor="price">Price</label>
          <input 
          type="number"
          placeholder='Enter Price' 
          value ={price}
          onChange={handlePrice}
          required />
          </div>
          <div className="input-field">
         <label htmlFor="discountPrice">Discount Price</label>
          <input 
          type="number"
          placeholder='Discounted Price' 
          value ={discountedPrice}
          onChange={handleDiscountedPrice}
          required />
          </div>
          <div className="input-field">
         <label htmlFor="thumbnail">Thumbnail</label>
          <input 
          type="text"
          placeholder='Enter thumbnail name' 
          value ={thumbnail}
          onChange={handleThumbnail}
          required />
          </div>
          <div className={"btn-form"}>
            <button type="submit" >Update</button>
          </div>
        </form>
      </div>
      <div>
         <ListItems data={item1}/>
         <ListItems data={item2}/>
         <ListItems data={item3}/>
         <ListItems data={item4}/>
         <ListItems data={item5}/>
         <ListItems data={item6}/>
      </div>
    </div>
    
    </div>
    </div>

    
  )
}

export default Product