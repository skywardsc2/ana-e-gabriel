import { Flex, Grid, Heading } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollFlex = ScrollElement(Flex)

const HeroHeaderContainer = ({ containerProps }) => {
  return (
    <ScrollFlex
      justify='center'
      align='center'
      width='100%'
      marginTop={'10'}
      {...containerProps}
    >
      <Grid
        pos='relative'
        justifyContent='center'
        width='100%'
        overflowX='hidden'
      >
        <Flex
          pos='relative'
          width={['800px', '800px', '1200px', '100%']}
          height={['50vh', '50vh', '90vh', '90vh']}
          transform={['none', 'none']}
        >
          <StaticImage
            src='../../img/photos/watercolor-cover.png'
            alt=''
            style={{ width: '100%', height: '100%' }}
            imgStyle={{
              objectFit: 'contain'
            }}
          />
        </Flex>
        <Heading
          as='h1'
          width='fit-content'
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          fontSize={['7xl', '7xl', '9xl', '9xl']}
          fontWeight={'400'}
          color='yellow.50'
          zIndex='5'
        >
          {'Ana & Gabriel'}
        </Heading>
      </Grid>
    </ScrollFlex>
  )
}

export default HeroHeaderContainer
