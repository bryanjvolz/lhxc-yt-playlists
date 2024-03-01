import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Live() {

  return (
    <>
      <h1>Live Videos</h1>
      <YouTubePlaylist
        apiKey={import.meta.env.VITE_API_KEY}
        playlistId="PL1j9nnHmLnPI3te3X4QNQw8MkUxl-VwmD"
        uniqueName="LHxC Live"
      />
    </>
  )
}

export default Live
