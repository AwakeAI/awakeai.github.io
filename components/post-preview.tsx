import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import type Author from "../interfaces/author";
import {Separator} from "./ui/separator";
import cn from "classnames";
import Image from "next/image";
import * as Separator2 from "@radix-ui/react-separator";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  team: boolean;
  i: number;
};

const PostPreview = ({title, coverImage, date, excerpt, author, slug, team, i}: Props) => {
  return (
    <>
      <div className="col-span-3">
      <div className="w-64 md:w-full mb-10 mt-10 md:mb-0 md:mt-0">
        <div className="mb-5 md:w-96 lg:w-max">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
            <Image
              src={coverImage}
              alt={`Cover Image for ${title}`}
              className={cn("h-44 md:w-fit mx-auto w-max dark:invert dark:grayscale", {
                "hover:shadow-lg transition-shadow duration-200": slug,
              })}
              width={250}
              height={250}
              style={{objectFit: "contain"}}
            />
          </Link>
        </div>
        <h3 className="text-3xl mb-3 leading-snug">
          <Link
            as={team ? `/teams/${slug}` : `/posts/${slug}`}
            href={team ? `/teams/[slug]` : `/posts/[slug]`}
            className="hover:underline"
          >
            {title.replace(/\\/g, "<br/>")}
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date}/>
        </div>
        {/*<p className="text-lg leading-relaxed mb-4">{excerpt}</p>*/}
        {/*{author && <Avatar name={excerpt} picture={author.picture}/>}*/}
        <Separator2.Root className="bg-gray-200 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />

      </div>
      </div>
      {(i + 1) % 4 !== 0 && <div> <Separator orientation="vertical"/> </div>}
    </>
  );
};

export default PostPreview;
