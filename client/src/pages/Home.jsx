import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features/>
      <Categories/>
      <Footer/>
    </>
  );
}

export default Home;