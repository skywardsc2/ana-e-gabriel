import { Grid, Box, Heading, VStack } from '@chakra-ui/layout'
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  Text
} from '@chakra-ui/react'
import { graphql, useStaticQuery } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Scroll from 'react-scroll'
import ReCAPTCHA from 'react-google-recaptcha'

const ScrollElement = Scroll.ScrollElement

const ScrollFlex = ScrollElement(Flex)

const SendMessageContainer = ({ containerProps }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fields: { slug: { eq: "/send-message/" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })
  const [sendSuccess, setSendSuccess] = useState(null)
  const [recaptchaState, setRecaptchaState] = useState(0)

  const onSubmit = async (data) => {
    // console.log(data)
    setSendSuccess(null)
    if (!recaptchaState) {
      console.log('Por favor, confirme que você não é um robô!')
      alert('Por favor, confirme que você não é um robô!')
      return
    }

    data.recaptchaToken = recaptchaState

    let responseJSON
    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        setSendSuccess('failed')
        alert(
          'Desculpe, houve um erro ao enviar a mensagem. Tente novamente mais tarde!'
        )
        return
      }
      responseJSON = await response.json()

      const { results } = responseJSON
      if (results) {
        if (results.total_rejected_recipients > 0) {
          // setSendStatus('failed')
          setSendSuccess('failed')
          alert(
            'Desculpe, houve um erro ao enviar a mensagem. Tente novamente mais tarde!'
          )
          return
        }
      }

      // setSendStatus('success')
      setSendSuccess('success')
      alert('Mensagem enviada!')
    } catch (e) {
      setSendSuccess('failed')
      // setSendStatus('failed')
      console.log(e)
    }
  }

  const onRecaptchaChange = (value) => {
    setRecaptchaState(value)
  }

  console.log(sendSuccess)

  return (
    <ScrollFlex
      pos='relative'
      justify='center'
      align='center'
      width='100%'
      my={['12', '20']}
      {...containerProps}
    >
      <Grid
        justifyContent='center'
        width='100%'
        maxWidth='1000px'
        rowGap='8'
        overflow='hidden'
        px={{ base: '4', md: '0' }}
      >
        <Box width='100%'>
          <Heading
            as='h2'
            width='100%'
            textAlign='center'
            fontSize={{
              base: '6xl',
              md: '8xl'
            }}
            fontWeight='500'
            zIndex='5'
          >
            {data.markdownRemark.frontmatter.title}
          </Heading>
          <Box
            pos='absolute'
            top='80px'
            left='50%'
            transform='translate(-50%, -50%)'
            zIndex='-1'
          >
            <StaticImage
              src={'../../img/splashes/Message.png'}
              alt=''
              style={{ width: '1000px' }}
            />
          </Box>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing='4'>
            <FormControl isRequired>
              <FormLabel>Nome:</FormLabel>
              <Input {...register('name', { required: true })}></Input>
              <FormErrorMessage>
                {errors.name && 'Campo obrigatório'}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email:</FormLabel>
              <Input {...register('email', { required: true })}></Input>
              <FormErrorMessage>
                {errors.email && 'Campo obrigatório'}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Mensagem:</FormLabel>
              <Textarea {...register('message', { required: true })}></Textarea>
              <FormErrorMessage>
                {errors.message && 'Campo obrigatório'}
              </FormErrorMessage>
            </FormControl>
            <ReCAPTCHA
              sitekey='6LfEx5EcAAAAAHYNKWVnkWgBQqk6zfPNOlSmG2VC'
              onChange={onRecaptchaChange}
            />
            ,
            <Button type='submit' isLoading={isSubmitting}>
              Enviar
            </Button>
          </VStack>

          {sendSuccess &&
            (sendSuccess === 'failed' ? (
              <Text textAlign='center' color={'red.500'}>
                Desculpe, houve um erro ao enviar a mensagem. Tente novamente
                mais tarde!
              </Text>
            ) : (
              <Text textAlign='center' color={'green.400'}>
                Mensagem enviada!
              </Text>
            ))}
        </form>
      </Grid>
    </ScrollFlex>
  )
}

export default SendMessageContainer
