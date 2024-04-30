import MainPage from "./main/page";
import Navbar from "../app/ui/components/navbar"
import { fetchPublication } from "./ui/components/getHashnode";
import { fetchVideos } from "./ui/components/updateAlgolia"

export default function Home() {
  fetchPublication()
  fetchVideos()
  return (
    <div className="w-screen overflow-hidden">
      <Navbar />
      <MainPage />
    </div>
  );
}
