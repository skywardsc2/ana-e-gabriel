import { HamburgerIcon } from '@chakra-ui/icons'
import { Flex, Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import NavMenuComponent from '../../components/nav-menu/nav-menu.component'

// @ts-ignore
import Logo from '../../img/svg/Logo.inline.svg'

const TopbarContainer = ({ menuItems }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const toggleMenuVisible = () => {
    const isVisible = isMenuVisible
    setIsMenuVisible(!isVisible)
  }

  return (
    <Flex
      align='center'
      direction='column'
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
        maxWidth='1200px'
        px={['4', '12']}
        justifyContent='space-between'
        alignItems='center'
        autoFlow='column'
      >
        <Logo width='80px' height='95%' />
        <HamburgerIcon
          width='32px'
          height='38px'
          color='secondary'
          display={{ base: 'block', lg: 'none' }}
          onClick={() => toggleMenuVisible()}
        />
        <Grid
          justifyContent='flex-end'
          gap='5'
          autoFlow='column'
          display={{ base: 'none', lg: 'grid' }}
        >
          {Object.values(menuItems).map((item, index) => {
            return (
              <Flex
                key={index}
                justify='center'
                align='center'
                textAlign='center'
                width='100px'
                height='100%'
                paddingBottom='4px'
                cursor='pointer'
                transition='all 200ms ease-in-out'
                _hover={{
                  paddingBottom: '0px',
                  borderBottom: '4px solid',
                  borderColor: 'primary'
                }}
              >
                {item.text}
              </Flex>
            )
          })}
        </Grid>
      </Grid>
      <NavMenuComponent
        isVisible={isMenuVisible}
        menuItems={menuItems}
        gridProps={{ alignSelf: 'flex-end', zIndex: '9' }}
      />
    </Flex>
  )
}

export default TopbarContainer
