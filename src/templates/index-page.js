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
import AddressContainer from '../containers/address/address.container'
import InformationContainer from '../containers/information/information.container'

const IndexPageTemplate = ({
  heading,
  welcomeContainerContent,
  ourStoryContainerContent,
  addressContainerContent,
  informationContainerContent,
  giftsContainerContent,
  galleryContainerContent,
  confirmationContainerContent
}) => {
  return (
    <>
      <Helmet>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Helmet>
      <TopbarContainer></TopbarContainer>
      <Flex
        justify={'center'}
        width='100%'
        direction='column'
        paddingTop='4'
        overflow='hidden'
      >
        <HeroHeaderContainer title={heading}></HeroHeaderContainer>
        <DateCountdownContainer></DateCountdownContainer>
        <WelcomeContainer
          title={welcomeContainerContent.heading}
          text={welcomeContainerContent.text}
        ></WelcomeContainer>
        <OurStoryContainer
          title={ourStoryContainerContent.heading}
          text={ourStoryContainerContent.text}
        ></OurStoryContainer>
        <AddressContainer
          title={addressContainerContent.heading}
          text={addressContainerContent.text}
        ></AddressContainer>
        <InformationContainer></InformationContainer>
      </Flex>
    </>
  )
}

IndexPageTemplate.propTypes = {
  heading: PropTypes.string,
  welcomeContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  ourStoryContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  addressContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  informationContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  }),
  giftsContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        cards: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            price: PropTypes.number
          })
        )
      })
    )
  }),
  galleryContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    photos: PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    )
  }),
  confirmationContainerContent: PropTypes.shape({
    heading: PropTypes.string,
    text: PropTypes.string
  })
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      heading={frontmatter.heading}
      welcomeContainerContent={frontmatter.welcomeContainerContent}
      ourStoryContainerContent={frontmatter.ourStoryContainerContent}
      addressContainerContent={frontmatter.addressContainerContent}
      informationContainerContent={frontmatter.informationContainerContent}
      giftsContainerContent={frontmatter.giftsContainerContent}
      galleryContainerContent={frontmatter.galleryContainerContent}
      confirmationContainerContent={frontmatter.confirmationContainerContent}
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
        heading
        welcomeContainerContent {
          heading
          text
        }
        ourStoryContainerContent {
          heading
          text
        }
        addressContainerContent {
          heading
          text
        }
        informationContainerContent {
          heading
          cards {
            title
            text
          }
        }
        giftsContainerContent {
          heading
          categories {
            title
            cards {
              title
              price
            }
          }
        }
        galleryContainerContent {
          heading
        }
        confirmationContainerContent {
          heading
          text
        }
      }
    }
  }
`
