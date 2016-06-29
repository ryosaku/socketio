var express = require('express')
var io      = require('socket.io')()
var app     = express()

app.engine('html', require('ejs').renderFile)
app.get('/', (req, res) => res.render('index.html') )
io.listen(app.listen(4000))

io.on('connection', socket => {
	socket.send('Welcome to our chat system')

	socket.on('message', m => {
		socket.broadcast.send(m)
	})
	socket.on('disconnect', () => {})
})
