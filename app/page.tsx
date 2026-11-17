import ClickToCall from "./components/ClickToCall";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Areas from "./components/Areas";
import Testimonials from "./components/Testimonials";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Hero />
        <About />
        <Services />
        <Areas />
        <Testimonials />
        <Booking />
      </main>
      <ClickToCall />
      <Footer />
    </>
  );
}
