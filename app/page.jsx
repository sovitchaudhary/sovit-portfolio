import { Button } from "@/components/ui/button";
import { FiDownload, FileDownload } from "react-icons/fi";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

import resume from "../public/sovit_chaudhary.pdf";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container max-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Sovit Chaudhary</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              I am Persuing Bachelor of Technology in Computer Science and Engineering 4th year. I
              am Passionate on Software developer who is passionate about building technology to
              elevate people, making contributing to the open-source more approachable and building
              community, online and offline.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a href={resume} download="sovit_resume.pdf">
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconsStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-8">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
