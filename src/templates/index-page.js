import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Flex, Grid, Text } from '@chakra-ui/react'
import Logo from '../../static/img/svg/Logo.inline.svg'
import { graphql } from 'gatsby'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro
}) => {
  return (
    <Flex
      justify={'center'}
      width='100%'
      backgroundColor='pink.100'
      height='100vh'
    >
      <Flex
        justify='center'
        align='center'
        width='100%'
        height={['16']}
        py='2'
        backgroundColor='white'
      >
        <Grid
          width='100%'
          maxWidth='1000px'
          px={['4', '12']}
          justifyContent='space-between'
          autoFlow='column'
        >
          <Logo width='100px' height='95%' />
          <Grid justifyContent='flex-end' gap='2' autoFlow='column'>
            <Flex justify='center' align='center'>
              <Text>Item</Text>
            </Flex>
            <Flex justify='center' align='center'>
              <Text>Item</Text>
            </Flex>
            <Flex justify='center' align='center'>
              <Text>Item</Text>
            </Flex>
            <Flex justify='center' align='center'>
              <Text>Item</Text>
            </Flex>
          </Grid>
        </Grid>
      </Flex>
    </Flex>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      subheading={frontmatter.subheading}
      mainpitch={frontmatter.mainpitch}
      description={frontmatter.description}
      intro={frontmatter.intro}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
