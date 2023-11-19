import React from 'react'
import AddToCardIcon from './AssetIcons/addtocard.webp'
const ListItems = ({data}) => {
  return (
    <div className='item-card'>
    <img className={'img-fluid'} src={`/Images/${data.thumnail}`} alt={data.title} />
  <div className={'item-card-information'}>
     <div className={'pricing'}>
          <span>Rs{data.discountedPrice}</span>
         <small>
           <strike>{data.price}</strike>
        </small>
    </div>
         <div className={'title'}>
         <a href="https://www.amazon.in" target="_blank" rel="noreferrer"><h3>{`${data.title}`}</h3> </a>
         </div>
  </div>
  <button className={'card-add'}> Add to Card
  <img src={AddToCardIcon} alt="addtocard" width ="35px" />
  </button>
  </div>
  )
}

export default ListItems