import Link from 'next/link';

export default function InstructionsPage() {
  const instructions = [
    "اقرأ أهداف الدرس جيداً قبل البدء لتتعرف على ما ستتعلمه.",
    "تصفح محتوى الدرس بتركيز، واستعن بالصور التوضيحية للفهم.",
    "بعد الانتهاء من المذاكرة، انتقل إلى الاختبار التقييمي.",
    "يجب الإجابة على جميع أسئلة الاختبار لتتمكن من رؤية نتيجتك.",
    "يمكنك العودة إلى القائمة الرئيسية في أي وقت بالضغط على زر الرئيسية."
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6" dir="rtl">
      
      {/* الحاوية الرئيسية بنفس شكل الصورة التي أرسلتِها */}
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl p-10 border-t-[10px] border-[#ffcc00]">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-10">
          <div className="text-7xl mb-4">📜</div>
          <h1 className="text-3xl font-black text-gray-900 mb-2">تعليمات الاستخدام</h1>
          <p className="text-gray-500 font-bold">عزيزي الطالب، يرجى اتباع التعليمات التالية لضمان أفضل تجربة تعلم:</p>
        </div>

        {/* قائمة التعليمات */}
        <div className="space-y-4 mb-12">
          {instructions.map((text, index) => (
            <div key={index} className="flex items-center gap-5 p-5 bg-[#fafafa] rounded-2xl border-r-8 border-[#ffcc00] shadow-sm transition-all hover:bg-yellow-50">
              <span className="w-10 h-10 bg-[#ffcc00] text-yellow-950 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xl shadow-sm">
                {index + 1}
              </span>
              <p className="text-xl text-gray-700 font-bold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* أزرار التنقل بنفس التصميم والألوان المطلوبة */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* زر الرئيسية - لون فاتح */}
          <Link 
            href="/" 
            className="flex-1 text-center py-5 bg-[#fef9e7] text-[#856404] rounded-2xl font-black text-xl hover:bg-[#fdf3d0] transition-all border-b-4 border-[#fcf0c0]"
          >
            الرئيسية
          </Link>
          
          {/* زر ابدأ الآن - لون أصفر قوي - ينقل لصفحة الأهداف */}
          <Link 
            href="/unit1/lesson1/goals" 
            className="flex-1 text-center py-5 bg-[#ffcc00] text-yellow-950 rounded-2xl font-black text-2xl shadow-xl transition-all hover:bg-[#e6b800] hover:scale-105 active:scale-95 border-b-4 border-[#cca300]"
          >
             ابدأ الآن
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-gray-400 font-bold">
        نتمنى لك وقتاً ممتعاً ومفيداً 💡
      </footer>
    </div>
  );
}