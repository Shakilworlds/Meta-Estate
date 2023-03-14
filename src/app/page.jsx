import AboutUs from "@/components/About/AboutUs";
import Banner from "@/components/Banner/Banner";
import Faq from "@/components/FAQ/Faq";
import Footer from "@/components/Footer/Footer";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Servicess/Services";
import Testimonia from "@/components/Testimonial/Testimonia";

export default function Home() {
  return (
    <main>
      <Banner/>
      <AboutUs/>
      <Services/>
      <Portfolio/>
      <Faq/>
      <Testimonia/>
      <Footer/>
    </main>
  );
}
