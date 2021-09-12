import { Flex, Grid } from '@chakra-ui/layout'
import React from 'react'

const NavMenuComponent = ({ menuItems, isVisible, gridProps }) => {
  return (
    <Grid
      display={isVisible ? 'grid' : 'none'}
      width='100px'
      height={'auto'}
      templateColumns='1fr'
      backgroundColor='white'
      {...gridProps}
    >
      {menuItems.map((item) => {
        return (
          <Flex
            p='4'
            width='100px'
            height='100%'
            borderColor='secondary'
            paddingRight='4px'
            _active={{
              paddingRight: '0',
              borderRight: '4px',
              borderColor: 'primary'
            }}
          >
            {item.text}
          </Flex>
        )
      })}
    </Grid>
  )
}

export default NavMenuComponent
