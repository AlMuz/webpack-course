import express from 'express'
import path from 'path'

const server = express()

const isProd = process.env.NODE_ENV === "production"
if (!isProd) {
	const webpack = require('webpack')
	const config = require('../../config/webpack-dev')
	
	const compiler = webpack(config)
	
	const webpackHotMiddleware = require('webpack-hot-middleware')(compiler)
	const webpackDevMiddleware = require('webpack-dev-middleware')(
		compiler,
		config.devServer
	)
	
	server.use(webpackDevMiddleware)
	server.use(webpackHotMiddleware)
}

// const staticMiddleware = express.static('dist')
// server.use(staticMiddleware)

const expressStaticGzip = require('express-static-gzip')
server.use(expressStaticGzip('dist', {
	enableBrotli: true
}))

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
	console.log('Server is listening on ', PORT)
})
