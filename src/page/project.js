import ProjectItems1 from "../components/Projects/Projectitems1";
import ProjectItems2 from "../components/Projects/ProjectItems2";
import Navbar from "../layout/main/Navbar";
// import FooterSection from "../components/common/Footer";
// import Footer from "../components/common/Footer";
import ProjectHeading from "../components/Projects/Projectheading";
// import Footer from "../components/common/Footer";
import Footer from "../components/common/Footer.jsx";
import { galleryData } from "../data/gallery_data.js";
export default function ProjectPage() {
  return (
    <div className="min-h-[90vh] overflow-x-clip">
      <Navbar />
      <ProjectHeading />
      <div className="h-full pb-20 w-full">
        {galleryData.map((gallery) => {
          return (
            <section className="mx-40 pt-10">
              <h1 className=" border w-full font-semibold text-xl shadow-xl rounded-lg p-4 mb-8">
                ORIENTATION SYNERGY
              </h1>
              <ProjectItems1 photos={[gallery.photos[0], gallery.photos[1]]} />
              <ProjectItems2
                photos={[
                  gallery.photos[2],
                  gallery.photos[3],
                  gallery.photos[4],
                ]}
              />
              {/* <ProjectItems1 /> */}
            </section>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
