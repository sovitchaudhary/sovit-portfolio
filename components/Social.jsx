import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/sovitchaudhary",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/sovit-chaudhary-81167a213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  // {
  //   icon: <FaYoutube />,
  //   path: "",
  // },
  {
    icon: <FaTwitter />,
    path: "https://x.com/sovit_chaudhary?t=7WSPrakgtVvv0ytbmXKWJA&s=09",
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconsStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
