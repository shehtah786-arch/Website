import Link from 'next/link';

export default function ContentPage() {
  return (
   <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center p-6" dir="rtl">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">موضوعات الدرس</h1>
        <p className="text-gray-600 text-xl font-medium">اختر موضوعاً لبدء التعلم عن الزراعة في وطننا العربي</p>
      </header>

      <div className="grid md:grid-cols-2 gap-10">
        {/* كارت الموضوع الأول */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-blue-500 transition-all flex flex-col justify-between">
          <div className="h-40 bg-blue-100 flex items-center justify-center text-6xl">🚜</div>
          <div className="p-8">
            <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-bold text-sm">الموضوع 1</span>
            <h2 className="text-2xl font-black text-gray-800 mt-4 mb-2">نشاط الزراعة ومقوماته</h2>
            <p className="text-gray-600 mb-8">استكشف المقومات الطبيعية والبشرية وأهمية الزراعة في وطننا العربي.</p>
            <Link href="/unit1/lesson1" className="block text-center bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700">ابدأ التعلم</Link>
          </div>
        </div>

        {/* كارت الموضوع الثاني */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-2 border-transparent hover:border-green-500 transition-all flex flex-col justify-between">
          <div className="h-40 bg-green-100 flex items-center justify-center text-6xl">🌾</div>
          <div className="p-8">
            <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full font-bold text-sm">الموضوع 2</span>
            <h2 className="text-2xl font-black text-gray-800 mt-4 mb-2">مشكلات الزارعة و المشاريع الكبري</h2>
            <p className="text-gray-600 mb-8">تعرف على توزيع أهم المحاصيل والتحديات التي تواجه الإنتاج وجهود الدول.</p>
            <Link href="/unit1/lesson2" className="block text-center bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700">ابدأ التعلم</Link>
          </div>
        </div>
      </div>
    </div>
  );
}