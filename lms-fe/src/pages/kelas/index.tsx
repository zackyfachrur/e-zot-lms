import Navbar from "@layouts/Navbar";
import HeroSection from "./HeroSection";
// import VideoListSection from "./VideoListSection";
import CardList from "./CardList";
import Footer from "@layouts/Footer";

export default function KelasPages() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CardList/>
      {/* <VideoListSection /> */}
      <Footer />
    </>
  );
};

