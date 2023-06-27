import { FolderSimpleStar, MagnifyingGlass, PersonArmsSpread, PlayCircle } from "@phosphor-icons/react";

// eslint-disable-next-line react/prop-types
export default function SideMenu( {handlePlayPause} ) {
    return (
        <div className="flex items-center">
            <div className="p-3 rounded-full bg-white-10 shadow-3xl backdrop-blur-lg text-white-80 flex flex-col gap-3 h-fit">
                <PlayCircle size={40} className="icon" onClick={handlePlayPause}/>
                <PersonArmsSpread size={40} className="icon" />
                <FolderSimpleStar size={40} className="icon" />
                <MagnifyingGlass size={40} className="icon" />
            </div>
        </div>
    )
}