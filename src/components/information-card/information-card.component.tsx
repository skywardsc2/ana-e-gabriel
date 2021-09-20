import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import CardComponent from '../card/card.component'

const InformationCardComponent = ({ imageData, title, textHTML, ...props }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const image = getImage(imageData)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <CardComponent {...props} height='auto'>
      <Grid gap='2' width='100%'>
        <Grid
          overflow='hidden'
          height={isExpanded ? 'auto' : props.height}
          templateAreas={{
            base: `'photo' 'title' 'text'`,
            lg: `'photo title' 'photo text'`
          }}
          gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr' }}
          templateRows={{ base: 'initial', lg: 'auto auto' }}
          width='100%'
          transition='all 250ms ease-in-out'
          gap='4'
        >
          <Box
            width='100%'
            height={{ base: '200px', lg: '100%' }}
            gridArea={'photo'}
          >
            <GatsbyImage
              image={image}
              alt=''
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Text fontSize='xl' width='100%' fontWeight='bold' textAlign='center'>
            {title}
          </Text>
          <Text
            as='div'
            width='100%'
            minHeight={{ base: '0', lg: '280px' }}
            dangerouslySetInnerHTML={{ __html: textHTML }}
          ></Text>
        </Grid>
        <Flex width='100%' justify='center'>
          {isExpanded ? (
            <ChevronUpIcon
              width='35px'
              height='35px'
              color='secondary'
              cursor='pointer'
              onClick={() => toggleExpanded()}
            />
          ) : (
            <ChevronDownIcon
              width='35px'
              height='35px'
              color='secondary'
              cursor='pointer'
              onClick={() => toggleExpanded()}
            />
          )}
        </Flex>
      </Grid>
    </CardComponent>
  )
}

export default InformationCardComponent
