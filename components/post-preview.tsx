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
      <div className="mb-5" key={i}>
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
              {title}
            </Link>
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            {excerpt}
          </p>
          <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}
                className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">
            Learn more &rarr;
          </Link>
        </div>
      </div>
  );
};

export default PostPreview;
