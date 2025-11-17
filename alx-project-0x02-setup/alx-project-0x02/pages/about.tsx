import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>
        <p className="text-sm text-gray-700">
          هذه الصفحة تستعرض استخدام مكوّن Button مع أحجام وأشكال مختلفة.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="space-y-1">
            <p className="text-xs text-gray-600">Small - rounded-sm</p>
            <Button label="Small Button" size="small" shape="rounded-sm" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-600">Medium - rounded-md</p>
            <Button label="Medium Button" size="medium" shape="rounded-md" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-gray-600">Large - rounded-full</p>
            <Button label="Large Button" size="large" shape="rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
}
