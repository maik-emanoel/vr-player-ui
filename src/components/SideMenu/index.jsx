import {
  FolderSimpleStar,
  MagnifyingGlass,
  PauseCircle,
  PersonArmsSpread,
  PlayCircle,
  SpeakerHigh,
} from "@phosphor-icons/react";
import { useState, useRef } from "react";

// eslint-disable-next-line react/prop-types
export default function SideMenu({ handlePlayPause, isPlaying }) {
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef(null);

  function handleShowVolume() {
    clearTimeout(timeoutRef.current);
    setIsVisible(true);
  }

  function handleHideVolume() {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Tempo em milissegundos para ocultar o input range após o mouse sair
  }

  return (
    <div className="flex items-center md:justify-center">
      <div className="p-3 rounded-full bg-white-10 shadow-3xl backdrop-blur-lg text-white-80 flex flex-col gap-3 h-fit md:flex-row">
        {isPlaying ? (
          <PauseCircle size={40} className="icon" onClick={handlePlayPause} />
        ) : (
          <PlayCircle size={40} className="icon" onClick={handlePlayPause} />
        )}
        <div
          className="relative"
          onMouseEnter={handleShowVolume}
          onMouseLeave={handleHideVolume}
        >
          <SpeakerHigh size={40} className="icon" />
          {isVisible && (
            <div className="p-2 rounded-full bg-white-10 shadow-3xl backdrop-blur-lg text-white-80 flex absolute top-[50%] translate-y-[-50%] left-[150%] md:-top-full md:left-[50%] md:translate-x-[-50%]">
              <input type="range" id="volumeRange" className="cursor-pointer" />
            </div>
          )}
        </div>
        <PersonArmsSpread size={40} className="icon" />
        <FolderSimpleStar size={40} className="icon" />
        <MagnifyingGlass size={40} className="icon" />
      </div>
    </div>
  );
}
