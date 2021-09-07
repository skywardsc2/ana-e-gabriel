import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import React from 'react'

import Logo from '../../img/svg/Logo.inline.svg'

const TopbarContainer = () => {
  return (
    <Flex
      justify='center'
      align='center'
      width='100%'
      height={['16']}
      py='2'
      backgroundColor='white'
      pos='fixed'
      top='0'
      zIndex='10'
    >
      <Grid
        width='100%'
        maxWidth='1000px'
        px={['4', '12']}
        justifyContent='space-between'
        alignItems='center'
        autoFlow='column'
      >
        <Logo width='80px' height='95%' />
        <HamburgerIcon width='32px' height='38px' color='secondary' />
        {/* <Grid justifyContent='flex-end' gap='2' autoFlow='column'>
            </Grid> */}
      </Grid>
    </Flex>
  )
}

export default TopbarContainer
