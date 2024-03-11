import Navbar from "../layout/main/Navbar";
import Footer from "../components/common/Footer.jsx";
import ProjectHeading from "../components/Projects/Projectheading";
export default function Projects() {
  return (
    <div className="h-[50vh] overflow-x-clip">
      <Navbar />
      <div className="w-full h-[50vh] text-center bg-[#fedad3] text-black font-bold pt-40 p-20">
        <h1 className="text-5xl"> Our Projects</h1>
      </div>
      <div className="h-full pb-20 w-full"></div>
      <Footer />
    </div>
  );
}
