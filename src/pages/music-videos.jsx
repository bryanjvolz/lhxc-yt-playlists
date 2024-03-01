import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function MusicVideos() {

  return (
    <>
      <h1>Music Videos</h1>
      <YouTubePlaylist
        apiKey={import.meta.env.VITE_API_KEY}
        playlistId="PL1j9nnHmLnPLyDJgEfaHluGKurnD1AlgH"
        uniqueName="Music Videos"
      />
    </>
  )
}

export default MusicVideos
