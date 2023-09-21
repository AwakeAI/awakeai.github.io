import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";
import { Separator } from "./ui/separator";
import cn from "classnames";
import Image from "next/image";

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

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  team,
  i,
}: Props) => {
  return (
    <>
      <div>
        <div className="mb-5 md:w-[39rem] w-96">
          <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
            <Image
              src={coverImage}
              alt={`Cover Image for ${title}`}
              className={cn("shadow-sm h-32 w-fit rounded-full", {
                "hover:shadow-lg transition-shadow duration-200": slug,
              })}
              width={1300}
              height={300}
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
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div>{i % 2 == 0 && <Separator orientation="vertical" />}</div>
    </>
  );
};

export default PostPreview;
