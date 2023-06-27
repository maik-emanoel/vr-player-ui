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

export default function Navbar() {
  function handleRefresh() {
    window.location.reload()
  }

  return (
    <div className="py-2 px-3 rounded-full bg-white-10 shadow-3xl backdrop-blur-lg flex gap-6 text-white-80 max-w-[816px] w-full">
      <div className="flex gap-4 items-center">
        <SidebarSimple size={40} className="icon" />
        <CaretLeft size={40} className="icon" />
        <CaretRight size={40} className="icon" />
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
        <ArrowClockwise size={24} className="active:scale-95 cursor-pointer" onClick={handleRefresh} />
      </div>
      <div className="flex gap-4 items-center">
        <Export size={40} className="icon" />
        <Plus size={40} className="icon" />
        <Copy size={40} className="icon" />
      </div>
    </div>
  );
}
