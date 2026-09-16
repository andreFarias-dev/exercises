const express = require("express")
const controller = require("./controller/playlist.js")
const router = express.Router()

// routes: GET
router.get("/playlists", controller.showPlaylists)
router.get("/playlists/:id", controller.showPlaylist)

// routes: POST 
router.post("/playlists", controller.createPlaylist)
router.post("/playlists/:id/songs", controller.createSong)

// routes: PUT
router.put("/playlists/:id", controller.updatePlaylist)

// routes: DELETE
router.delete("/playlists/:id", controller.deletePlaylist)
router.delete("/playlists/:playlistId/songs/:songId", controller.deleteSong)

module.exports = router