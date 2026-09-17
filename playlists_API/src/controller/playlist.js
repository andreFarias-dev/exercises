const model = require("../model/playlist")

module.exports = {
  // show playlists: GET /playlists
  showPlaylists: (req, res) => {
    if (model.playlists.length === 0) {
      return res.json({ message: "No playlists added yet." })
    }
    res.json(model.playlists)
  },

  // show playlist: GET /playlists/:id
  showPlaylist: (req, res) => {
    const id = req.params.id
    const result = model.showPlaylist(id)

    if (result === null) return res.status(404).json({
      error: "Playlist not found."
    })

    res.json(result)
  },

  // create playlist: POST /playlists
  createPlaylist: (req, res) => {
    const body = req.body
    const playlist = model.createPlaylist(body)
    res.status(201).json(model.savePlaylist(playlist))
  },
  
  // create song: POST /playlists/:id/songs
  createSong: (req, res) => {
    const { title, year, author, album } = req.body
    const id = req.params.id

    const song = model.createSong(title, year, author, album)

    const result = model.saveSong(id, song)

    if (result === null) return res.status(404).json({
      error: "Playlist not found."
    })

    res.status(201).json(result)
  },

  // update playlist: PUT /playlists/:id
  updatePlaylist: (req, res) => {
    const id = req.params.id
    const update = req.body

    const result = model.updatePlaylist(id, update)

    if (result === null) return res.status(404).json({
      error: "Playlist not found."
    })

    res.json(result)
  },

  // delete playlist: DELETE /playlists/:id
  deletePlaylist: (req, res) => {
    const id = req.params.id
    const result = model.deletePlaylist(id)

    if (result === null) return res.status(404).json({
      error: "Playlist not found."
    })

    res.json(result)
  },

  // delete song: DELETE /playlists/:playlistId/songs/:songId
  deleteSong: (req, res) => {
    const { playlistId, songId } = req.params
    const result = model.deleteSong(playlistId, songId)

    if (result === null) return res.status(404).json({
      error: "Playlist or song not found."
    })

    res.json(result)
  }
}