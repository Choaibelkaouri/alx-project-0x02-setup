import Head from "next/head";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>SoloForge | Home</title>
      </Head>
      <Header />
      <main className="container mx-auto px-4 mt-4 space-y-4">
        <Card
          title="Reusable Components"
          content="This page uses a Card component to display different blocks of content."
        />
        <Card
          title="TypeScript Interfaces"
          content="Component props are strongly typed using TypeScript interfaces."
        />
        <Card
          title="Tailwind Styling"
          content="Each card is styled using Tailwind utility classes."
        />
      </main>
    </>
  );
}
