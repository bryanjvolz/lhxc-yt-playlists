import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Audio() {

  return (
    <>
      <h1>Audio</h1>
      <YouTubePlaylist
        apiKey={import.meta.env.VITE_API_KEY}
        playlistId="PL1j9nnHmLnPL8_VZDFCnfoXHI0itxkuqb"
        uniqueName="Louisville Hardcore/Punk/Indie Rock"
      />
    </>
  )
}

export default Audio
