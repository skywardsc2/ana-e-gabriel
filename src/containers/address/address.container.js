import { Grid, Box, Heading, Text } from '@chakra-ui/layout'
import { Flex } from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollFlex = ScrollElement(Flex)

const AddressContainer = ({ containerProps }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fields: { slug: { eq: "/address/" } }) {
        frontmatter {
          title
          text
        }
        html
      }
    }
  `)

  return (
    <ScrollFlex
      pos='relative'
      justify='center'
      align='center'
      width='100%'
      my={['12', '20']}
      {...containerProps}
    >
      <Grid
        justifyContent='center'
        width='100%'
        maxWidth='1000px'
        rowGap='8'
        overflow='hidden'
      >
        <Box width='100%'>
          <Heading
            as='h2'
            width='100%'
            textAlign='center'
            fontSize={{
              base: '6xl',
              md: '8xl'
            }}
            fontWeight='500'
            zIndex='5'
          >
            {data.markdownRemark.frontmatter.title}
          </Heading>
          <Box
            pos='absolute'
            top='80px'
            left='50%'
            transform='translate(-50%, -50%)'
            zIndex='-1'
          >
            <StaticImage
              src={'../../img/splashes/Endereco.png'}
              alt=''
              style={{ width: '1000px' }}
            />
          </Box>
        </Box>
        <Text width='100%' px='8' zIndex='9' textAlign='center'>
          {data.markdownRemark.frontmatter.text}
        </Text>
        <Box
          pos='relative'
          width={{ base: '100%' }}
          height={{ base: '50vh', lg: '70vh' }}
          transform={{ base: 'scale(180%)', md: 'none' }}
          transformOrigin={'center'}
        >
          <StaticImage
            src={'../../img/photos/watercolor-casarao-photo.png'}
            alt=''
            style={{
              width: '100%',
              height: '100%'
            }}
            imgStyle={{
              objectFit: 'contain'
            }}
          />
        </Box>
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          rowGap='6'
          columnGap='4'
          px='4'
        >
          <Box width='100%'>
            <iframe
              title='Mapa do Local'
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.376895560173!2d-38.48649508517955!3d-12.818904490956184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716127f775ea43d%3A0xaf4123a1e1e549f5!2sCasar%C3%A3o%20do%20Alto!5e0!3m2!1spt-BR!2sbr!4v1631224523866!5m2!1spt-BR!2sbr'
              width='100%'
              height='350px'
              style={{ border: 0 }}
              allowFullScreen={true}
              loading='lazy'
            ></iframe>
          </Box>
          <Flex
            width='100%'
            height='100%'
            direction='column'
            justify='center'
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          >
            {/* <Text width='100%'>{text}</Text> */}
          </Flex>
        </Grid>
      </Grid>
    </ScrollFlex>
  )
}

export default AddressContainer
