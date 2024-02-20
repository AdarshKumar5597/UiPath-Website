
import ProjectItems1 from "../components/Projects/Projectitems1";
import ProjectItems2 from "../components/Projects/ProjectItems2";
import Navbar from "../layout/main/Navbar";
// import FooterSection from "../components/common/Footer";
// import Footer from "../components/common/Footer";
import ProjectHeading from "../components/Projects/Projectheading";
// import Footer from "../components/common/Footer";
import Footer from "../components/common/Footer.jsx";
export default function ProjectPage(){

    return(
        <>
        <Navbar/>
        <ProjectHeading/>
        <section className="mx-40 pt-10">
<ProjectItems1/>
<ProjectItems2/>
<ProjectItems1/>
</section>
<Footer/>

</>


    );
}