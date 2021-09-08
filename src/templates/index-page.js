import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import HeroHeaderContainer from '../containers/hero-header/hero-header'
import TopbarContainer from '../containers/topbar/topbar'
import DateCountdownContainer from '../containers/date-countdown/date-countdown.container'
import WelcomeContainer from '../containers/welcome/welcome.container'
import { Helmet } from 'react-helmet'
import OurStoryContainer from '../containers/our-story/our-story.container'

export const IndexPageTemplate = ({
  image,
  heading,
  welcomeContainerContent,
  ourStoryContainerContent
}) => {
  return (
    <>
      <Helmet>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Helmet>
      <TopbarContainer></TopbarContainer>
      <Flex justify={'center'} width='100vw' direction='column' paddingTop='4'>
        <HeroHeaderContainer
          title={heading}
          image={image}
        ></HeroHeaderContainer>
        <DateCountdownContainer></DateCountdownContainer>
        <WelcomeContainer
          title={welcomeContainerContent.heading}
          text={welcomeContainerContent.text}
        ></WelcomeContainer>
        <OurStoryContainer
          title={ourStoryContainerContent.heading}
          text={ourStoryContainerContent.text}
        ></OurStoryContainer>
      </Flex>
    </>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  heading: PropTypes.string,
  welcomeContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  ourStoryContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      heading={frontmatter.heading}
      welcomeContainerContent={frontmatter.welcomeContainerContent}
      ourStoryContainerContent={frontmatter.ourStoryContainerContent}
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
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        heading
        welcomeContainerContent {
          heading
          text
        }
        ourStoryContainerContent {
          heading
          text
        }
      }
    }
  }
`
