import { Grid, Box, Heading, Text } from '@chakra-ui/layout'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

// import watercolorSplash from '../../img/splashes/Bem-vindos.png'

const OurStoryContainer = ({ title, text }) => {
  return (
    <Grid justifyContent='center' width='100%' marginBottom={['8', '20']}>
      <Grid justifyItems='center' width='100%' maxWidth='1000px' rowGap='4'>
        <Box pos='relative' top='25%'>
          <StaticImage src={'../../img/splashes/Bem-Vindos.png'} alt='' />
        </Box>
        <Heading as='h2' fontSize={['5xl', '6xl', '8xl']} fontWeight='500'>
          {title}
        </Heading>
        <Text width='100%' px='8'>
          {text}
        </Text>
      </Grid>
    </Grid>
  )
}

export default OurStoryContainer
