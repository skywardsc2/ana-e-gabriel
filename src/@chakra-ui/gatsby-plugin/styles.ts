const styles = {
  global: {
    '*': {
      '::-webkit-scrollbar': {
        height: '0.5rem',
        width: '0.5rem'
      },
      '::-webkit-scrollbar-track': {
        boxShadow: 'none'
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'primary',
        borderRadius: '20px'
      }
    },
    a: {
      color: 'secondary',
      textDecoration: 'underline'
    },
    li: {
      marginBottom: '2'
    },
    ul: {
      'list-style-position': 'inside'
    }
  }
}

export default styles
