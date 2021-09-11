import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Grid, Text } from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import CardComponent from '../card/card.component'

const GiftCardComponent = ({
  imageData,
  title,
  price,
  handleButtonClick,
  ...props
}) => {
  const image = getImage(imageData)

  return (
    <CardComponent
      {...props}
      height='100%'
      alignItems='flex-start'
      p='0'
      overflow='hidden'
    >
      <Grid
        width='100%'
        height={'100%'}
        gridTemplateColumns={{ base: '1fr' }}
        templateRows='auto 1fr'
        alignContent='flex-start'
        transition='all 250ms ease-in-out'
      >
        <Box width='100%' height={{ base: '150px' }}>
          <GatsbyImage
            image={image}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Grid
          templateColumns='1fr'
          height='100%'
          templateRows='1fr auto auto'
          p={{ base: '2', lg: '4' }}
        >
          <Text fontSize='xl' textAlign='center' fontWeight='600'>
            {title}
          </Text>
          <Text width='100%' textAlign='center'>
            {`R$ ${price.toFixed(2).replace('.', ',')}`}
          </Text>
          <Flex width='100%' justify='center'>
            <Button size='md' onClick={handleButtonClick} variant='solid'>
              Comprar
            </Button>
          </Flex>
        </Grid>
      </Grid>
    </CardComponent>
  )
}

export default GiftCardComponent
