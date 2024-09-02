import React from 'react'
import { Total, TotalLabel } from './TotalCases.styles'

const TotalCases = () => {
  return (
   <Total>
    <TotalLabel>Bike theft cases : <strong className='text-red-500'>45</strong></TotalLabel>
     </Total>
  )
}

export default TotalCases