import React from 'react'
import { Total, TotalLabel } from './TotalCases.styles'
import { GetStolenCount } from '../../app/Api'

const TotalCases = () => {
  const {count} =GetStolenCount()
  return (
   <Total>
    <TotalLabel>Bike theft cases : <strong className='text-red-500'>{count}</strong></TotalLabel>
     </Total>
  )
}

export default TotalCases