import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { Post } from "@interfaces/index";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>SoloForge | Posts</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 mt-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {isLoading && <p>Loading posts...</p>}
        {error && <p className="text-red-600">{error}</p>}
        {!isLoading && !error && (
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
        )}
      </main>
    </>
  );
}
