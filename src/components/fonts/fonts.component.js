import React from "react"
import { Global } from "@emotion/react"

// Font source fonts
import "@fontsource/josefin-slab"

const Fonts = () => {
  return (
    <Global
      // Local fonts
      styles={`
            @font-face {
                font-family: 'Gatkins Demo';
                font-style: normal;
                font-weight: 700;
                src: url('../fonts/Gatkins-Demo.otf') format('otf');
            }
        `}
    />
  )
}

export default Fonts
