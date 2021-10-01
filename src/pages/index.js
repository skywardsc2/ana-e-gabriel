import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'
import HeroHeaderContainer from '../containers/hero-header/hero-header'
import TopbarContainer from '../containers/topbar/topbar'
import DateCountdownContainer from '../containers/date-countdown/date-countdown.container'
import WelcomeContainer from '../containers/welcome/welcome.container'
import { Helmet } from 'react-helmet'
import OurStoryContainer from '../containers/our-story/our-story.container'
import AddressContainer from '../containers/address/address.container'
import OutfitContainer from '../containers/outfit/outfit.container'
import InformationContainer from '../containers/information/information.container'
import GiftsContainer from '../containers/gifts/gifts.container'
import PhotoGalleryContainer from '../containers/photo-gallery/photo-gallery.container'
import ConfirmationContainer from '../containers/confirmation/confirmation.container'
import FooterContainer from '../containers/footer/footer.container'
import PixPopUpContainer from '../containers/pix/pix.container'
import SendMessageContainer from '../containers/send-message/send-message.container'
import SeoComponent from '../components/seo/seo.component'

const IndexPageTemplate = ({ heading }) => {
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
    },
    'send-message': {
      elementRef: useRef(null),
      text: 'Mensagem aos Noivos'
    }
  }

  const [pixPopUpState, setPixPopUpState] = useState({
    visible: false,
    pixData: null
  })

  const setPageScroll = (value) => {
    document.documentElement.style.overflowY = value
  }

  const createPix = (payload) => {
    setPageScroll('hidden')
    setPixPopUpState({
      visible: true,
      pixData: payload
    })
  }

  const closePixPopUpHandler = () => {
    const currentState = pixPopUpState
    setPageScroll('scroll')
    setPixPopUpState({ ...currentState, visible: false })
  }

  return (
    <>
      <Helmet>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
      </Helmet>
      <SeoComponent />
      <TopbarContainer menuItems={topBarMenuItems}></TopbarContainer>
      {pixPopUpState.visible && (
        <PixPopUpContainer
          pixData={pixPopUpState.pixData}
          closeHandler={closePixPopUpHandler}
        />
      )}
      <Flex
        justify={'center'}
        width='100%'
        direction='column'
        paddingTop='4'
        overflow='hidden'
      >
        <HeroHeaderContainer
          containerProps={{ name: 'hero-header' }}
        ></HeroHeaderContainer>
        <DateCountdownContainer></DateCountdownContainer>
        <WelcomeContainer></WelcomeContainer>
        <OurStoryContainer
          containerProps={{ name: 'our-story' }}
        ></OurStoryContainer>
        <AddressContainer
          containerProps={{ name: 'address' }}
        ></AddressContainer>
        <OutfitContainer></OutfitContainer>
        <InformationContainer
          containerProps={{ name: 'information' }}
        ></InformationContainer>
        <GiftsContainer
          containerProps={{ name: 'gifts' }}
          onComprarClick={createPix}
        ></GiftsContainer>
        <PhotoGalleryContainer
          containerProps={{ name: 'photo-gallery' }}
        ></PhotoGalleryContainer>
        <ConfirmationContainer
          containerProps={{ name: 'confirmation' }}
        ></ConfirmationContainer>
        <SendMessageContainer
          containerProps={{ name: 'send-message' }}
        ></SendMessageContainer>
        <FooterContainer></FooterContainer>
      </Flex>
    </>
  )
}

IndexPageTemplate.propTypes = {
  heading: PropTypes.string
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return <IndexPageTemplate heading={frontmatter.heading} />
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
}

// export default IndexPage
export default IndexPageTemplate

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         heading
//       }
//     }
//   }
// `
