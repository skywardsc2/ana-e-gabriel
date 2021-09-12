import { SmallCloseIcon } from '@chakra-ui/icons'
import { Code, Grid, Heading, Text } from '@chakra-ui/react'
import { chakra } from '@chakra-ui/system'
import { QrCodePix } from 'qrcode-pix'
import React, { useEffect, useState } from 'react'
import CardComponent from '../card/card.component'

const PixPopUpComponent = ({ pixData, closeHandler }) => {
  const qrCodePix = QrCodePix(pixData)

  const [qrCodePixImage, setQrCodePixImage] = useState(null)

  useEffect(() => {
    qrCodePix.base64().then((value) => setQrCodePixImage(value))
  }, [])

  const [closeWidth, closeHeight] = [24, 24]
  return (
    <CardComponent pos='relative' boxShadow='lg' height='auto'>
      <chakra.button
        pos='absolute'
        top={`-${closeHeight / 2}px`}
        right={`-${closeWidth / 2}px`}
        borderRadius='50%'
        bgColor={'gray.700'}
        zIndex='2'
        onClick={() => closeHandler()}
        _hover={{ bgColor: 'primary' }}
        transition='background-color 150ms ease-in-out'
        p='2'
      >
        <SmallCloseIcon
          width={`${closeWidth}px`}
          height={`${closeHeight}px`}
          color='white'
        />
      </chakra.button>
      <Grid width='100%' justifyItems='center' alignItems='flex-start' gap='4'>
        <Heading
          as='h2'
          fontWeight='normal'
          fontSize={{ base: '5xl', md: '7xl' }}
        >
          Muito obrigado!
        </Heading>
        <chakra.img
          src={qrCodePixImage}
          alt='pix qr code'
          width='52'
          height='52'
        />
        <Text width='100%' textAlign='center'>
          Valor: {`R$ ${pixData.value.toFixed(2).replace('.', ',')}`}
        </Text>
        <Text width='100%' textAlign='center'>
          Pix QRCode:
        </Text>
        <Code width='100%' overflowWrap='anywhere' textAlign='center'>
          {qrCodePix.payload()}
        </Code>
      </Grid>
    </CardComponent>
  )
}

export default PixPopUpComponent
