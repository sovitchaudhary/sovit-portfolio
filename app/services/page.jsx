"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Full Stack Web Development",
    description:
      "I am a passionate web developer with both front-end and back-end development. I specialize in creating responsive, user-friendly websites and web applications using HTML, CSS, JavaScript, and frameworks like React. My back-end skills include working with Node.js, Python, and databases such as MySQL and MongoDB. I also have experience in web design, and I develop e-commerce solutions. By integrating SEO best practices and performance optimization techniques, I ensure that my web projects are not only visually appealing but also efficient and search engine-friendly.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "I am dedicated to creating intuitive and engaging digital experiences. My work focuses on understanding user needs and translating them into visually appealing and functional interfaces. I use tools like Adobe XD, Figma, and Sketch to design wireframes, prototypes, and high-fidelity mockups that enhance user satisfaction and interaction. By prioritizing usability, accessibility, and aesthetic appeal, I ensure that every design not only looks great but also provides a seamless and enjoyable user experience. Explore my portfolio to see how my UX/UI designs have improved user engagement and satisfaction across various projects.",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I specialize in creating distinctive and memorable brand identities. My work focuses on developing logos that effectively communicate the essence and values of a brand. With a keen eye for detail and a deep understanding of design principles, I craft logos that are not only visually appealing but also versatile and timeless.",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I am passionate about enhancing online visibility and driving organic traffic to websites. My expertise lies in optimizing website content, structure, and performance to improve search engine rankings. By conducting thorough keyword research, implementing on-page and off-page SEO strategies, and utilizing analytics tools, I ensure that websites achieve higher search engine rankings and attract the right audience.",
  },
  {
    num: "05",
    title: "Trainer",
    description:
      "I am dedicated to empowering individuals with the skills and knowledge they need to excel in the world of programming. With extensive experience in various programming languages and technologies, I provide comprehensive training that caters to both beginners and advanced learners. My approach combines theoretical concepts with practical, hands-on exercises to ensure a deep understanding of programming principles. I strive to create an engaging and supportive learning environment where students can develop their coding skills, solve real-world problems, and build confidence in their abilities.",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group ">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    {service.num}
                  </div>
                  <Link
                    href={service.href || "#"}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl  " />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">{service.title}</h2>
                {/* description */}
                <p className="text-white/60 text-justify">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/30 w-full "></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
