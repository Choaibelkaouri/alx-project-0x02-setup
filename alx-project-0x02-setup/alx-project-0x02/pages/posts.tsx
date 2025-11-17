import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { Post } from '@/interfaces';
import { GetServerSideProps } from 'next';

interface PostsPageProps {
  posts: Post[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p className="text-sm text-gray-700 mb-4">
          يتم جلب المنشورات من JSONPlaceholder API وعرضها باستخدام مكوّن PostCard.
        </p>
        <div className="space-y-3">
          {posts.slice(0, 10).map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PostsPageProps> = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts
    }
  };
};
