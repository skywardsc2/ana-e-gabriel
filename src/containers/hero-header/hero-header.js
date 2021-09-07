import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const HeroHeaderContainer = ({ title, image }) => {
  return (
    <Flex justify='center' align='center' width='100%' marginTop={'16'}>
      <Grid
        pos='relative'
        justifyContent='center'
        width='100%'
        overflowX='hidden'
      >
        <Heading
          as='h1'
          width='fit-content'
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          fontSize={['5xl', '7xl', '9xl']}
          fontWeight={'400'}
          color='yellow.50'
          zIndex='1'
        >
          {title}
        </Heading>
        <Flex
          width={['800px', '100%']}
          height={['50vh', '100vh']}
          transform={['none', 'none']}
        >
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt=''
            style={{ width: '100%', height: '100%' }}
            imgStyle={{
              objectFit: 'contain'
            }}
          />
        </Flex>
      </Grid>
    </Flex>
  )
}

export default HeroHeaderContainer
