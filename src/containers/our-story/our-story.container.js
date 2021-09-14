import { Grid, Box, Heading, Text } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollGrid = ScrollElement(Grid)

const OurStoryContainer = ({ containerProps }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fields: { slug: { eq: "/our-story/" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)
  return (
    <ScrollGrid
      justifyContent='center'
      width='100%'
      my={['8', '20']}
      px='2'
      {...containerProps}
    >
      <Grid
        width='100%'
        maxWidth='1000px'
        templateAreas={{
          base: `'title' 'photo' 'text'`,
          lg: `'title photo' 'text photo'`
        }}
        templateColumns={{
          base: '1fr',
          lg: '1fr 1fr'
        }}
        templateRows={{
          base: 'auto auto',
          lg: 'auto 1fr'
        }}
        rowGap='8'
        columnGap='8'
      >
        <Box pos='relative' gridArea='title' width='100%' marginTop='8'>
          <Heading
            width='100% '
            as='h2'
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
            top='50%'
            left='50%'
            width='100%'
            transform='translate(-50%, -50%)'
            zIndex='-1'
          >
            <StaticImage src={'../../img/splashes/HistoriaTitle.png'} alt='' />
          </Box>
        </Box>
        <Text
          as='div'
          width='100%'
          px={{ base: '8', md: '20', lg: '0' }}
          gridArea='text'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></Text>
        <Box
          width='100%'
          height={{
            base: '70vh',
            lg: '100%'
          }}
          gridArea='photo'
        >
          <StaticImage
            src={'../../img/photos/watercolor-our-story-photo.png'}
            alt=''
            style={{
              width: '100%',
              height: '100%'
            }}
            imgStyle={{ objectFit: 'contain' }}
          />
        </Box>
      </Grid>
    </ScrollGrid>
  )
}

export default OurStoryContainer
