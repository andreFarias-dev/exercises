const model = require("../model/playlist")

module.exports = {
  // show playlists: GET /playlists
  showPlaylists: (req, res) => {
    res.json(model.playlists)
  },

  // show playlist: GET /playlists/:id
  showPlaylist: (req, res) => {
    const id = req.params.id
    res.json(model.showPlaylist(id))
  },

  // create playlist: POST /playlists
  createPlaylist: (req, res) => {
    const { name, tags } = req.body
    const playlist = model.createPlaylist(name, ...tags)
    res.json(model.savePlaylist(playlist))
  },
  
  // create song: POST /playlists/:id/songs
  createSong: (req, res) => {
    const { title, year, author, album } = req.body
    const id = req.params.id

    const song = model.createSong(title, year, author, album)
    res.json(model.saveSong(id, song))
  },

  // update playlist: PUT /playlists/:id
  updatePlaylist: (req, res) => {
    const id = req.params.id
    const update = req.body

    res.json(model.updatePlaylist(id, update))
  },

  // delete playlist: DELETE /playlists/:id
  deletePlaylist: (req, res) => {
    const id = req.params.id
    res.json(model.deletePlaylist(id))
  },

  // delete song: DELETE /playlists/:playlistId/songs/:songId
  deleteSong: (req, res) => {
    const { playlistId, songId } = req.params
    res.json(model.deleteSong(playlistId, songId))
  }
}