import videoFile from "./assets/video.mp4";
import Navbar from "./components/NavBar";
import SideMenu from "./components/SideMenu";

export default function App() {
  return (
    <main className="flex gap-6 max-w-[1048px] w-[90%] mx-5">
      <SideMenu />
      <div className="flex flex-col gap-6 items-center w-full">
        <Navbar />
        <video controls className="rounded-[32px] shadow-addressBar aspect-video">
          <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </main>
  );
}
