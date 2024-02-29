import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Live() {

  return (
    <>
      <h1>Live Videos</h1>
      <YouTubePlaylist
        apiKey="AIzaSyCNCV6xC68ui6fkUvzl4BRNUZWZHm1hWyM"
        playlistId="PL1j9nnHmLnPI3te3X4QNQw8MkUxl-VwmD"
        uniqueName="LHxC Live"
      />
    </>
  )
}

export default Live
