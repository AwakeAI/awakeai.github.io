import Container from './container'
import {EXAMPLE_PATH} from '../lib/constants'
import {Linkedin, Mail, MapPin} from "react-feather";
import {t} from "i18next";
import * as Separator from "@radix-ui/react-separator";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="grid grid-flow-col-dense mt-16 mb-16">
          <img src="/assets/blog/authors/Grayscale.png"
               alt="logo"
               style={{objectFit: "contain"}}
               className="col-span-1 h-24 w-fit"
          />
          <Separator.Root
            className="col-span-1 bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
            decorative
            orientation="vertical"
          />
          <div className="col-span-3 w-full h-full mx-auto">
            <div className="text-2xl leading-5 font-bold">AwakeAI Inc.</div>
            <div className="leading-5">A Montreal and Mila Startup.</div>
            <Separator.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
            <div className="flex h-5 items-center mt-7">
              <div className="leading-5">
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
              <div className="leading-5">
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
              <div className="leading-5">
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
  )
}

export default Footer