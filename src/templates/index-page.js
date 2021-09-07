import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import Helmet from 'gatsby-plugin-react-helmet'
import HeroHeaderContainer from '../containers/hero-header/hero-header'
import Logo from '../../static/img/svg/Logo.inline.svg'
import { HamburgerIcon } from '@chakra-ui/icons'

export const IndexPageTemplate = ({ image, title, heading }) => {
  return (
    <>
      {/* <Helmet>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Helmet> */}
      <Flex
        justify={'center'}
        width='100vw'
        backgroundColor='blue.50'
        direction='column'
        paddingTop='4'
      >
        <Flex
          justify='center'
          align='center'
          width='100%'
          height={['16']}
          py='2'
          backgroundColor='white'
          pos='fixed'
          top='0'
          zIndex='10'
        >
          <Grid
            width='100%'
            maxWidth='1000px'
            px={['4', '12']}
            justifyContent='space-between'
            autoFlow='column'
          >
            <Logo width='100px' height='95%' />
            <HamburgerIcon width='50px' height='50px' />
            {/* <Grid justifyContent='flex-end' gap='2' autoFlow='column'>
            </Grid> */}
          </Grid>
        </Flex>
        <HeroHeaderContainer
          title={'Ana & Gabriel'}
          image={image}
        ></HeroHeaderContainer>
      </Flex>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
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
// export default IndexPageTemplate

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
      }
    }
  }
`
