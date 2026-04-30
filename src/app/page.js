import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* قسم الواجهة (Hero Section) */}
      <section className="relative h-[650px] overflow-hidden flex flex-col items-center justify-center text-center text-white px-4 shadow-2xl">
        
        {/* الصورة الرئيسية كخلفية */}
        <img 
          src="/images/9.jpeg" 
          alt="الزراعة الذكية والمستدامة في الوطن العربي" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-105"
        />

        {/* طبقة تظليل (Overlay) لجعل النص مقروءاً */}
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-6 text-center">
          
          {/* خلفية النجوم */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none z-0"></div>
          
          {/* العنوان الرئيسي للدرس */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 z-10 tracking-tight drop-shadow-2xl text-yellow-50 animate-fade-in-down">
            النشاط الزراعي في وطننا العربي
          </h1>
          
          {/* وصف الدرس */}
          <p className="text-xl md:text-2xl max-w-3xl mb-12 z-10 leading-relaxed text-blue-50 drop-shadow-xl font-medium">
            سنتعرف على عوامل قيام الزراعة، أهم المحاصيل التي يشتهر بها وطننا العربي، وكيف نواجه التحديات لتحقيق التنمية الزراعية المستدامة.
          </p>

          {/* العناصر البصرية (الإيموجي) */}
          <div className="relative w-full max-w-lg h-40 z-10 flex justify-around items-center">
              <span className="text-7xl md:text-8xl animate-bounce drop-shadow-xl">🌾</span>
              <span className="text-8xl md:text-9xl drop-shadow-2xl">🌍</span>
              <span className="text-7xl md:text-8xl animate-bounce delay-300 drop-shadow-xl">🚜</span>
          </div>
        </div>
      </section>

      {/* قسم التمهيد (Intro) */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          مرحباً بك في موقعنا للصف السادس الابتدائى
        </h2>
        <p className="text-2xl text-gray-600 leading-loose">
          في هذا الدرس، سنتعرف على المقومات الطبيعية والبشرية التي تجعل أرضنا العربية غنية بالخيرات، وسنتعرف معاً أهم المحاصيل مثل القمح وقصب السكر والقطن. هيا بنا نبدأ التعلم!
        </p>
      </section>

      {/* أزرار التحكم (Action Cards) */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto pb-24 px-4">
        
        {/* بطاقة المحتوى - تم تعديل الرابط ليوجه إلى صفحة الموضوعات */}
        <div className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-3xl shadow-xl hover:scale-105 transition-transform hover:border-yellow-200">
          <div className="bg-yellow-100 p-6 rounded-full mb-6 text-5xl">📖</div>
          <Link 
            href="/unit1/lesson1/objectives" 
            className="w-full bg-[#ffcc00] text-black py-4 rounded-xl font-extrabold text-xl text-center shadow-lg hover:bg-[#e6b800] transition-colors"
          >
            الدخول إلى الموضوعات
          </Link>
        </div>

        {/* بطاقة الاختبار */}
        <div className="flex flex-col items-center p-8 bg-white border-2 border-gray-100 rounded-3xl shadow-xl hover:scale-105 transition-transform hover:border-blue-200">
          <div className="bg-blue-100 p-6 rounded-full mb-6 text-5xl">📝</div>
          <Link 
            href="/exam" 
            className="w-full bg-[#ffcc00] text-black py-4 rounded-xl font-extrabold text-xl text-center shadow-lg hover:bg-[#e6b800] transition-colors"
          >
            الاختبار التقييمي
          </Link>
        </div>

      </section>

      {/* تذييل الصفحة */}
      <footer className="bg-gray-50 py-10 border-t text-center text-gray-500 font-bold">
        <p>© منصة التعلم الذكي - جغرافيا الوطن العربي</p>
      </footer>
    </div>
  );
}