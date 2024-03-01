import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function Lhxc() {

  return (
    <>
      <h1>Louisville Hardcore.com Uploads</h1>
      <YouTubePlaylist
        apiKey={import.meta.env.VITE_API_KEY}
        playlistId="PL091E99A9C2FE3774"
        uniqueName="Louisville Hardcore/Punk/Indie Rock"
      />
    </>
  )
}

export default Lhxc;
