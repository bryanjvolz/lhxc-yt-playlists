import React from 'react'
import ReactDOM from 'react-dom/client'
import Audio from './pages/audio.jsx'
import LHXC from './pages/lhxc.jsx'
import Interviews from './pages/interviews.jsx'
import MusicVideos from './pages/music-videos.jsx'
import Live from './pages/live.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Live />,
      },
      {
        path: "audio/",
        element: <Audio />,
      },
      {
        path: "lhxc/",
        element: <LHXC />,
      },
      {
        path: "interviews/",
        element: <Interviews />,
      },
      {
        path: "music-videos/",
        element: <MusicVideos />,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)