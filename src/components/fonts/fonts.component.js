import React from 'react'
import { Global } from '@emotion/react'

// Fontsource fonts
import '@fontsource/josefin-slab'

import GatkinsDemoOTF from '../../fonts/Gatkins-Demo.otf'
import GatkinsDemoWOFF from '../../fonts/gatkins-demo-webfont.woff'
import GatkinsDemoWOFF2 from '../../fonts/gatkins-demo-webfont.woff2'
import RawengulkDemiboldWOFF from '../../fonts/RawengulkDemibold.woff'
import RawengulkDemiboldWOFF2 from '../../fonts/RawengulkDemibold.woff2'
import RawengulkBoldWOFF from '../../fonts/RawengulkBold.woff'
import RawengulkBoldWOFF2 from '../../fonts/RawengulkBold.woff2'
import RawengulkLightWOFF from '../../fonts/RawengulkLight.woff'
import RawengulkLightWOFF2 from '../../fonts/RawengulkLight.woff2'
import RawengulkRegularWOFF from '../../fonts/RawengulkRegular.woff'
import RawengulkRegularWOFF2 from '../../fonts/RawengulkRegular.woff2'
import RawengulkUltralightWOFF from '../../fonts/RawengulkUltralight.woff'
import RawengulkUltralightWOFF2 from '../../fonts/RawengulkUltralight.woff2'

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

        @font-face {
          font-family: 'Rawengulk';
          src: url(${RawengulkDemiboldWOFF2}) format('woff2'),
              url(${RawengulkDemiboldWOFF}) format('woff');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Rawengulk';
          src: url(${RawengulkBoldWOFF2}) format('woff2'),
              url(${RawengulkBoldWOFF}) format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Rawengulk';
          src: url(${RawengulkLightWOFF2}) format('woff2'),
              url(${RawengulkLightWOFF}) format('woff');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Rawengulk';
          src: url(${RawengulkRegularWOFF2}) format('woff2'),
              url(${RawengulkRegularWOFF}) format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'Rawengulk';
          src: url(${RawengulkUltralightWOFF2}) format('woff2'),
              url(${RawengulkUltralightWOFF}) format('woff');
          font-weight: 200;
          font-style: normal;
          font-display: swap;
      }
      
      `}
    />
  )
}

export default Fonts
