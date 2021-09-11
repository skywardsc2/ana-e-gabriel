import { Flex, Heading } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const FooterContainer = () => {
  return (
    <Flex pos='relative' alignItems='flex-end' width='100%'>
      <StaticImage
        src='../../img/splashes/Footer.png'
        alt=''
        style={{ width: '100%', minHeight: '160px' }}
      />
      <Heading
        as='h1'
        size='4xl'
        fontWeight='normal'
        pos='absolute'
        right='10'
        color='yellow.50'
      >
        {`Ana & Gabriel`}
      </Heading>
    </Flex>
  )
}

export default FooterContainer
