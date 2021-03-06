import React from "react";
import HeroSection from "./../../components/HeroSection";
import CtaSection2 from "./../../components/CtaSection2";
import ContentCardsSection from "./../../components/ContentCardsSection";
import CtaSection from "./../../components/CtaSection";
import CreateProject from './../../coreComponents/CreateProject';
import { useRouter } from "./../../util/router.js";
import "./styles.scss";


function HomePage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        color="white"
        size="medium"
        title="Reward plastic free initiatives"
        subtitle="The world need heroes like you that contribue to projects that help get rid of plastic"
        buttonText="Browse Projects"
        image="/landscapes/svg/mountains-1.svg"
        buttonOnClick={() => {
          router.push("/");
        }}
      />
      <CtaSection2
        color="dark"
        size="medium"
        title="Save the world and become a Hero"
        buttonText="Show me the projects"
        buttonOnClick={() => {
          router.push("/");
        }}
      />
      <ContentCardsSection
        color="white"
        size="medium"
        title="Projects"
        subtitle=""
      />
      <CreateProject />
      <CtaSection
        color="primary"
        size="medium"
        title="Ready to get started?"
        subtitle=""
        buttonText="Get Started"
        buttonOnClick={() => {
          router.push("/");
        }}
      />
    </>
  );
}

export default HomePage;
