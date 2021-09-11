import { Grid, Box, Heading } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import InformationCardComponent from '../../components/information-card/information-card.component'

// import watercolorSplash from '../../img/splashes/Bem-vindos.png'

const InformationContainer = () => {
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

  // console.log(data.cards.edges[0].node.image)

  return (
    <Grid
      pos='relative'
      justifyContent='center'
      width='100%'
      marginBottom={['8', '20']}
      py={{ base: '4', lg: '10' }}
      overflowX='hidden'
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
          width='100%'
          textAlign='center'
        >
          {data.container.frontmatter.title}
        </Heading>
        <Grid
          autoFlow={{ base: 'column', lg: 'row' }}
          autoColumns={{ base: 'minmax(260px, 1fr)', lg: '600px' }}
          alignItems='flex-start'
          width='100%'
          gap='2'
          marginLeft={{ base: '2', md: 0 }}
          overflowX='auto'
          p={{ base: '4', lg: '10' }}
          css={{ '&::-webkit-scrollbar': { display: 'none' } }}
        >
          {data.cards.nodes.map((card) => {
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
    </Grid>
  )
}

export default InformationContainer
