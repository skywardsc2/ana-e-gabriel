const SparkPost = require('sparkpost')
const client = new SparkPost(process.env.SPARKPOST)
const RECAPTCHA_KEY = process.env.RECAPTCHA_KEY
const axios = require('axios').default

exports.handler = async function (event, context, callback) {
  const data = JSON.parse(event.body)

  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_KEY}&response=${data.recaptchaToken}`
  )

  const recaptchaData = response.data

  if (!recaptchaData.success) {
    console.log('error', response['error-codes'])
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({ errorCodes: response['error-codes'] })
    })
  }

  return client.transmissions
    .send({
      content: {
        from: {
          email: 'mail@casamentoanaegabriel.com.br',
          name: data.name
        },
        subject: `[Mensagem aos Noivos]`,
        html: `<html><body><h3>De ${data.name} (${data.email})</h3><br><br><p>${data.message}</p></body></html>`,
        text: `De ${data.name} (${data.email})\n\n${data.message}`
      },
      recipients: [{ address: 'gabriel.cgroldao@gmail.com' }]
    })
    .then((response) => {
      console.log('success', response)
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response)
      })
    })
    .catch((error) => {
      console.log('error', error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}
