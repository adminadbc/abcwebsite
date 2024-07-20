'use client'
import React from 'react'
import NavBar from "../../../ui/components/navbar";
import ImagesPage from "../../../ui/gallery/imagespage";
import Hero from "../../../ui/gallery/hero";
import Footer from "../../../ui/components/footer";
import Header from "../../../ui/gallery/header";

function GalleryPage() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Header />
      <ImagesPage />
      <Footer />
    </div>
  );
}

export default GalleryPage;