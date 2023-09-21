import TeamPreview from "./team-preview";
import type Post from "../interfaces/team";
import { Separator } from "./ui/separator";

type Props = {
  posts: Post[];
};

const Teams = ({ posts }: Props) => {
  return (
    <section id="team">
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Team
      </h2>
      <div className="ml-1 mx-auto md:gap-x-8 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <div className="space-y-1">
          <h4 className="text-lg font-medium leading-none">AwakeAI Inc.</h4>
          <p className="text-lg text-muted-foreground">Core Executive Team.</p>
        </div>
        <Separator className="my-4 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-x-8 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <TeamPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              bio={post.bio}
              excerpt={post.excerpt}
              linkedin={post.linkedin}
              email={post.email}
              team={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
