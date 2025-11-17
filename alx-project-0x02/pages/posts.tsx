import Head from "next/head";
import type { GetStaticProps } from "next";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type Post } from "@/interfaces";

interface PostsPageProps {
  posts: Post[];
}

export const getStaticProps: GetStaticProps<PostsPageProps> = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );

  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Head>
        <title>SoloForge | Posts</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}
