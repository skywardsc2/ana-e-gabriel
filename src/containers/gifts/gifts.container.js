import { Grid, Box, Heading } from '@chakra-ui/layout'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import CardComponent from '../../components/card/card.component'
import GiftCardComponent from '../../components/gift-card/gift-card.component'

import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollFlex = ScrollElement(Flex)

const GiftsContainer = ({ onComprarClick, containerProps }) => {
  const data = useStaticQuery(graphql`
    {
      container: markdownRemark(fields: { slug: { eq: "/gifts/" } }) {
        fields {
          slug
        }
        frontmatter {
          title
          version
          key
          name
          city
          transactionId
          cep
        }
      }
      cards: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/ana-e-gabriel/src/content/gifts/.*/" }
        }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            price
          }
        }
      }
    }
  `)

  const { title, ...pixData } = data.container.frontmatter

  const sortedCards = data.cards.nodes.sort((a, b) =>
    a.frontmatter.title
      .toString()
      .localeCompare(b.frontmatter.title.toString(), 'en', { numeric: true })
  )

  const cardRows = []
  const maxCardsPerRow = 9
  for (let i = 0, j = sortedCards.length; i < j; i += maxCardsPerRow) {
    cardRows.push(sortedCards.slice(i, i + maxCardsPerRow))
  }

  const getPixMessage = (product) => {
    const maxLength = 30
    // return 'x'.repeat(maxLength)
    return product.substring(0, maxLength)
  }

  const getCardRow = (cards) => {
    const c = []
    cards.forEach((card, index) => {
      c.push(
        <GiftCardComponent
          key={index}
          imageData={card.frontmatter.image}
          title={card.frontmatter.title}
          price={card.frontmatter.price}
          handleButtonClick={() =>
            onComprarClick({
              ...pixData,
              value: card.frontmatter.price,
              message: getPixMessage(card.frontmatter.title)
            })
          }
        />
      )
    })
    return c
  }

  const getScrollableCardRows = (rows) => {
    const r = []
    rows.forEach((row, index) => {
      r.push(
        <Box key={index} width='100%' overflowX='scroll'>
          <Grid
            autoFlow={{ base: 'column' }}
            autoColumns={{ base: '220px', md: '270px' }}
            autoRows={'1fr'}
            alignItems='flex-start'
            templateRows='auto'
            gap='2'
            px='2'
            py='4'
          >
            {getCardRow(row)}
          </Grid>
        </Box>
      )
    })
    return r
  }

  return (
    <ScrollFlex
      pos='relative'
      justify='center'
      align='center'
      width='100%'
      paddingBottom={{ base: '0', md: '16', lg: '32' }}
      {...containerProps}
    >
      <Grid
        pos='relative'
        width='100%'
        maxWidth='1200px'
        templateColumns={{ base: '100%' }}
        overflowX={{ base: 'hidden', lg: 'visible' }}
        justifyContent='center'
        justifyItems={{ base: 'center', lg: 'initial' }}
        padding={{ base: '0', lg: '100px 0 0 100px' }}
      >
        <Flex
          pos={{ base: 'relative', lg: 'absolute' }}
          right={{ base: '90px', md: '0', lg: '0' }}
          width={{ base: '900px', md: '1200px', lg: '100%' }}
          height={{ base: '80vh' }}
          minHeight={{ base: '700px', lg: '900px' }}
          justifySelf={{ base: 'center' }}
        >
          <StaticImage
            src='../../img/photos/watercolor-gifts.png'
            alt=''
            style={{ width: '100%', height: '100%' }}
            imgStyle={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
          />
        </Flex>
        <Heading
          position={{ base: 'absolute', lg: 'relative' }}
          top={{ base: '5%', lg: '0' }}
          textAlign='center'
          display={{ base: 'block', lg: 'none' }}
          as='h2'
          fontSize={{
            base: '6xl',
            md: '8xl'
          }}
          fontWeight='500'
          lineHeight='0.8'
          width='100%'
          color='yellow.50'
          zIndex='2'
        >
          {title}
        </Heading>
        <Grid
          pos={{ base: 'relative' }}
          // top={{ base: '-150px', lg: '150px' }}
          left={{ base: '0', lg: '10%' }}
          top={{ base: '0', lg: '10%' }}
          marginRight={{ base: '0', lg: '10%' }}
          marginBottom={{ base: '0', lg: '10%' }}
          width={{ base: '100vw', lg: '50%' }}
          // maxHeight={{ base: '700px' }}
          // marginLeft={{ base: '0', lg: '10%' }}
          // marginBottom={{ base: '0', lg: '150px' }}
          rowGap='2'
          zIndex='2'
          // paddingLeft={{ base: '0', lg: '20' }}
        >
          <Heading
            as='h2'
            display={{ base: 'none', lg: 'block' }}
            fontSize={{
              base: '6xl',
              lg: '8xl'
            }}
            fontWeight='500'
            lineHeight='0.8'
            width='100%'
            color='yellow.50'
          >
            {title}
          </Heading>
          <CardComponent
            width='100%'
            boxShadow='lg'
            p={{ base: '4', lg: '4' }}
            paddingRight={{ base: '0', lg: '4' }}
            backgroundColor='orange.50'
          >
            <Grid width='100%' overflowY='auto' gap='4' alignItems='start'>
              <Grid gap='4' width='100%' overflowX='hidden'>
                {getScrollableCardRows(cardRows)}
              </Grid>
            </Grid>
          </CardComponent>
        </Grid>
        <Grid
          width='100vw'
          justifyItems='center'
          justifySelf='center'
          gap='4'
          my={{ base: '20' }}
          px={{ base: '4', md: '0' }}
        >
          <Text
            width='100%'
            textAlign='center'
            fontSize={{ base: 'xl', lg: '2xl' }}
            fontWeight={{ base: 'normal' }}
          >
            Dê um presente que não está na lista!
          </Text>
          <Button
            size='md'
            onClick={() => onComprarClick({ ...pixData, value: null })}
          >
            Comprar
          </Button>
        </Grid>
      </Grid>
    </ScrollFlex>
  )
}

export default GiftsContainer
