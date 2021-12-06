const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRID_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const requestLogger = (req, _res, next) => {
  console.log(`Request recieved: ${req.method} - ${req.url}`)
  next()
}

app.use(requestLogger)

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.post('/send', (req, res) => {
  const emailContent = req.body

  const msg = {
    to: emailContent.to,
    from: emailContent.from,
    subject: emailContent.subject,
    text: emailContent.text,
  }
  
  console.log(`Email to send: ${msg}`)

  sendgrid
    .send(msg)
    .then(() => {
      console.log('Email sent!')
    })
    .catch((error) => {
      console.error(error)
    })
  
  res.send('Email sent!')
})

app.listen(port, () => {
  console.log(`👂 Listening on http://localhost:${port}`)
})