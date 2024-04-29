const app = require('./src/app');
const PORT = process.env.SERVER_PORT || 5000

const server = app.listen (PORT, () => {
    console.log(`Server connected in port ${PORT} `)
})

process.on('SIGINT', () => {
    server.close( () => console.log(`Exit!`))
})