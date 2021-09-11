import { Grid } from '@chakra-ui/react'
import React from 'react'

const CardComponent = ({ children, ...props }) => {
  return (
    <Grid
      backgroundColor={'white'}
      boxShadow={'md'}
      p={'4'}
      borderRadius={'md'}
      width='100%'
      {...props}
    >
      {children}
    </Grid>
  )
}

export default CardComponent
