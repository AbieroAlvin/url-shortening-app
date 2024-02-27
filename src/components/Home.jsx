import AdvancedStats from "./AdvancedStats";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import URLShortener from "./URLShortener";

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <URLShortener />
      <AdvancedStats />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
