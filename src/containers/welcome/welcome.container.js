import { Grid, Box, Heading, Text } from '@chakra-ui/layout'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

// import watercolorSplash from '../../img/splashes/Bem-vindos.png'

const WelcomeContainer = ({ title, text }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fields: { slug: { eq: "/welcome/" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)
  return (
    <Grid justifyContent='center' width='100%' marginBottom={['8', '20']}>
      <Grid justifyItems='center' width='100%' maxWidth='1000px' rowGap='4'>
        <Box pos='relative' top='25%'>
          <StaticImage src={'../../img/splashes/Bem-Vindos.png'} alt='' />
        </Box>
        <Heading
          as='h2'
          fontSize={{
            base: '6xl',
            md: '8xl'
          }}
          fontWeight='500'
        >
          {data.markdownRemark.frontmatter.title}
        </Heading>
        <Text
          width='100%'
          px='8'
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        ></Text>
      </Grid>
    </Grid>
  )
}

export default WelcomeContainer
