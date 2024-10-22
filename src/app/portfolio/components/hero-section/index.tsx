import Image from "next/image";
import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import SocialSection from "./social";
import CoderSection from "./coder";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/svg/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello there 👋, <br />
            I&apos;m <span className=" text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <SocialSection />

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <ContactPageIcon sx={{ fontSize: "16px" }} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <DownloadOutlinedIcon sx={{ fontSize: "16px" }} />
            </Link>
          </div>
        </div>

        <CoderSection />
      </div>
    </section>
  );
}
