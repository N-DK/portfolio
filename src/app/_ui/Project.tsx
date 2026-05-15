"use client";

import WrapperContent from "@/app/_ui/WrapperContent";
import WrapperSection from "./WrapperSection";
import Info from "@/components/Info";
import ProjectItem from "@/components/ProjectItem";

export default function Project() {
  return (
    <WrapperSection className="lg:w-[75%] xl:w-[75%]" id="projects">
      <WrapperContent
        title="Projects."
        des="These are my open source projects which are fetched directly from Github. If you're a developer, feel free to make a pull request!"
        info={<Info />}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <ProjectItem
            title="Weather-App"
            des="A weather application that provides weather information for a specific location."
            programmingLanguage="React.js"
            star={10}
            folk={5}
          />
          <ProjectItem
            title="Weather-App"
            des="A weather application that provides weather information for a specific location."
            programmingLanguage="React.js"
            star={10}
            folk={5}
          />
          <ProjectItem
            title="Weather-App"
            des="A weather application that provides weather information for a specific location."
            programmingLanguage="React.js"
            star={10}
            folk={5}
          />
          <ProjectItem
            title="Weather-App"
            des="A weather application that provides weather information for a specific location."
            programmingLanguage="React.js"
            star={10}
            folk={5}
          />
          <ProjectItem
            title="Weather-App"
            des="A weather application that provides weather information for a specific location."
            programmingLanguage="React.js"
            star={10}
            folk={5}
          />
          <ProjectItem
            title="Weather-App"
            des="A weather application that provides weather information for a specific location."
            programmingLanguage="React.js"
            star={10}
            folk={5}
          />
        </div>
      </WrapperContent>
    </WrapperSection>
  );
}
