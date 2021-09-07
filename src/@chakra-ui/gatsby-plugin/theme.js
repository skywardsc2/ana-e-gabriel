import { extendTheme } from '@chakra-ui/react'
// Color overrides
import colors from './colors'

// Global style overrides
import styles from './styles'

// Typography overrides
import fonts from './typography'

// Component style overrides
import components from './components'

const overrides = {
  colors,
  styles,
  fonts,
  components,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light'
  }
}

const customTheme = extendTheme(overrides)

export default customTheme
