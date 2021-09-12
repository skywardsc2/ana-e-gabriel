import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import PixPopUpComponent from '../../components/pix-pop-up/pix-pop-up.component'

const PixPopUpContainer = ({ pixData, closeHandler }) => {
  return (
    <>
      <Box
        pos='fixed'
        width='100%'
        height='100%'
        zIndex='14'
        bgColor='cyan.900'
        opacity='0.15'
        onClick={() => closeHandler()}
      ></Box>
      <Box
        pos='fixed'
        width='90%'
        maxWidth='650px'
        zIndex='15'
        top='50%'
        left='50%'
        transform='translate(-50%, -50%)'
      >
        <PixPopUpComponent pixData={pixData} closeHandler={closeHandler} />
      </Box>
    </>
  )
}

export default PixPopUpContainer
