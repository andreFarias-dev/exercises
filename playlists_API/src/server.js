const express = require("express")
const playlistRoutes = require("./routes")

//config server:
const app = express()
const PORT = 3000

app.use(express.json())
app.use(playlistRoutes)

app.listen(PORT, () => { console.log('server started.') })