import MainPage from "./main/page";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <div className="w-screen overflow-hidden">
      <MainPage />
    </div>
  );
}
