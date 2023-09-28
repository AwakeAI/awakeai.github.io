import {CMS_NAME} from "../lib/constants";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="items-left md:justify-between mt-16 mb-4 md:mb-12">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          style={{ width: "15%", objectFit: "contain" }}
          src="/assets/images/logo/original.png"
          alt="logo"
          className="flex-col"
          width={100}
          height={100}
        />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter md:pr-8">
          {CMS_NAME}
        </h1>
      </div>
      <h4 className="flex-col text-center mt-2 md:mt-0 md:text-right md:text-lg">
        The Next Generation of Computer Vision Platform
      </h4>
      <Separator.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
      <div className="flex h-5 items-center justify-center invisible md:visible">
        <Separator.Root
          className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <Link className="nav-link" href="#about">
          About
        </Link>
        <Separator.Root
          className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <Link className="nav-link" href="#activity">
          Activity
        </Link>
        <Separator.Root
          className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <Link className="nav-link" href="#team">
          Team
        </Link>
        <Separator.Root
          className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <Link className="nav-link" href="#partners">
          Partners
        </Link>
        <Separator.Root
          className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <Link className="nav-link" href="#contact">
          Contact
        </Link>
        <Separator.Root
          className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
      </div>
    </section>
  );
};

export default Intro;
