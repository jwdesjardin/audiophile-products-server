import express from 'express'

export const notFound = (req: express.Request, res: express.Response, next: any) => {
	const error = new Error(`Not Found - ${req.originalUrl}`)
	res.status(404)
	next(error)
}

export const errorHandler = (err: any, req: express.Request, res: express.Response, next: any) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode
	res.status(statusCode)
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	})
}
