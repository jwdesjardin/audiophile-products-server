import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

console.log('server', process.env.SERVER_API_KEY)

const app = express()

express.json()

app.use(cors())

app.get('/', (req, res) => {
	try {
		res.send('Welcome to the API')
	} catch (error) {
		console.log('error getting team standings')
	}
})

app.get('/api/heywhatsup', (req, res) => {
	console.log(req)
	res.send('nothing much wbu')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`)
})
