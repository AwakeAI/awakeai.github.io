import Container from "../components/container";
import MoreStories from "../components/more-stories";
import TeamPost from "../components/team";
import HeroPost from "../components/hero-post";
import CollPost from "../components/collaborator";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts, getAllTeams } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../interfaces/post";
import Team from "../interfaces/team";
// import Coll from '../interfaces/collaborator'

type Props = {
  allPosts: Post[];
  allTeams: Team[];
  // allColls: Coll[]
};

export default function Index({ allPosts, allTeams }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  const teamPosts = allTeams;
  return (
    <Layout>
      <Head>
        <title>{`${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        {teamPosts.length > 0 && <TeamPost posts={teamPosts} />}
        <CollPost />
      </Container>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const allTeams = getAllTeams([
    "id",
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "bio",
    "linkedin",
    "email",
  ]);

  return {
    props: { allPosts, allTeams },
  };
};
