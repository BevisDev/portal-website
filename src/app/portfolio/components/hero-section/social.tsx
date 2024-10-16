import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";

export default function SocialSection() {
    return (
      <section className="my-12 flex items-center gap-5">
        <Link
          href={personalData.github}
          target="_blank"
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          {/* <BsGithub size={30} /> */}
        </Link>
        <Link
          href={personalData.linkedIn}
          target="_blank"
          className="transition-all text-pink-500 hover:scale-125 duration-300"
        >
          {/* <BsLinkedin size={30} /> */}
        </Link>
        <Link
            href={personalData.telegram}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            {/* <BsTelegram size={30} /> */}
          </Link>
        <Link
            href={personalData.zalo}
            target='_blank'
            className="transition-all text-pink-500 hover:scale-125 duration-300"
          >
            {/* <SiZalo size={30} /> */}
          </Link>
      </section>
    );
  };
  
  