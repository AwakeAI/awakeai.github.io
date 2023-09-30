import type Author from "../interfaces/author";
import * as Separator2 from "@radix-ui/react-separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger,} from "./ui/accordion";
import {Linkedin} from "react-feather";
import Image from "next/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  bio: string;
  slug: string;
  team: boolean;
  linkedin: string;
  email: string;
};

function TitleComponent({ title }) {
  const replacedTitle = title.replace(/\\/g, "<br/>");
  return <div dangerouslySetInnerHTML={{ __html: replacedTitle }} />;
}

const TeamPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  bio,
  linkedin,
}: Props) => {
  return (
    <div className="md:ml-0 md:grow lg:w-72 w-60 md:w-40 mb-5 md:mb-0">
      <div className="mb-5">
        <Image
          src={coverImage}
          alt={`Cover Image for ${title}`}
          className="shadow-sm dark:grayscale-[50%]"
          width={1000}
          height={300}
        />
      </div>
      <h3 className="text-3xl leading-snug">
        <TitleComponent title={title} />
      </h3>
      <Separator2.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
      <div className="text">{date}</div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-2">
          <AccordionTrigger>Contact</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-6">
              <a className="col-span-1" href={`${linkedin}`}>
                <Linkedin size={24} />
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Bibliography</AccordionTrigger>
          <AccordionContent>{bio}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TeamPreview;
