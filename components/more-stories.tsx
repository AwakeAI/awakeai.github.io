import PostPreview from "./post-preview";
import type Post from "../interfaces/post";
import {Separator} from "./ui/separator";

type Props = {
  posts: Post[];
};

const MoreStories = ({posts}: Props) => {
  return (
    <section id="activity">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Latest
      </h2>
      <div className="ml-1 mx-auto gap-y-20 md:gap-y-32 mb-32">
        <div className="space-y-1">
          <h4 className="text-lg font-medium leading-none">Of AwakeAI Inc.</h4>
          <p className="text-lg text-muted-foreground">
            Our Latest News and Activities.
          </p>
        </div>
        <Separator className="my-4 mb-10" />
        <div className="mx-auto grid md:grid-flow-col auto-cols-min md:gap-x-8 lg:gap-x-8 sm:content-center justify-center md:justify-start">
          {posts.map((post, i) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              team={false}
              i={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreStories;
