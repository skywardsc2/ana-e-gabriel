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
      {Object.values(menuItems).map((item, index) => {
        return (
          <Flex
            key={index}
            p='4'
            width='100px'
            height='100%'
            borderColor='secondary'
            paddingRight='4px'
            cursor='pointer'
            onClick={() => item.elementRef?.current.scrollIntoView()}
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
