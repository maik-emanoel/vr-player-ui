import { useRef, useState } from "react";
import videoFile from "./assets/video.mp4";
import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  function handlePlayPause() {
    setIsPlaying((prevState) => !prevState)

      if(isPlaying) {
        videoRef.current.pause()
        document.querySelector('#root').style.backdropFilter = 'none'
      } else {
        videoRef.current.play()
        document.querySelector('#root').style.backdropFilter = 'brightness(.3)'
      }
  }

  return (
    <main className="flex gap-6 max-w-[1048px] w-[90%] mx-5 md:flex-col">
      <SideMenu  handlePlayPause={handlePlayPause} isPlaying={isPlaying} videoRef={videoRef} />
      <div className="flex flex-col gap-6 items-center w-full md:-order-1">
        <Navbar />
        <video className="rounded-[32px] shadow-addressBar aspect-video pointer-events-none" ref={videoRef}>
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
