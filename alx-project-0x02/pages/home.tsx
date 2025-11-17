import Head from "next/head";
import { useState } from "react";
import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";
import { PostModalFormValues } from "@interfaces/index";

interface LocalPost extends PostModalFormValues {
  id: number;
}

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localPosts, setLocalPosts] = useState<LocalPost[]>([]);

  const handleAddPost = (values: PostModalFormValues) => {
    setLocalPosts((prev) => [
      ...prev,
      { id: prev.length + 1, ...values }
    ]);
  };

  return (
    <>
      <Head>
        <title>SoloForge | Home</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 space-y-6">
        <section className="mt-4 flex flex-col gap-4 md:flex-row">
          <div className="flex-1 space-y-4">
            <Card
              title="Reusable Components"
              content="This page uses a Card component to display different blocks of content."
            />
            <Card
              title="TypeScript Interfaces"
              content="Component props are strongly typed using TypeScript interfaces."
            />
            <Card
              title="Modal Interaction"
              content="Click the button on the right to open a modal and create a new post."
            />
          </div>
          <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-2">
              Create a quick local post
            </h2>
            <p className="text-sm text-gray-700 mb-4">
              Use the button below to open the modal and add a post to this page
              only.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Open Post Modal
            </button>
          </div>
        </section>

        {localPosts.length > 0 && (
          <section className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-semibold mb-3">Local Posts</h2>
            <div className="space-y-3">
              {localPosts.map((post) => (
                <div key={post.id} className="border-b pb-2 last:border-b-0">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-700">{post.content}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}
