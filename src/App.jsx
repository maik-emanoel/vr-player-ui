import {
  ArrowClockwise,
  CaretLeft,
  CaretRight,
  Copy,
  Export,
  LockSimple,
  Plus,
  SidebarSimple,
  TextAa,
} from "@phosphor-icons/react";
import videoFile from "./assets/video.mp4";

export default function App() {
  return (
    <main className="flex gap-6 max-w-[1048px] w-full">
      <div>dsfds</div>
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="py-2 px-3 rounded-full bg-white-10 shadow-3xl backdrop-blur-lg flex gap-6 text-white-80 max-w-[816px] w-full">
          <div className="flex gap-4 items-center">
            <SidebarSimple
              size={40}
              className="p-2 rounded-full hover:bg-white-20 hover:text-white-100"
            />
            <CaretLeft
              size={40}
              className="p-2 rounded-full hover:bg-white-20 hover:text-white-100"
            />
            <CaretRight
              size={40}
              className="p-2 rounded-full hover:bg-white-20 hover:text-white-100"
            />
          </div>
          <div className="p-3 flex items-center shadow-addressBar rounded-full max-w-[440px] w-full justify-between bg-black-10">
            <TextAa />
            <div className="flex items-center gap-1">
              <LockSimple weight="fill" />
              <input
                type="text"
                className="bg-transparent outline-none w-[110px]"
                value="rocketseat.com"
                readOnly
              />
            </div>
            <ArrowClockwise size={24} />
          </div>
          <div className="flex gap-4 items-center">
            <Export
              size={40}
              className="p-2 rounded-full hover:bg-white-20 hover:text-white-100"
            />
            <Plus
              size={40}
              className="p-2 rounded-full hover:bg-white-20 hover:text-white-100"
            />
            <Copy
              size={40}
              className="p-2 rounded-full hover:bg-white-20 hover:text-white-100"
            />
          </div>
        </div>
        <video controls className="w-96">
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
