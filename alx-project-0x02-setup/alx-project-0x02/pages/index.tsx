import Header from '@/components/layout/Header';

export default function IndexPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">مرحبًا بك في مشروع Next.js Project Setup and Basics</h1>
        <p className="text-sm text-gray-700 mb-2">
          هذا المشروع جزء من مهمة SoloForge: Mastering Project Autonomy.
        </p>
        <p className="text-sm text-gray-700">
          استخدم الروابط في الأعلى للتنقل بين الصفحات المختلفة وتجربة المكوّنات.
        </p>
      </main>
    </div>
  );
}
