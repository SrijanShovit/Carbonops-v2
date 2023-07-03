import Hero from "@/components/homepage/Hero";
import Services from "@/components/homepage/Services";
import Graph from "@/components/homepage/Graph";
import Organizations from "@/components/homepage/Organizations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";
export default function Home() {
  return (
    <><div className="w-[95%] mx-auto">
      <GoToTop />
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
       
      </div>
      <div>
        <Services />
      </div>
      <div>
        <Graph />
      </div>
      <div>
        <Organizations />
      </div>
    </div><div>
        <Footer />
      </div></>
  );
}
