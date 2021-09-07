import React from 'react'
import { Global } from '@emotion/react'

// Fontsource fonts
import '@fontsource/josefin-slab'

import GatkinsDemoOTF from '../../fonts/Gatkins-Demo.otf'
import GatkinsDemoWOFF from '../../fonts/gatkins-demo-webfont.woff'
import GatkinsDemoWOFF2 from '../../fonts/gatkins-demo-webfont.woff2'

const Fonts = () => {
  return (
    <Global
      // Local fonts
      styles={`
        @font-face {
          font-family: 'Gatkins Demo';
          font-style: normal;
          font-display: swap;
          src: url(${GatkinsDemoOTF}) format('otf'), url(${GatkinsDemoWOFF}) format('woff'), url(${GatkinsDemoWOFF2}) format('woff2');
        }

        @font-face {
          font-family: 'Gatkins Demo';
          font-style: bold;
          font-display: swap;
          src: url(${GatkinsDemoOTF}) format('otf'), url(${GatkinsDemoWOFF}) format('woff'), url(${GatkinsDemoWOFF2}) format('woff2');
        }
      `}
    />
  )
}

export default Fonts
