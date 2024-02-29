import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Interviews() {

  return (
    <>
      <h1>Interviews</h1>
      <YouTubePlaylist
        apiKey="AIzaSyCNCV6xC68ui6fkUvzl4BRNUZWZHm1hWyM"
        playlistId="PL1j9nnHmLnPIBwdaSjzzYRo7XObIP7DvC"
        uniqueName="Interviews"
      />
    </>
  )
}

export default Interviews
