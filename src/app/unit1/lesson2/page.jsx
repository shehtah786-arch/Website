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

      {/* 3. المشاريع القومية الكبرى */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-green-900 mb-10 flex items-center gap-4 border-b-2 pb-4 border-green-200">
          <span className="w-3 h-10 bg-green-900 rounded-full shadow-md"></span>
          ثانياً: نماذج لمشاريع زراعية قومية كبرى
        </h2>
        
        <div className="space-y-10 pr-4">
          {/* مشروع مستقبل مصر */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50/50 p-6 rounded-3xl border border-green-100 shadow-sm transition hover:border-green-300">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-2xl mb-3 underline">1. مشروع مستقبل مصر</h4>
              يهدف لاستصلاح مليون فدان في منطقة الدلتا الجديدة، ويعتمد على تكنولوجيا الزراعة الحديثة والري الرقمي لزيادة المحاصيل.
            </div>
            <div className="shrink-0">
              <img src="/images/7.jpg" alt="مستقبل مصر" className="w-72 h-48 object-cover rounded-2xl p-2 bg-white border shadow-md" />
            </div>
          </div>

          {/* مشروع توشكى الخير */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50/50 p-6 rounded-3xl border border-green-100 shadow-sm transition hover:border-green-300">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-2xl mb-3 underline">2. مشروع توشكى الخير</h4>
              مشروع عملاق في جنوب الوادي لاستصلاح مئات الآلاف من الأفدنة لتحقيق الاكتفاء الذاتي.
            </div>
            <div className="shrink-0">
              <img src="/images/8.jpg" alt="توشكى" className="w-72 h-48 object-cover rounded-2xl p-2 bg-white border shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. المكتبة المرئية - الفيديو المطلوب */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 flex items-center gap-4">
          <span className="w-3 h-10 bg-blue-600 rounded-full shadow-md"></span>
          ثالثاً: شاهد وتعلم (شرح كرتوني ممتع)
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group">
          <div className="relative">
            {/* صورة الفيديو المصغرة */}
            <img 
              src="https://i.ytimg.com/vi/dvMGz9QmtWo/maxresdefault.jpg" 
              alt="شرح كرتون للزراعة" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* زر التشغيل */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
              <a 
                href="https://youtu.be/dvMGz9QmtWo?si=1_4pswrdbowuIvmY" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-red-700 hover:scale-110 transition-all"
              >
                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="p-8 text-center bg-blue-50/30">
            <h3 className="text-2xl font-black text-blue-900 mb-3">
               الزراعة في وطننا العربي «شرح كرتون»
            </h3>
            <p className="text-gray-600 text-lg mb-6 font-medium">
              رحلة ممتعة في الأراضي الزراعية لشرح المقومات والمحاصيل والمشكلات بأسلوب شيق ومبسط.
            </p>
            <a 
              href="https://youtu.be/dvMGz9QmtWo?si=1_4pswrdbowuIvmY" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-black text-xl hover:bg-blue-700 shadow-lg transition-all"
            >
              تشغيل الفيديو التعليمي 🎬
            </a>
          </div>
        </div>
      </section>

      {/* 5. زر الاختبار النهائي */}
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