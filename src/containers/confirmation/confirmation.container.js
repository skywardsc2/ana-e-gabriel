import { Grid, Box, Heading, Text } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button } from '@chakra-ui/button'

const ConfirmationContainer = () => {
  const data = useStaticQuery(graphql`
    {
      container: markdownRemark(
        fileAbsolutePath: {
          regex: "/ana-e-gabriel/src/content/confirmation.*/"
        }
      ) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  const handleConfirmationClick = () => {
    console.log('Clicked')
  }

  return (
    <Grid
      pos='relative'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height={{ base: '60vh', lg: '80vh' }}
      py={{ base: '4', lg: '10' }}
    >
      <Box
        pos='absolute'
        bottom='10%'
        right={{ base: '-300px', md: '-150px', lg: '0' }}
        transform={{ base: 'none', lg: 'translate(-20%, 0)' }}
        height={{ base: '300px', lg: '400px ' }}
      >
        <StaticImage
          src={'../../img/splashes/ConfirmarBottom.png'}
          alt=''
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </Box>
      <Box
        pos='absolute'
        top='-10%'
        left={{ base: '-300px', md: '-150px', lg: '0' }}
        transform={{ base: 'none', lg: 'translate(20%, 0)' }}
        height={{ base: '300px', lg: '400px ' }}
      >
        <StaticImage
          src={'../../img/splashes/ConfirmarTop.png'}
          alt=''
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </Box>
      <Grid
        justifyItems='center'
        width='100%'
        maxWidth='1000px'
        rowGap='8'
        zIndex='2'
      >
        <Heading
          as='h2'
          fontSize={{
            base: '6xl',
            md: '8xl'
          }}
          fontWeight='500'
          lineHeight='0.8'
          width='100%'
          textAlign='center'
        >
          {data.container.frontmatter.title}
        </Heading>
        <Text
          textAlign='center'
          dangerouslySetInnerHTML={{ __html: data.container.html }}
        ></Text>
        <Button size={'lg'} onClick={() => handleConfirmationClick()}>
          Confirmar Presença
        </Button>
      </Grid>
    </Grid>
  )
}

export default ConfirmationContainer
