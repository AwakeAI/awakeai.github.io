import PostPreview from './post-preview'
import type Post from '../interfaces/post'
import {Separator} from "./ui/separator";

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Latest
      </h2>
      <div className="ml-1 mx-auto md:gap-x-8 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
        <Separator className="my-4 mb-10"/>
        <div className="space-y-1">
          <h4 className="text-lg font-medium leading-none">AwakeAI Inc.</h4>
          <p className="text-lg text-muted-foreground">
            Our collaborators and affiliates.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 lg:gap-x-8 gap-y-20 md:gap-y-32 mb-32">
          {posts.map((post) => (
            <PostPreview
              key={post.slug}
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
              team={false}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MoreStories
