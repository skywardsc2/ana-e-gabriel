import React, { useRef } from 'react'
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
import GiftsContainer from '../containers/gifts/gifts.container'
import PhotoGalleryContainer from '../containers/photo-gallery/photo-gallery.container'
import ConfirmationContainer from '../containers/confirmation/confirmation.container'
import FooterContainer from '../containers/footer/footer.container'

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
  const topBarMenuItems = {
    'hero-header': {
      elementRef: useRef(null),
      text: 'Home'
    },
    'our-story': {
      elementRef: useRef(null),
      text: 'Nossa História'
    },
    address: {
      elementRef: useRef(null),
      text: 'Endereço'
    },
    information: {
      elementRef: useRef(null),
      text: 'Informações e Dicas'
    },
    gifts: {
      elementRef: useRef(null),
      text: 'Presentes'
    },
    'photo-gallery': {
      elementRef: useRef(null),
      text: 'Fotos'
    },
    confirmation: {
      elementRef: useRef(null),
      text: 'Presença'
    }
  }
  return (
    <>
      <Helmet>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Helmet>
      <TopbarContainer menuItems={topBarMenuItems}></TopbarContainer>
      <Flex
        justify={'center'}
        width='100%'
        direction='column'
        paddingTop='4'
        overflow='hidden'
      >
        <HeroHeaderContainer
          containerProps={{ ref: topBarMenuItems['hero-header'].elementRef }}
        ></HeroHeaderContainer>
        <DateCountdownContainer></DateCountdownContainer>
        <WelcomeContainer></WelcomeContainer>
        <OurStoryContainer
          containerProps={{ ref: topBarMenuItems['our-story'].elementRef }}
        ></OurStoryContainer>
        <AddressContainer
          containerProps={{ ref: topBarMenuItems['address'].elementRef }}
        ></AddressContainer>
        <InformationContainer
          containerProps={{ ref: topBarMenuItems['information'].elementRef }}
        ></InformationContainer>
        <GiftsContainer
          containerProps={{ ref: topBarMenuItems['gifts'].elementRef }}
        ></GiftsContainer>
        <PhotoGalleryContainer
          containerProps={{ ref: topBarMenuItems['photo-gallery'].elementRef }}
        ></PhotoGalleryContainer>
        <ConfirmationContainer
          containerProps={{ ref: topBarMenuItems['confirmation'].elementRef }}
        ></ConfirmationContainer>
        <FooterContainer></FooterContainer>
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
