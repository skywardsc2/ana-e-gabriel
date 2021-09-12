import { Grid, Box, Heading } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Gallery from '@browniebroke/gatsby-image-gallery'
import Scroll from 'react-scroll'

const ScrollElement = Scroll.ScrollElement

const ScrollGrid = ScrollElement(Grid)

const PhotoGalleryContainer = ({ containerProps }) => {
  const data = useStaticQuery(graphql`
    {
      container: markdownRemark(
        fileAbsolutePath: {
          regex: "/ana-e-gabriel/src/content/photo-gallery.*/"
        }
      ) {
        frontmatter {
          title
          photos {
            childImageSharp {
              thumb: gatsbyImageData(
                width: 350
                height: 350
                placeholder: BLURRED
              )
              full: gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  `)

  // const imageRenderer = useCallback((index, left, top, key, photo) => {
  //   const image = getImage(photo.frontmatter.image)
  //   return (
  //     <GatsbyImage key={key} image={image} alt='' style={{ margin: '2px' }} />
  //   )
  // }, [])

  const photos = data.container.frontmatter.photos
    .filter((photo) => !!photo)
    .map((photo) => {
      return photo.childImageSharp
    })

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
        <Box width={{ base: '100%' }} px={{ base: '4', md: '8', lg: '0' }}>
          <Gallery images={photos} colWidth={100 / 2} mdColWidth={100 / 3} />
        </Box>
      </Grid>
    </ScrollGrid>
  )
}

export default PhotoGalleryContainer
