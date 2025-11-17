import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type Post } from "@/interfaces";

export default function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        if (!res.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err: any) {
        setError(err.message ||
