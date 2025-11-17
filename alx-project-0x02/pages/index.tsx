import Head from "next/head";
import Link from "next/link";
import Header from "../components/layout/Header";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>SoloForge | Welcome</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4">
        <section className="bg-white rounded-lg shadow p-8 mt-4 text-center">
          <h1 className="text-2xl font-bold mb-4">
            Welcome to the Next.js Project Setup and Basics
          </h1>
          <p className="text-gray-700 mb-4">
            This application demonstrates routing, reusable components, modal
            interactions, and API data fetching using Next.js, TypeScript, and
            Tailwind CSS.
          </p>
          <Link href="/home" className="text-blue-600 hover:underline">
            Go to Home page
          </Link>
        </section>
      </main>
    </>
  );
}
