import { Flex, Grid } from '@chakra-ui/layout'
import React from 'react'
import Scroll from 'react-scroll'

const scroller = Scroll.scroller

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
      {Object.keys(menuItems).map((key, index) => {
        return (
          <Flex
            key={index}
            p='4'
            width='100px'
            height='100%'
            borderColor='secondary'
            paddingRight='4px'
            cursor='pointer'
            onClick={() =>
              scroller.scrollTo(key, {
                duration: 500,
                smooth: true,
                offset: -80
              })
            }
            _active={{
              paddingRight: '0',
              borderRight: '4px',
              borderColor: 'primary'
            }}
          >
            {menuItems[key].text}
          </Flex>
        )
      })}
    </Grid>
  )
}

export default NavMenuComponent
