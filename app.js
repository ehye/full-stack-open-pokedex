import express, { static as static_express } from 'express'
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(static_express('dist'))

app.listen(PORT, () => {})
