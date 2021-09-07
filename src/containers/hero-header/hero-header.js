import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const HeroHeaderContainer = ({ title, image }) => {
  return (
    <Flex justify='center' align='center' width='100%' marginTop={'10'}>
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
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt=''
            style={{ width: '100%', height: '100%' }}
            imgStyle={{
              objectFit: 'contain'
            }}
          />
          {/* <Box
            pos='absolute'
            width='50%'
            height='50%'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            bgGradient='radial(rgba(0, 0, 0, 0.25) 10%, rgba(0, 0, 0, 0) 80%)'
            zIndex='3'
          ></Box> */}
        </Flex>

        <Heading
          as='h1'
          width='fit-content'
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          fontSize={['7xl', '7xl', '9xl', '9xl']}
          // size='4xl'
          fontWeight={'400'}
          color='yellow.50'
          zIndex='5'
        >
          {title}
        </Heading>
      </Grid>
    </Flex>
  )
}

export default HeroHeaderContainer
