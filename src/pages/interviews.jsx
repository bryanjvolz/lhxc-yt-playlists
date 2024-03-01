import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Interviews() {

  return (
    <>
      <h1>Interviews</h1>
      <YouTubePlaylist
        apiKey={import.meta.env.VITE_API_KEY}
        playlistId="PL1j9nnHmLnPIBwdaSjzzYRo7XObIP7DvC"
        uniqueName="Interviews"
      />
    </>
  )
}

export default Interviews
