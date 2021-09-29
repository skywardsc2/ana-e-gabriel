import { Grid, Box, Heading, Text } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Button } from '@chakra-ui/button'
import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollGrid = ScrollElement(Grid)

const ConfirmationContainer = ({ containerProps }) => {
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

  const handleConfirmationClick = () => {}

  return (
    <ScrollGrid
      pos='relative'
      justifyContent='center'
      alignItems='center'
      width='100%'
      height={{ base: '60vh', lg: '80vh' }}
      py={{ base: '4', lg: '10' }}
      {...containerProps}
    >
      <Box
        pos='absolute'
        bottom='0'
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
          as='div'
          textAlign='center'
          dangerouslySetInnerHTML={{ __html: data.container.html }}
        ></Text>
        <Button
          as='a'
          href='https://docs.google.com/forms/d/e/1FAIpQLSdUWtLkXhzyZA_pNpQl8hxLnqW5OuaVphQxtg0wqL3nhGP_Cg/viewform?usp=sf_link'
          rel='noopener'
          size={'lg'}
          onClick={() => handleConfirmationClick()}
        >
          Confirmar Presença
        </Button>
      </Grid>
    </ScrollGrid>
  )
}

export default ConfirmationContainer
