import ProjectItems1 from "../components/Projects/Projectitems1";
import ProjectItems2 from "../components/Projects/ProjectItems2";
import Navbar from "../layout/main/Navbar";
// import FooterSection from "../components/common/Footer";
// import Footer from "../components/common/Footer";
import ProjectHeading from "../components/Projects/Projectheading";
// import Footer from "../components/common/Footer";
import Footer from "../components/common/Footer.jsx";
import { galleryData } from "../data/gallery_data.js";
export default function GalleryOne() {
  return (
    <div className="min-h-[90vh] overflow-x-clip">
      <Navbar />
      <div className="h-full pb-20 w-full">
        <div className="w-full text-center bg-[#fedad3] text-black font-bold pt-40 p-20">
          <h1 className="text-5xl">{galleryData[0].title}</h1>
        </div>
        <section className="md:mx-40 mx-4 pt-10">
          <div className="mx-10 flex flex-col md:flex-row flex-wrap justify-items-center items-center">
            {galleryData[0].photos.map((photo) => {
              console.log(photo);
              return (
                <div className=" sm:w-1/2 sm:h-1/2 md:w-1/3 md:h-1/3 h-full w-full">
                  <img
                    className="p-1 object-contain h-full w-full"
                    src={photo}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
