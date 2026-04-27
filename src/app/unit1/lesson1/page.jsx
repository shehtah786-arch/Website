import Link from 'next/link';
import FlipCard from './FlipCard';
export default function Lesson1() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen text-right" dir="rtl">
      
      {/* 1. رأس الصفحة */}
      <header className="border-b-4 border-yellow-400 pb-8 mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">النشاط الزراعي في وطننا العربي</h1>
        <p className="text-gray-500 text-xl font-medium">الوحده الثالثه - الدرس الاول</p>
      </header>

      {/* 2. مقدمة الدرس */}
      <div className="mb-16">
        <p className="text-2xl text-gray-700 leading-relaxed border-r-8 border-blue-600 pr-6 bg-blue-50 py-6 rounded-l-2xl shadow-sm">
          يعد النشاط الزراعي من أهم الأنشطة الاقتصادية في وطننا العربي؛ لكن تواجهه بعض من المشكلات التي تعمل الدول العربية على حلها لتحقيق التنمية الزراعية.
        </p>
      </div>

      {/* 3. أولاً: مقومات الزراعة (طبيعية وبشرية) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-blue-900 mb-10 flex items-center gap-4">
          <span className="w-3 h-10 bg-blue-900 rounded-full"></span>
          أولاً: مقومات الزراعة في الوطن العربي
        </h2>

        {/* أ - المقومات الطبيعية (كارت لكل نقطة) */}
        <div className="space-y-10 pr-4 mb-16">
          <h3 className="text-2xl font-bold text-green-700 mb-6 underline decoration-green-200 underline-offset-8">1. المقومات الطبيعية</h3>
          
          {/* كارت: التربة الخصبة */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-green-200">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-xl mb-3 flex items-center gap-2">
                <span className="text-green-500">✔</span> التربة الخصبة
              </h4>
              تتوافر في سهول نهر النيل بمصر والسودان وسهول دجلة والفرات بالعراق وهي تربة غنية تساعد على نمو المحاصيل.
            </div>
            <div className="shrink-0">
              <img src="/images/1.jpeg" alt="التربة" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-inner" />
            </div>
          </div>

          {/* كارت: تنوع المناخ */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-orange-200">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-orange-700 text-xl mb-3 flex items-center gap-2">
                <span className="text-orange-500">✔</span> تنوع المناخ
              </h4>
              يمتلك الوطن العربي مناخاً متنوعاً، مما يؤدي لتنوع المحاصيل والمنتجات الزراعية وتبادلها بين الدول العربية.
            </div>
            <div className="shrink-0">
              <img src="/images/2.png" alt="المناخ" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-inner" />
            </div>
          </div>
          
          {/* كارت: موارد المياه (أضفتها هنا ككارت مستقل) */}
           <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition hover:border-blue-200">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-blue-700 text-xl mb-3 flex items-center gap-2">
                <span className="text-blue-500">✔</span> موارد المياه العذبة
              </h4>
              مثل الأنهار (النيل، دجلة، الفرات)، الأمطار (في اليمن والمغرب)، والمياه الجوفية بالواحات.
            </div>
            <div className="shrink-0">
              <img src="/images/3.jpeg" alt="المياه" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-inner" />
            </div>
          </div>
        </div>

        {/* ب - المقومات البشرية (كارت لكل نقطة) */}
        {/* ب - المقومات البشرية */}
<div className="mb-20">
  <h3 className="text-2xl font-bold text-indigo-700 mb-8 underline decoration-indigo-200 underline-offset-8">
    2. المقومات البشرية
  </h3>
  
  {/* هنا نستخدم الـ Grid لترتيب الكروت */}
  <div className="grid md:grid-cols-2 gap-6">
    
    {/* كارت: الأيدي العاملة */}
    <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition">
      <h4 className="font-extrabold text-indigo-800 text-xl mb-3 flex items-center gap-2">
        <span className="text-indigo-500">●</span> الأيدي العاملة المدربة
      </h4>
      <p className="text-gray-700 leading-relaxed">يمتلك الوطن العربي ثروة بشرية هائلة من المزارعين والعمال والمهندسين الزراعيين ذوي الخبرة الكبيرة.</p>
    </div>

    {/* كارت: رأس المال */}
    <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition">
      <h4 className="font-extrabold text-indigo-800 text-xl mb-3 flex items-center gap-2">
        <span className="text-indigo-500">●</span> رأس المال
      </h4>
      <p className="text-gray-700 leading-relaxed">توفر رؤوس الأموال لتمويل المشروعات الزراعية الضخمة، كما تتوفر الأسواق لنقل وبيع المنتجات.</p>
    </div>

    {/* كارت: وسائل النقل */}
    <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition">
      <h4 className="font-extrabold text-indigo-800 text-xl mb-3 flex items-center gap-2">
        <span className="text-indigo-500">●</span> وسائل النقل
      </h4>
      <p className="text-gray-700 leading-relaxed">تستخدم لنقل ما تحتاجه الزراعة من المواد المختلفة والمنتجات الزراعية.</p>
    </div>

    {/* كارت: السوق */}
    <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition">
      <h4 className="font-extrabold text-indigo-800 text-xl mb-3 flex items-center gap-2">
        <span className="text-indigo-500">●</span> السوق
      </h4>
      <p className="text-gray-700 leading-relaxed">يوجد طلب متزايد على المنتجات الزراعية في الأسواق المحلية والعالمية.</p>
    </div>

  </div>
</div>
      </section>

      {/* 4. ثانياً: أهم المحاصيل (كارت لكل محصول) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-yellow-600 mb-10 flex items-center gap-4">
          <span className="w-3 h-10 bg-yellow-400 rounded-full"></span>
          ثانياً: أهم المحاصيل الزراعية
        </h2>

        <div className="space-y-10 pr-4">
          {/* كارت: القمح */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-yellow-50/50 p-6 rounded-3xl border border-yellow-200 shadow-sm">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-yellow-700 text-2xl mb-3">القمح (الحبوب الغذائية)</h4>
              مصر هي المركز الأول عربياً في إنتاجه، ويستخدم في صناعة الخبز والمكرونة، وهو الغذاء الرئيسي.
            </div>
            <div className="shrink-0">
              <img src="/images/4.jpg" alt="القمح" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-sm" />
            </div>
          </div>

          {/* كارت: القطن (أضفتها هنا ككارت مستقل) */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-yellow-50/50 p-6 rounded-3xl border border-yellow-200 shadow-sm">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-yellow-700 text-2xl mb-3">القطن (محاصيل الألياف)</h4>
              من أهم المحاصيل التجارية، وتشتهر مصر والسودان بإنتاج القطن طويل التيلة المستخدم في المنسوجات الفاخرة.
            </div>
            <div className="shrink-0">
              <img src="/images/5.jpg" alt="القطن" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-sm" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 bg-yellow-50/50 p-6 rounded-3xl border border-yellow-200 shadow-sm">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-yellow-700 text-2xl mb-3">القصب السكر (محاصيل السكرية)</h4>
            قصب السكر: يزرع في مناطق متعددة من صعيد مصر ويستخدم بشكل رئيسي في صناعة السكر.
            </div>
            <div className="shrink-0">
              <img src="/images/6.jpg" alt="القطن" className="w-64 h-44 object-contain rounded-2xl p-2 bg-white border shadow-sm" />
            </div>
</div>
        </div>
      </section>
<section className="py-16 bg-white px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    
    {/* الجهة اليسرى: المحتوى من الـ PDF */}
    <div>
      <h2 class="text-3xl font-bold text-yellow-600 mb-10 flex items-center gap-4">
        <span class="w-3 h-10 bg-yellow-400 rounded-full"></span
        >ثالثاً:اهميه الزراعة فى وطننا العربي
      </h2>
      <p className="text-xl text-gray-700 mb-6">
        تُعد الزراعة من أهم الأنشطة الاقتصادية، حيث تلعب دوراً كبيراً في حياة السكان، فهي:
      </p>
      
      <ul className="space-y-4">
        {[
          "توفر الغذاء للإنسان والعلف للحيوان.",
          "توفر المواد الخام اللازمة للصناعة.",
          "توفر فرص عمل للشباب.",
          "مصدر رئيسي للدخل القومي لبعض الدول العربية."
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border-r-4 border-green-500">
            <span className="text-green-600 font-bold text-2xl">✓</span>
            <span className="text-lg font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>

    {/* الجهة اليمنى: بطاقة هل تعلم */}
    <div className="flex justify-center">
      <FlipCard />
    </div>

  </div>
</section>
      {/* 5. ثالثاً: المشكلات وجهود الدول (بدون صور - نصوص مرتبة) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-red-800 mb-10 flex items-center gap-4">
          <span className="w-3 h-10 bg-red-800 rounded-full"></span>
          رابعاً: مشكلات الزراعة وجهود حلها
        </h2>

        <div className="grid md:grid-cols-2 gap-8 pr-4">
          {/* كارت المشكلات (نص فقط) */}
          <div className="bg-red-50 p-8 rounded-3xl border-r-8 border-red-500 shadow-sm">
            <h3 className="font-black text-red-900 text-2xl mb-6 border-b border-red-200 pb-2">المشكلات التي تواجه الزراعة:</h3>
            <ul className="text-xl text-gray-800 space-y-4 list-disc list-inside">
              <li>ندرة المياه العذبة وتذبذب الأمطار.</li>
              <li>زحف الرمال (التصحر) على الأراضي.</li>
              <li>الزحف العمراني (البناء على الأراضي).</li>
              <li>التغيرات المناخية القاسية.</li>
            </ul>
          </div>

          {/* كارت جهود الدول (نص فقط) */}
          <div className="bg-green-50 p-8 rounded-3xl border-r-8 border-green-600 shadow-sm">
            <h3 className="font-black text-green-900 text-2xl mb-6 border-b border-green-200 pb-2">جهود الدول العربية للحل:</h3>
            <ul className="text-xl text-gray-800 space-y-4 list-disc list-inside">
              <li>بناء السدود والخزانات لتحلية مياه البحر.</li>
              <li>استخدام نظم ري حديثة (الرش والتنقيط).</li>
              <li>استصلاح الأراضي الصحراوية وزراعتها.</li>
              <li>استخدام الأسمدة العضوية لزيادة الإنتاج.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. رابعاً: المشاريع القومية (كارت لكل مشروع مع صور شمال) */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-green-900 mb-10 flex items-center gap-4 border-b-2 pb-4 border-green-200">
          نماذج لمشاريع زراعية كبرى
        </h2>
        
        <div className="space-y-10 pr-4">
          {/* كارت: مستقبل مصر */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50/50 p-6 rounded-3xl border border-green-100 shadow-sm transition hover:border-green-300">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-2xl mb-3 underline">1. مشروع مستقبل مصر</h4>
              يهدف لاستصلاح مليون فدان في منطقة الدلتا الجديدة، ويعتمد على تكنولوجيا الزراعة الحديثة والري الرقمي.
            </div>
            <div className="shrink-0">
              <img src="/images/7.jpg" alt="مستقبل مصر" className="w-72 h-48 object-contain rounded-2xl p-2 bg-white border shadow-md" />
            </div>
          </div>

          {/* كارت: توشكى */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-green-50/50 p-6 rounded-3xl border border-green-100 shadow-sm transition hover:border-green-300">
            <div className="flex-1 text-lg leading-relaxed">
              <h4 className="font-extrabold text-green-800 text-2xl mb-3 underline">2. مشروع توشكى الخير</h4>
              مشروع قومي عملاق في جنوب الوادي لاستصلاح مئات الآلاف من الأفدنة لزراعة القمح والتمور لتحقيق الاكتفاء الذاتي.
            </div>
            <div className="shrink-0">
              <img src="/images/8.jpg" alt="توشكى" className="w-72 h-48 object-contain rounded-2xl p-2 bg-white border shadow-md" />
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-10 text-gray-400 border-t">
        <p>انتهى الدرس الأول - النشاط الزراعي في وطننا العربي</p>
      </footer>
    {/* زرار الانتقال للاختبار - ضيفيه في آخر الملف قبل قفلة الـ div الرئيسية */}
      <div className="mt-20 border-t-2 border-dashed border-gray-200 pt-10 text-center">
        <p className="text-gray-500 mb-6 font-bold text-lg">هل انتهيت من مذاكرة الدرس؟ حان وقت التحدي!</p>
        <Link 
          href="/exam" 
          className="inline-block px-12 py-5 bg-[#ffcc00] text-yellow-950 rounded-2xl font-black text-2xl shadow-xl transition-all duration-300 hover:bg-[#e6b800] hover:scale-105 active:scale-95"
>
          انتقل إلى الاختبار النهائي📝
        </Link>
      </div>
    </div>
    
  );
}