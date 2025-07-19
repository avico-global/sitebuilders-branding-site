import Image from "next/image";
import Layout from "../../components/common/Layout";
import Hero from "../../components/container/Home/Hero";
import OurProcess from "../../components/container/Home/OurProcess";
import DesignBuild from "../../components/container/Home/DesignBuild";
import ScrollNavbar from "../../components/container/Navbar/ScrollNavbar";
import PublishEdit from "../../components/container/Home/PublishEdit";
import AnalyzeOptimize from "../../components/container/Home/AnalyzeOptimize";
import ScaleCollaborate from "../../components/container/Home/ScaleCollaborate";
import CTA from "../../components/container/CTA";
import ImageSlider from "../../components/ui/ImageSlider";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <OurProcess />
      <ScrollNavbar />
      <DesignBuild id="design-build" />
      <PublishEdit id="publish-edit" />
      <AnalyzeOptimize id="analyze-optimize" />
      <ScaleCollaborate id="scale-collaborate" />
      <CTA />
      <ImageSlider />
    </Layout>
  );
}
 