import Link from 'next/link';

export default function Lesson1() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen text-right" dir="rtl">
      
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

      {/* 3. مقومات الزراعة (طبيعية وبشرية) مع الصور 1، 2، 3 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 flex items-center gap-4">
          <span className="w-3 h-10 bg-blue-900 rounded-full shadow-md"></span>
          أولاً: مقومات الزراعة في الوطن العربي
        </h2>

        <div className="space-y-8 pr-4">
          {/* التربة الخصبة - صورة 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-green-200">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-xl mb-3">✔ التربة الخصبة</h4>
              تتوافر في سهول الأنهار مثل النيل في مصر والسودان، ودجلة والفرات بالعراق.
            </div>
            <div className="shrink-0">
              <img src="/images/1.jpeg" alt="التربة" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-inner" />
            </div>
          </div>

          {/* تنوع المناخ - صورة 2 */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-orange-200">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-orange-700 text-xl mb-3">✔ تنوع المناخ</h4>
              يمتلك الوطن العربي مناخاً متنوعاً، مما يساعد على تنوع المحاصيل وتبادلها.
            </div>
            <div className="shrink-0">
              <img src="/images/2.png" alt="المناخ" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-inner" />
            </div>
          </div>
          
          {/* موارد المياه - صورة 3 */}
           <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-blue-200">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-blue-700 text-xl mb-3">✔ موارد المياه العذبة</h4>
              تتنوع بين الأمطار، المياه السطحية (الأنهار)، والمياه الجوفية (الآبار والعيون).
            </div>
            <div className="shrink-0">
              <img src="/images/3.jpeg" alt="المياه" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-inner" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. أهم المحاصيل الزراعية - الصور 4، 5 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-yellow-600 mb-10 flex items-center gap-4">
          <span className="w-3 h-10 bg-yellow-400 rounded-full shadow-md"></span>
          ثانياً: أهم المحاصيل الزراعية
        </h2>
        <div className="bg-yellow-50/50 p-8 rounded-[3rem] border border-yellow-200 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-xl font-bold text-gray-800 leading-relaxed">
              <h4 className="font-black text-yellow-700 text-2xl mb-4 underline">القمح والقطن وقصب السكر</h4>
              تعد مصر المركز الأول عربياً في إنتاج القمح، وتشتهر بزراعة القطن طويل التيلة المتميز عالمياً.
            </div>
            <div className="shrink-0 flex gap-4">
              <img src="/images/4.jpg" alt="قمح" className="w-40 h-40 object-cover rounded-2xl border-2 border-white shadow-md" />
              <img src="/images/5.jpg" alt="قطن" className="w-40 h-40 object-cover rounded-2xl border-2 border-white shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. أهمية الزراعة + البطاقة التفاعلية (هل تعلم) */}
      <section className="py-12 bg-green-50/50 rounded-[3rem] px-8 mb-16 border-2 border-green-100 shadow-inner">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* الجانب الأيمن: نقاط أهمية الزراعة */}
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
                <span className="text-green-600 text-2xl">✓</span> تُعد مصدراً رئيسياً للدخل القومي.
              </li>
            </ul>
          </div>

          {/* الجانب الأيسر: البطاقة التفاعلية التي طلبتِها */}
          <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-t-8 border-yellow-400 text-center transform transition-transform hover:rotate-1">
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

      {/* زر العودة */}
      <footer className="text-center py-10 border-t border-gray-100">
        <Link 
          href="/unit1/lesson1/objectives" 
          className="inline-block px-12 py-4 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-700 shadow-xl transition-all"
        >
          ← العودة موضوعات الدرس
        </Link>
      </footer>

    </div>
  );
}