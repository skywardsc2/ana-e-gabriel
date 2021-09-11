const styles = {
  global: {
    '*': {
      '::-webkit-scrollbar': {
        height: '1',
        width: '1'
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
      listStylePosition: 'inside'
    }
  }
}

export default styles
