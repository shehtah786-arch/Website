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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6" dir="rtl">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 border-t-8 border-yellow-400">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-3xl font-black text-gray-900">تعليمات الاستخدام</h1>
          <p className="text-gray-500 mt-2 font-bold">عزيزي الطالب، يرجى اتباع التعليمات التالية لضمان أفضل تجربة تعلم:</p>
        </div>

        {/* قائمة التعليمات */}
        <div className="space-y-4 mb-10">
          {instructions.map((text, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border-r-4 border-yellow-200">
              <span className="w-8 h-8 bg-yellow-400 text-yellow-950 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                {index + 1}
              </span>
              <p className="text-lg text-gray-700 font-medium">{text}</p>
            </div>
          ))}
        </div>

        {/* أزرار التنقل */}
        <div className="flex gap-4">
          <Link 
            href="/" 
            className="flex-1 text-center py-4 bg-yellow-100 text-yellow-800 rounded-xl font-bold hover:bg-yellow-200 transition-all"
          >
            الرئيسية
          </Link>
          <Link 
            href="/objectives" 
            className="flex-1 text-center py-4 bg-yellow-400 text-yellow-950 rounded-xl font-black text-lg shadow-lg hover:bg-yellow-500 transition-transform active:scale-95"
          >
             ابدأ الآن
          </Link>
        </div>
      </div>
    </div>
  );
}