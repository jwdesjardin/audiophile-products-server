import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

console.log('server', process.env.SERVER_API_KEY)

const app = express()

express.json()

app.use(cors())


import { PrismaClient } from '@prisma/client'


const prisma = new PrismaClient()


async function main() {


	// Add categories
	await prisma.category.create({
		data: {
			name: '1',
			image: ''
		}
	})
	await prisma.category.create({
		data: {
			name: '2',
			image: ''
		}
	})




	// Add A product
	await prisma.product.create({
		data: {
			name: 'product 1',
			cartName: '',
			description: '',
			features: '',
			cartImage: '',
			galleryImageDesktop1: '',
			galleryImageDesktop2: '',
			galleryImageDesktop3: '',
			galleryImageMobile1: '',
			galleryImageMobile2: '',
			galleryImageMobile3: '',
			galleryImageTablet1: '',
			galleryImageTablet2: '',
			galleryImageTablet3: '',
			mainImageDesktop: '',
			mainImageMobile: '',
			mainImageTablet: '',
			price: 0,
			slug: 'a',
			categoryId: 1 
		}
	})
	await prisma.product.create({
		data: {
			name: 'product 2',
			cartName: '',
			description: '',
			features: '',
			cartImage: '',
			galleryImageDesktop1: '',
			galleryImageDesktop2: '',
			galleryImageDesktop3: '',
			galleryImageMobile1: '',
			galleryImageMobile2: '',
			galleryImageMobile3: '',
			galleryImageTablet1: '',
			galleryImageTablet2: '',
			galleryImageTablet3: '',
			mainImageDesktop: '',
			mainImageMobile: '',
			mainImageTablet: '',
			price: 0,
			slug: 'b',
			categoryId: 1 
		}
	})
	await prisma.product.create({
		data: {
			name: 'product 3',
			cartName: '',
			description: '',
			features: '',
			cartImage: '',
			galleryImageDesktop1: '',
			galleryImageDesktop2: '',
			galleryImageDesktop3: '',
			galleryImageMobile1: '',
			galleryImageMobile2: '',
			galleryImageMobile3: '',
			galleryImageTablet1: '',
			galleryImageTablet2: '',
			galleryImageTablet3: '',
			mainImageDesktop: '',
			mainImageMobile: '',
			mainImageTablet: '',
			price: 0,
			slug: 'c',
			categoryId: 2 
		}
	})

	// Add included items
	await prisma.includedItem.create({
		data: {
			name: 'Stuff',
			quantity: 2,
			productId: 1
		}
	})
	await prisma.includedItem.create({
		data: {
			name: 'Other Stuff',
			quantity: 1,
			productId: 1
		}
	})

	// Add recomendations 
	await prisma.recommendation.create({
		data: {
			name: '',
			image: '',
			slug: '2',
			productId: 1
		}
	})
	await prisma.recommendation.create({
		data: {
			name: '',
			image: '',
			slug: '3',
			productId: 1
		}
	})


	const allProducts = await prisma.product.findMany()
  console.log(allProducts)
	const allCategroies = await prisma.category.findMany()
  console.log(allCategroies)
	const allRecommendations = await prisma.recommendation.findMany()
  console.log(allRecommendations)
}


main()

  .catch((e) => {

    throw e

  })

  .finally(async () => {

    await prisma.$disconnect()

  })

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
