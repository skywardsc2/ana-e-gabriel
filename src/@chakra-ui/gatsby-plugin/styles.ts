const styles = {
  global: {
    '*': {
      '::-webkit-scrollbar': {
        height: '2',
        width: '2'
      },
      // '::-webkit-scrollbar-track': {
      //   boxShadow: 'none'
      // },
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
