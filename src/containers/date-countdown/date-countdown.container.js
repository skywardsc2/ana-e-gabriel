import { Box, Grid, Heading } from '@chakra-ui/react'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useEffect, useState } from 'react'

const DateCountdownContainer = () => {
  const calculateTimeLeft = () => {
    let difference = +new Date('01/22/2022') - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  return (
    <Grid
      justifyContent='center'
      justifyItems='center'
      alignContent='center'
      width='100%'
      templateColumns='1fr'
      my={['8', '20']}
      px='2'
      rowGap='8'
      overflowX='hidden'
    >
      <Box pos='relative'>
        <Box width={['600px', '700px']}>
          <StaticImage src='../../img/splashes/Date.png' alt='' />
        </Box>
        <Heading
          as='h2'
          pos='absolute'
          top='50%'
          left='50%'
          // width='100%'
          textAlign='center'
          transform='translate(-50%, -50%)'
          fontFamily='Rawengulk'
          fontWeight='normal'
          color='lightShade'
        >
          {'22 de janeiro de 2022'}
        </Heading>
      </Box>
      <Heading
        as='h2'
        width='100vw'
        textAlign='center'
        fontFamily='Rawengulk'
        fontWeight='normal'
        color='primary'
      >
        {`${timeLeft.days} dias, ${timeLeft.hours} horas, ${timeLeft.minutes} minutos, ${timeLeft.seconds} segundos`}
      </Heading>
    </Grid>
  )
}

export default DateCountdownContainer
