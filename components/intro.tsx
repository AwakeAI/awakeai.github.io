import {CMS_NAME} from "../lib/constants";
import Link from "next/link";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";
import {useTheme} from 'next-themes'
import {useEffect, useState} from "react";
import {MoonIcon, SunIcon} from "@radix-ui/react-icons";
import {Button} from "./ui/button";

const Intro = () => {
  const {theme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <section className="items-left md:justify-between md:mt-16 mt-6 mb-4 md:mb-12">
      <div className="flex flex-col md:flex-row items-center">
        <Image
          src="/assets/images/logo/original.png"
          alt="logo"
          className="flex-col md:mb-0 mb-5 md:w-2/12 w-5/12"
          width={200}
          height={200}
        />
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter md:pr-8">
          {CMS_NAME}
        </h1>
      </div>
      <h4 className="flex-col text-center mt-2 md:mt-0 md:text-right md:text-lg">
        The Next Generation of Computer Vision Platform
        <Button className="md:invisible visible" variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          <SunIcon className="h-[1.0rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.0rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </h4>
      <Separator.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
      <div className="flex h-5 items-center justify-center invisible md:visible w-0 md:w-full">
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

        <Button variant="ghost" size="icon" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>

          <SunIcon className="h-[1.0rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.0rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </section>
  );
};

export default Intro;
