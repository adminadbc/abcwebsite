import React from 'react'
import NavBar from "../../../ui/components/navbar";
import ImagesPage from "./imagespage";
import Hero from "../../../ui/gallery/hero";
import Footer from "../../../ui/components/footer";

function GalleryPage() {
  return (
    <div>
      <NavBar />
      <Hero />
<ImagesPage />
      <Footer />
    </div>
  );
}

export default GalleryPage;