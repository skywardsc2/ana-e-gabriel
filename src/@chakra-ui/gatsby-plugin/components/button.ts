import colors from '../colors'

const Button = {
  baseStyle: {
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    _focus: {
      boxShadow: 'none',
      border: '3px solid',
      borderColor: 'gray.800'
    }
  },
  variants: {
    solid: {
      backgroundColor: 'secondary',
      color: 'white',
      _hover: {
        backgroundColor: 'primary'
      },
      _focus: {
        boxShadow: 'none',
        border: '3px solid',
        borderColor: 'gray.800'
      }
    },
    outline: {
      border: '2px solid',
      borderColor: 'secondary',
      color: 'secondary',
      _hover: {
        backgroundColor: 'secondary',
        color: 'white'
      },
      _focus: {
        boxShadow: 'none',
        border: '3px solid',
        borderColor: 'gray.800'
      }
    }
  }
}

export default Button
