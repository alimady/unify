 import React from 'react'
import BikeCaseItem from '../../Components/BikeCaseItem/BikeCaseItem.components'
 
 const BikeList = () => {
   return (
<div className=' grid  md:grid-cols-2 lg:grid-cols-3  gap-4'>
 <BikeCaseItem/>
 <BikeCaseItem/>
 <BikeCaseItem/>

</div>
   )
 }
 
 export default BikeList