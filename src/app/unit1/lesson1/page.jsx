import Link from 'next/link';

export default function Lesson1() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center p-6" dir="rtl">
      
      {/* حاوية مركزية لضمان توازي جميع العناصر */}
      <div className="w-full max-w-5xl">
        
        {/* 1. رأس الصفحة */}
        <header className="border-b-4 border-yellow-400 pb-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">الموضوع الأول: النشاط الزراعي ومقوماته</h1>
          <p className="text-gray-500 text-xl font-medium italic">الوحدة الثالثة - الجزء الأول</p>
        </header>

        {/* 2. مقدمة الدرس */}
        <div className="mb-16">
          <p className="text-2xl text-gray-700 leading-relaxed border-r-8 border-blue-600 pr-6 bg-blue-50 py-6 rounded-l-2xl shadow-sm font-medium">
            يعد النشاط الزراعي من أهم الأنشطة الاقتصادية في وطننا العربي؛ حيث يعتمد قيامه على توافر مجموعة من المقومات الطبيعية والبشرية التي وهبها الله لوطننا.
          </p>
        </div>

        {/* 3. مقومات الزراعة */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-blue-900 mb-10 flex items-center gap-4">
            <span className="w-3 h-10 bg-blue-900 rounded-full shadow-md"></span>
            أولاً: مقومات الزراعة في الوطن العربي
          </h2>

          <div className="space-y-8">
            {/* التربة */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-green-200">
              <div className="flex-1 text-lg leading-relaxed">
                <h4 className="font-extrabold text-green-800 text-xl mb-3">✔ التربة الخصبة</h4>
                تتوافر في سهول الأنهار مثل النيل في مصر والسودان، ودجلة والفرات بالعراق وهي تربة غنية تساعد علي نمو المحاصيل .
              </div>
              <div className="shrink-0">
                <img src="/images/1.jpeg" alt="التربة" className="w-64 h-40 object-cover rounded-2xl border bg-white shadow-inner" />
              </div>
            </div>

            {/* المناخ */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-orange-200">
              <div className="flex-1 text-lg leading-relaxed">
                <h4 className="font-extrabold text-orange-700 text-xl mb-3">✔ تنوع المناخ</h4>
               يتمتع الوطن العربي بمناخ معتدل ومطير في الشمال وحار وممطر في الجنوب ؛هترتب علي ذلك تنوع المحاصيل والمنتجات الزراعية.
              </div>
              <div className="shrink-0">
                <img src="/images/2.png" alt="المناخ" className="w-64 h-40 object-cover rounded-2xl border bg-white shadow-inner" />
              </div>
            </div>
            
            {/* المياه */}
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-blue-200">
              <div className="flex-1 text-lg leading-relaxed">
                <h4 className="font-extrabold text-blue-700 text-xl mb-3">✔ موارد المياه العذبة</h4>
                 مثل نهل النيل في مصر والسودان ونهر دجلة والفرات في العراق والامطار في بلاد المغرب ولبنان والمياه الجوفيه في الواحات.
              </div>
              <div className="shrink-0">
                <img src="/images/3.jpeg" alt="المياه" className="w-64 h-40 object-cover rounded-2xl border bg-white shadow-inner" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. أهم المحاصيل الزراعية (التعديل الجديد: كل محصول لوحده) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-yellow-600 mb-10 flex items-center gap-4">
            <span className="w-3 h-10 bg-yellow-400 rounded-full shadow-md"></span>
            ثانياً: أهم المحاصيل الزراعية
          </h2>

          <div className="space-y-6">
            {/* القمح */}
            <div className="bg-yellow-50/50 p-6 rounded-[2rem] border border-yellow-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h4 className="font-black text-yellow-700 text-2xl mb-2 underline">القمح</h4>
                <p className="text-xl font-bold text-gray-800 leading-relaxed"> تعد مصر من أكثر الدول العربية انتاجا له ويستخدم في صناعه الخبز.
                </p>
              </div>
              <div className="shrink-0">
                <img src="/images/4.jpg" alt="قمح" className="w-40 h-40 object-cover rounded-2xl border-2 border-white shadow-md" />
              </div>
            </div>

            {/* القطن */}
            <div className="bg-yellow-50/50 p-6 rounded-[2rem] border border-yellow-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h4 className="font-black text-yellow-700 text-2xl mb-2 underline">القطن</h4>
                <p className="text-xl font-bold text-gray-800 leading-relaxed"> تتصدر مصر انتاج القطن طويل التيلة وهو من اجود أنواع، ويستخدم في صناعه الملابس والمنسوجات الفاخرة.
                </p>
              </div>
              <div className="shrink-0">
                <img src="/images/5.jpg" alt="قطن" className="w-40 h-40 object-cover rounded-2xl border-2 border-white shadow-md" />
              </div>
            </div>
            <div className="bg-yellow-50/50 p-6 rounded-[2rem] border border-yellow-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h4 className="font-black text-yellow-700 text-2xl mb-2 underline">القصب السكر</h4>
                <p className="text-xl font-bold text-gray-800 leading-relaxed">
        يزرع في مناطق متعددة من صعيد مصر ويستخدم بشكل رئيسي  صناعة السكر.
                </p>
              </div>
              <div className="shrink-0">
                <img src="/images/6.jpg" alt="قطن" className="w-40 h-40 object-cover rounded-2xl border-2 border-white shadow-md" />
              </div>
            </div>
            
          </div>
        </section>

        {/* 5. أهمية الزراعة + البطاقة التفاعلية (تم استرجاعها) */}
        <section className="py-12 bg-green-50/50 rounded-[3rem] px-8 mb-16 border-2 border-green-100 shadow-inner">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div>
              <h2 className="text-3xl font-black text-green-800 mb-8 border-r-8 border-green-500 pr-4 italic">
                ثالثاً: أهمية الزراعة في وطننا
              </h2>
              <ul className="space-y-4 font-bold text-lg text-gray-800">
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-green-200 transition hover:bg-green-100">
                  <span className="text-green-600 text-2xl">✓</span> توفير الغذاء للسكان والعلف للحيوان.
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-green-200 transition hover:bg-green-100">
                  <span className="text-green-600 text-2xl">✓</span> توفير المواد الخام اللازمة للصناعة.
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-green-200 transition hover:bg-green-100">
                  <span className="text-green-600 text-2xl">✓</span> توفير فرص عمل لسكان الوطن العربي.
                </li>
                <li className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-green-200 transition hover:bg-green-100">
                  <span className="text-green-600 text-2xl">✓</span> مصدر اساسى للدخل القومي لبعض الدول العربيه.
                </li>
              </ul>
            </div>

            {/* البطاقة التفاعلية */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-yellow-400 text-center flex flex-col justify-center transform transition-transform hover:rotate-1">
              <div className="text-7xl mb-4">💡</div>
              <h3 className="text-2xl font-black text-gray-800 mb-4 italic">هل تعلم؟</h3>
              <p className="text-gray-600 text-xl font-medium leading-relaxed italic mb-6">
                بدون الزراعة ما كانت لتستقر الشعوب العربية القديمة حول ضفاف الأنهار كالنيل ودجلة!
              </p>
              <div className="inline-block bg-yellow-50 px-6 py-2 rounded-full text-yellow-700 font-black border border-yellow-200">
                معلومة تاريخية مهمة
              </div>
            </div>
          </div>
        </section>

        {/* 6. الفيديو المساعد (تم استرجاعه) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-red-700 mb-8 flex items-center gap-4">
            <span className="w-3 h-10 bg-red-600 rounded-full shadow-md"></span>
            رابعاً: شاهد وتعلم (فيديو مساعد)
          </h2>
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 group">
            <div className="relative">
              <img src="https://i.ytimg.com/vi/Uo9jU4aKYYA/maxresdefault.jpg" alt="فيديو النشاط الزراعي" className="w-full h-64 md:h-80 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <a href="https://youtu.be/Uo9jU4aKYYA?si=KDRk2FE4vk2R1A3e" target="_blank" rel="noopener noreferrer" className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all">
                  <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </a>
              </div>
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-black text-gray-800 mb-3">النشاط الزراعي في وطننا العربي - شرح ممتع</h3>
              <a href="https://youtu.be/Uo9jU4aKYYA?si=KDRk2FE4vk2R1A3e" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-3 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition-all">فتح الفيديو على YouTube 🎥</a>
            </div>
          </div>
        </section>

        {/* زر العودة */}
        <footer className="text-center py-10 border-t border-gray-100">
          <Link href="/unit1/lesson1/objectives" className="inline-block px-12 py-4 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl transition-all">
            ← العودة لموضوعات الدرس
          </Link>
        </footer>
      </div>
    </div>
  );
}