import Image from "next/image";
import Layout from "../../components/common/Layout";
import Hero from "../../components/container/Home/Hero";
import OurProcess from "../../components/container/Home/OurProcess";
import LaunchFromRepo from "../../components/container/Home/LaunchFromRepo";
import ScrollNavbar from "../../components/container/Navbar/ScrollNavbar";
import BuildFastWithTemplates from "../../components/container/Home/BuildFastWithTemplates";
import EditAndOptimize from "../../components/container/Home/EditAndOptimize";
import CTA from "../../components/container/CTA";
import ImageSlider from "../../components/ui/ImageSlider";
import BoostVisibilityDominateGoogle from "../../components/container/Home/BoostVisibilityDominateGoogle";
import ScaleAndCollaborate from "../../components/container/Home/ScaleAndCollaborate";
import HomeFAQs from "../../components/container/Home/FAQs";
import Banner from "../../components/container/Home/Banner";
import KeyFeatures from "../../components/container/Home/KeyFeatures";
import TopSite from "../../components/container/Home/TopSite";
import Compinies from "../../components/container/Home/Compinies";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <KeyFeatures />
      <TopSite />
      <HomeFAQs />
      <Compinies />
      {/* <Hero /> */}
      {/* <OurProcess /> */}
      <ScrollNavbar />
      <LaunchFromRepo id="design-build" />
      <BuildFastWithTemplates id="publish-edit" />
      <EditAndOptimize id="analyze-optimize" />
      <BoostVisibilityDominateGoogle id="scale-collaborate" />
      {/* <ScaleAndCollaborate id="scale-collaborate" /> */}
      {/* <CTA /> */}
      <ImageSlider />
    </Layout>
  );
}
 