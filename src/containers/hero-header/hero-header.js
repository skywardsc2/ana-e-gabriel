import { Box, Flex, Grid, Heading } from '@chakra-ui/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'

const HeroHeaderContainer = ({ title, image }) => {
  return (
    <Flex justify='center' align='center' width='100%'>
      <Grid justify='center' width='100%'>
        <Heading
          as='h1'
          pos='absolute'
          top='50%'
          left='50%'
          transform='translate(-50%, -50%)'
          fontSize={['2xl', '5xl']}
          color='yellow.50'
          zIndex='1'
        >
          {title}
        </Heading>
        <Box width={['800px', '100%']} height={['100vh']}>
          <GatsbyImage
            image={image.childImageSharp.gatsbyImageData}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
      </Grid>
    </Flex>
  )
}

export default HeroHeaderContainer
