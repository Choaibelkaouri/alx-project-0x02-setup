import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import Button from '@/components/common/Button';

interface LocalPost {
  id: number;
  title: string;
  content: string;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<LocalPost[]>([]);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prev) => [
      ...prev,
      { id: prev.length + 1, title, content }
    ]);
  };

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-2">Home Page</h1>
        <p className="text-sm text-gray-700 mb-4">
          هذه الصفحة تستخدم مكوّنات Card و PostModal لتجربة المكوّنات التفاعلية.
        </p>

        <Card
          title="مكوّن Card قابل لإعادة الاستخدام"
          content="يمكنك تمرير عنوان ومحتوى مختلفين لهذا المكوّن وإعادة استخدامه في عدة أماكن."
        />

        <div className="mt-6">
          <Button
            label="إضافة منشور جديد"
            size="medium"
            shape="rounded-full"
            onClick={() => setIsModalOpen(true)}
          />
        </div>

        <section className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold">المنشورات المضافة:</h2>
          {posts.length === 0 && (
            <p className="text-sm text-gray-500">لا توجد منشورات بعد، جرّب إضافة واحد.</p>
          )}
          {posts.map((post) => (
            <Card key={post.id} title={post.title} content={post.content} />
          )}
        </section>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </div>
  );
}
