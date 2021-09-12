import { Grid, Box, Heading } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import InformationCardComponent from '../../components/information-card/information-card.component'
import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollGrid = ScrollElement(Grid)

const InformationContainer = ({ containerProps }) => {
  const data = useStaticQuery(graphql`
    {
      container: markdownRemark(fields: { slug: { eq: "/information/" } }) {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
      cards: allMarkdownRemark(
        filter: {
          fileAbsolutePath: {
            regex: "/ana-e-gabriel/src/content/information/.*/"
          }
        }
      ) {
        nodes {
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
          }
          fields {
            slug
          }
          html
        }
      }
    }
  `)

  const sortedCards = data.cards.nodes.sort((a, b) =>
    a.frontmatter.title
      .toString()
      .localeCompare(b.frontmatter.title.toString(), 'en', { numeric: true })
  )

  return (
    <ScrollGrid
      pos='relative'
      justifyContent='center'
      width='100%'
      marginBottom={['8', '20']}
      py={{ base: '4', lg: '10' }}
      overflowX='hidden'
      {...containerProps}
    >
      <Box
        pos='absolute'
        top='0'
        left={{ base: '0', lg: '10%' }}
        transform={'translate(-20%, 0)'}
        // width='600px'
        height={{ base: '400px', lg: '600px ' }}
      >
        <StaticImage
          src={'../../img/splashes/InfoLeft.png'}
          alt=''
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </Box>
      <Box
        pos='absolute'
        top='0'
        right={{ base: '0', lg: '10%' }}
        transform={'translate(20%, 0)'}
        // width='600px'
        height={{ base: '400px', lg: '600px ' }}
      >
        <StaticImage
          src={'../../img/splashes/InfoRight.png'}
          alt=''
          style={{ width: '100%', height: '100%' }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </Box>
      <Grid
        justifyItems='center'
        width='100%'
        maxWidth='1000px'
        rowGap='4'
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
        <Grid
          autoFlow={{ base: 'column', lg: 'row' }}
          autoColumns={{
            base: 'minmax(280px, 1fr)',
            md: 'minmax(450px, 1fr)',
            lg: '800px'
          }}
          alignItems='flex-start'
          width='100%'
          gap='2'
          marginLeft={{ base: '2', md: '0' }}
          overflowX='auto'
          p={{ base: '4', lg: '10' }}
          css={{ '&::-webkit-scrollbar': { display: 'none' } }}
          pos='relative'
        >
          {sortedCards.map((card) => {
            return (
              <InformationCardComponent
                key={card.fields.slug}
                title={card.frontmatter.title}
                textHTML={card.html}
                imageData={
                  card.frontmatter.image.childImageSharp.gatsbyImageData
                }
                height='250px'
              />
            )
          })}
        </Grid>
      </Grid>
    </ScrollGrid>
  )
}

export default InformationContainer
