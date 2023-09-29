import Container from "./container";
import {Linkedin, Mail, MapPin} from "react-feather";
import * as Separator from "@radix-ui/react-separator";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="mt-16 mb-16 grid md:grid-flow-col md:gap-x-8 lg:gap-x-8 sm:content-center justify-center mr-2">
        <div className="md:col-span-1 md:h-24 md:w-fit w-full col-span-4 mb-10 md:mb-0">
          <Image
            src="/assets/images/logo/grayscale.png"
            style={{ objectFit: "contain" }}
            alt="logo-grey"
            className="mx-auto flex-col"
            width={100}
            height={100}
          />
        </div>
        <Separator.Root
          className="invisible md:visible md:col-span-1 bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
          decorative
          orientation="vertical"
        />
        <div className="md:col-span-3 md:w-full h-full mx-auto justify-center">
            <div className="text-2xl leading-5 font-bold">AwakeAI Inc.</div>
            <div className="leading-5">Care All the Time, Anywhere.</div>
            <Separator.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
            <div className="md:flex grid h-5 items-center mt-7 w-40 md:w-full mb-20 md:mb-0">
              <div className="leading-5 mb-3">
                <div className="icon">
                  <Linkedin size={16} />
                  <a href="https://ca.linkedin.com/company/awakeai">
                    AwakeAI Inc.
                  </a>
                </div>
              </div>
              <Separator.Root
                className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                decorative
                orientation="vertical"
              />
              <div className="leading-5 mb-3">
                <div className="icon">
                  <MapPin size={16} />
                </div>
                Montreal, Canada
              </div>
              <Separator.Root
                className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
                decorative
                orientation="vertical"
              />
              <div className="leading-5 mb-3">
                <div className="icon">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@awakeai.ca">info@awakeai.ca</a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex-row text-center mb-5">
          <p>Copyright &copy; 2023. AwakeAI Inc. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
