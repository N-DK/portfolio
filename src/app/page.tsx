import Profile from "@/app/_ui/Profile";
import React from "react";
import Showcase from "./_ui/Showcase";
import Project from "./_ui/Project";
import Contact from "./_ui/Contact";
import FullPageWrapper from "./_ui/FullPageWrapper";

export default async function Home() {
  return (
    <main>
      <FullPageWrapper>
        <Profile />
        <Showcase />
        <Project />
        <Contact />
      </FullPageWrapper>
    </main>
  );
}
