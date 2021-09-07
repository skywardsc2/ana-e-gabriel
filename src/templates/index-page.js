import React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Flex, Grid, Text } from '@chakra-ui/react'
import { graphql } from 'gatsby'
// @ts-ignore
import Helmet from 'gatsby-plugin-react-helmet'
import HeroHeaderContainer from '../containers/hero-header/hero-header'
import TopbarContainer from '../containers/topbar/topbar'
import Logo from '../img/svg/Logo.inline.svg'
import { HamburgerIcon } from '@chakra-ui/icons'
import DateCountdownContainer from '../containers/date-countdown/date-countdown.container'

export const IndexPageTemplate = ({ image, title, heading }) => {
  return (
    <>
      {/* <Helmet>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Helmet> */}
      <TopbarContainer></TopbarContainer>
      <Flex justify={'center'} width='100vw' direction='column' paddingTop='4'>
        <HeroHeaderContainer
          title={'Ana & Gabriel'}
          image={image}
        ></HeroHeaderContainer>
        <DateCountdownContainer></DateCountdownContainer>
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
