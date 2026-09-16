const express = require('express')

//config server:
const app = express()
const PORT = 3000
app.use(express.json())

app.listen(PORT, () => { console.log('server started.') })