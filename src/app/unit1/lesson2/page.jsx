import Link from 'next/link';

export default function Lesson2() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen text-right" dir="rtl">
      
      {/* 1. رأس الصفحة */}
      <header className="border-b-4 border-red-400 pb-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">الموضوع الثاني: مشكلات الزراعة والمشاريع الكبرى</h1>
        <p className="text-gray-500 text-xl font-medium italic">الوحدة الثالثة - الجزء الثاني</p>
      </header>

      {/* 2. مشكلات الزراعة وجهود حلها */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-red-800 mb-10 flex items-center gap-4">
          <span className="w-3 h-10 bg-red-800 rounded-full shadow-md"></span>
          أولاً: مشكلات الزراعة في وطننا وجهود حلها
        </h2>

        <div className="grid md:grid-cols-2 gap-8 pr-4">
          {/* كارت المشكلات */}
          <div className="bg-red-50 p-8 rounded-3xl border-r-8 border-red-500 shadow-sm transition hover:shadow-md">
            <h3 className="font-black text-red-900 text-2xl mb-6 border-b border-red-200 pb-2 flex items-center gap-2">
              ⚠️ المشكلات التي تواجهنا:
            </h3>
            <ul className="text-xl text-gray-800 space-y-4 list-disc list-inside font-bold">
              <li>ندرة المياه العذبة وتذبذب الأمطار.</li>
              <li>زحف الرمال (التصحر) على الأراضي.</li>
              <li>الزحف العمراني والبناء على الأراضي.</li>
              <li>التغيرات المناخية القاسية.</li>
            </ul>
          </div>

          {/* كارت جهود الدول */}
          <div className="bg-green-50 p-8 rounded-3xl border-r-8 border-green-600 shadow-sm transition hover:shadow-md">
            <h3 className="font-black text-green-900 text-2xl mb-6 border-b border-green-200 pb-2 flex items-center gap-2">
              ✅ جهود الدول العربية للحل:
            </h3>
            <ul className="text-xl text-gray-800 space-y-4 list-disc list-inside font-bold">
              <li>تحلية مياه البحر وبناء السدود.</li>
              <li>استخدام نظم ري حديثة (رش وتنقيط).</li>
              <li>استصلاح الأراضي الصحراوية وزراعتها.</li>
              <li>استخدام الأسمدة العضوية لزيادة الإنتاج.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. المشاريع القومية الكبرى - الصور 7 و 8 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-green-900 mb-10 flex items-center gap-4 border-b-2 pb-4 border-green-200">
          <span className="w-3 h-10 bg-green-900 rounded-full shadow-md"></span>
          ثانياً: نماذج لمشاريع زراعية قومية كبرى
        </h2>
        
        <div className="space-y-10 pr-4">
          {/* مشروع مستقبل مصر - صورة 7 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50/50 p-6 rounded-3xl border border-green-100 shadow-sm transition hover:border-green-300">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-2xl mb-3 underline">1. مشروع مستقبل مصر</h4>
              يهدف لاستصلاح مليون فدان في منطقة الدلتا الجديدة، ويعتمد على تكنولوجيا الزراعة الحديثة والري الرقمي لزيادة المحاصيل.
            </div>
            <div className="shrink-0">
              <img src="/images/7.jpg" alt="مستقبل مصر" className="w-72 h-48 object-cover rounded-2xl p-2 bg-white border shadow-md" />
            </div>
          </div>

          {/* مشروع توشكى الخير - صورة 8 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50/50 p-6 rounded-3xl border border-green-100 shadow-sm transition hover:border-green-300">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-2xl mb-3 underline">2. مشروع توشكى الخير</h4>
              مشروع عملاق في جنوب الوادي لاستصلاح مئات الآلاف من الأفدنة، خاصة لزراعة القمح والتمور لتحقيق الاكتفاء الذاتي.
            </div>
            <div className="shrink-0">
              <img src="/images/8.jpg" alt="توشكى" className="w-72 h-48 object-cover rounded-2xl p-2 bg-white border shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* زر الاختبار النهائي */}
      <div className="mt-20 border-t-2 border-dashed border-gray-200 pt-10 text-center">
        <p className="text-gray-500 mb-6 font-bold text-lg italic underline decoration-yellow-400 decoration-4">هل انتهيت من مذاكرة كامل الدرس؟</p>
        <Link 
          href="/exam" 
          className="inline-block px-16 py-6 bg-[#ffcc00] text-yellow-950 rounded-2xl font-black text-3xl shadow-xl transition-all duration-300 hover:bg-[#e6b800] hover:scale-105 active:scale-95"
        >
          📝 انتقل إلى الاختبار النهائي
        </Link>
      </div>

      <footer className="text-center py-10 text-gray-400 mt-10">
        <p>انتهى الموضوع الثاني - تمنياتنا بالتوفيق</p>
      </footer>
    </div>
  );
}