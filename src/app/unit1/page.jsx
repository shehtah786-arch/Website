import Link from 'next/link';

export default function Unit1() {
  return (
    <div className="p-8 max-w-4xl mx-auto rtl" dir="rtl">
      <h2 className="text-3xl font-bold border-b-4 border-yellow-400 inline-block mb-8">الوحدة الأولى: جغرافيا الوطن العربي</h2>
      <div className="space-y-4">
        <Link href="/unit1/lesson1" className="block p-6 bg-gray-50 rounded-lg hover:bg-yellow-50 border-r-8 border-yellow-400 transition-all">
          <h3 className="text-xl font-bold">الدرس الأول: النشاط الزراعي في وطننا العربي</h3>
          <p className="text-gray-600">تعرف على مقومات الزراعة، أهم المحاصيل، والمشكلات التي تواجهها.</p>
        </Link>
      </div>
    </div>
  );
}