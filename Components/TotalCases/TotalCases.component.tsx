import React from 'react'
import { Total, TotalCount, TotalLabel } from './TotalCases.styles'

const TotalCases = () => {
  return (
   <Total>
    <TotalLabel>bike theft cases :</TotalLabel>
    <TotalCount>43</TotalCount>
    </Total>
  )
}

export default TotalCases