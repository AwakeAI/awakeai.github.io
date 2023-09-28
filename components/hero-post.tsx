import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "../interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({
                    title,
                    coverImage,
                    excerpt,
                    author,
                    slug,
                  }: Props) => {
  return (
    <section id="about">
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:gap-x-4 mb-20 md:mb-15">
        <div>
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h2>
          <div className="space-y-1">
            <h4 className="text-lg font-medium leading-none">By {author.name}</h4>
            <p className="text-lg text-muted-foreground">
              September 2023
            </p>
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
