import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import type Author from '../interfaces/author'
import * as Separator2 from "@radix-ui/react-separator";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "./ui/accordion"
import {Linkedin, Mail} from "react-feather";
import { Separator } from "./ui/separator"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  bio: string
  slug: string
  team: boolean
  linkedin: string
  email: string
}

function TitleComponent({ title }) {
  const replacedTitle = title.replace(/\\/g, '<br/>');
  return <div dangerouslySetInnerHTML={{ __html: replacedTitle }} />;
}

const TeamPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  bio,
  slug,
  linkedin,
  email,
  team
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl leading-snug">
        <Link
          as={team?`/teams/${slug}`:`/posts/${slug}`}
          href={team?`/teams/[slug]`:`/posts/[slug]`}
          className="hover:underline"
        >
          <TitleComponent title={title} />
        </Link>
      </h3>
      <Separator2.Root className="bg-gray-400 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]"/>

      <div className="text">
        {date}
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      {author && <Avatar name={author.name} picture={author.picture} />}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-2">
          <AccordionTrigger>Contact</AccordionTrigger>
          <AccordionContent>
            <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-6">
              <a className="col-span-1" href={`${linkedin}`}>
                <Linkedin size={24} />
                Linkedin
              </a>
              <Separator className="col-span-1 mx-auto" orientation="vertical" />
              <a className="col-span-4" href={"mailto:" + `${email}`}>
                <Mail size={24} />
                {email}
              </a>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1">
          <AccordionTrigger>Bibliography</AccordionTrigger>
          <AccordionContent>
            {bio}
          </AccordionContent>
        </AccordionItem>

      </Accordion>
    </div>
  )
}

export default TeamPreview
