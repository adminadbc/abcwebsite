'use client'
import React from 'react'
import NavBar from "@/app/ui/components/navbar";
// import ImagesPage from "@/app/ui/gallery/imagespage";
import Hero from "@/app/ui/gallery/hero";
import GalleryWidget from "@/app/ui/about/gallery";
import Footer from "@/app/ui/components/footer";
import Header from "@/app/ui/gallery/header";

function GalleryPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Header />
      {/* <ImagesPage /> */}
      <GalleryWidget />
      <Footer />
    </div>
  );
}

export default GalleryPage;