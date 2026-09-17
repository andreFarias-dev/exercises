const playlists = []

const model = {
  playlists,

  // PLAYLIST FUNCTIONS:
  // create
  createPlaylist(name, ...tags) {
    return {
      id: Date.now().toString(),
      name: name,
      tags: tags,
      songs: []
    }
  },

  // save
  savePlaylist(playlist) {
    playlists.push(playlist)
    return playlists
  },

  // update
  updatePlaylist(id, update) {
    const index = this.findIndex(id)
    if (index === -1) return null

    playlists[index] = {
      ...playlists[index],
      ...update
    }
    return playlists[index]
  },

  // delete
  deletePlaylist(id) {
    const index = this.findIndex(id)
    if (index === -1) return null

    return playlists.splice(index, 1)[0]
  },

  // show
  showPlaylist(id) {
    const index = this.findIndex(id)
    if (index === -1) return null
    return playlists[index]
  },

  // SONG FUNCTIONS:
  // create
  createSong(title, year, author, album) {
    return {
      id: Date.now().toString(),
      title: title,
      year: year,
      author: author,
      album: album
    }
  },

  // save
  saveSong(playlistId, song) {
    const index = this.findIndex(playlistId)

    if (index === -1) return null

    playlists[index].songs.push(song)
    return playlists[index]
  },

  // delete
  deleteSong(playlistId, songId) {
    const playlistIndex = this.findIndex(playlistId)
    if (playlistIndex === -1) return null

    const songIndex = playlists[playlistIndex].songs.findIndex(song => song.id === songId)
    if (songIndex === -1) return null

    return playlists[playlistIndex].songs.splice(songIndex, 1)[0]
  },

  // UTILITY FUNCTIONS:

  findIndex(id) {
    return playlists.findIndex(playlist => playlist.id === id)
  }
}

module.exports = model  