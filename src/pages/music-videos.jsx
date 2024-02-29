import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function MusicVideos() {

  return (
    <>
      <h1>Music Videos</h1>
      <YouTubePlaylist
        apiKey="AIzaSyCNCV6xC68ui6fkUvzl4BRNUZWZHm1hWyM"
        playlistId="PL1j9nnHmLnPLyDJgEfaHluGKurnD1AlgH"
        uniqueName="Music Videos"
      />
    </>
  )
}

export default MusicVideos
