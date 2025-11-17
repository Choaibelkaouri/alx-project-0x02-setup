import Head from "next/head";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>SoloForge | About</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 mt-4 space-y-6">
        <section className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold mb-2">About This Project</h1>
          <p className="text-gray-700 text-sm">
            This project was created to practice setting up a Next.js
            application with TypeScript and Tailwind CSS, implementing basic
            routing, reusable components, and simple API integration.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Button Variants</h2>
          <div className="flex gap-4 flex-wrap">
            <Button
              label="Small / Rounded-sm"
              size="small"
              shape="rounded-sm"
            />
            <Button
              label="Medium / Rounded-md"
              size="medium"
              shape="rounded-md"
            />
            <Button
              label="Large / Rounded-full"
              size="large"
              shape="rounded-full"
            />
          </div>
        </section>
      </main>
    </>
  );
}
