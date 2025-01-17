"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaAngular,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
    title: "About me",
    description:
      "I am Persuing Bachelor of Technology in Computer Science and Engineering 4th year. I am Passionate on Software developer who is passionate about building technology to elevate people, making contributing to the open-source more approachable and building community, online and offline.",
    info: [
      {
        fieldName: "Name",
        fieldValue: "Sovit Chaudhary",
      },
      {
        fieldName: "Phone",
        fieldValue: "(+91) 8077996348",
      },
      {
        fieldName: "Email",
        fieldValue: "sovitchaudhary45@gmail.com",
      },
      {
        fieldName: "Nationality",
        fieldValue: "Nepalese",
      },
      {
        fieldName: "Languages",
        fieldValue: "English, Hindi, Nepali",
      },
      

    ],
};

//experience data
const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I specialize in creating robust and scalable solutions that meet the unique needs of businesses and users alike. With expertise in programming languages such as Python, JavaScript, and Java, I develop efficient applications that streamline processes and enhance productivity. My skills encompass both front-end and back-end development, allowing me to design intuitive user interfaces and implement complex server-side logic. By leveraging best practices in software architecture, version control, and testing, I ensure the delivery of high-quality software products that meet industry standards. Explore my portfolio to see examples of my work and discover how I can contribute to your next software project.",
  items: [
    {
      company: "Systecks Solutions LLP.",
      position: "SQL Developer Intern",
      duration: "Jun 2024 - Present",
    },
    {
      company: "Ritusha Consultants Pvt. Ltd.",
      position: "Full Stack Web Development",
      duration: "Jan 2024 - Mar 2024",
    },
    {
      company: "Broadway Infosys",
      position: "Mern Stack Developer",
      duration: "Jul 2023 - Oct 2023",
    },
    {
      company: "Bharat Intern",
      position: "Full Stack Development",
      duration: "Summer 2023",
    },
    {
      company: "Broadway Infosys",
      position: "PHP Developer",
      duration: "Jul 2020 - Sep 2020",
    },
    {
      company: "Broadway Infosys",
      position: "Frontend Developer",
      duration: "Jul 2020 - Sep 2020",
    },
  ],
};

//education data
const education = {
  icon: "",
  title: "My education",
  description:
    "Currently, I am Persuing Bachlor in Technology in Computer Science and Emgineering. ",
  items: [
    {
      institution: "Tula's Institute, Dehradun",
      degree: "Bachlor in Technology in Computer Science and Engineering ",
      duration: "2021 - 2025",
    },
    {
      institution: "CT Polytechnic College, Pubjab",
      degree: "Diploma in Information Technology ",
      duration: "2018 - 2021",
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description:
    "I am a skilled professional adept in programming with Python, JavaScript (Node.js, React.js), and Java. My expertise extends to web development using HTML, CSS, and responsive design principles. In UX/UI design, I utilize Adobe XD and Figma to create intuitive and visually appealing interfaces. I also specialize in SEO, implementing strategies for on-page and off-page optimization, keyword research, and improving online visibility. With proficiency in e-commerce platforms like Shopify and WordPress, along with database management (MySQL, MongoDB) and agile methodologies (Scrum, Git), I deliver comprehensive solutions that meet client needs and industry standards.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaWordpress />,
      name: "Wordpress",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaAngular />,
      name: "Anguler",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.Js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[700px] text-justify text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#3a3a43] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[60px] text-left lg:text-left ">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                            <p className="w-[300px]">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[650px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] ">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#3a3a43] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full mt-6 bg-accent "></span>
                            <p className="text-white/60 w-[300px] pt-6">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[700px] text-white/60 text-justify mx-auto xl:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-accent-hover">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0 text-justify ">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-1 gap-y-6 max-w-[900px] mx-auto xl:mx-0">
                  {about.info.map((item, index)=>{
                    return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
