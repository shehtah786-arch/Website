import Link from 'next/link';

export default function GoalsPage() {
  const goals = [
    "يصنف عوامل قيام الزراعة في وطننا العربي (طبيعية وبشرية).",
    "يميز بين أنواع المحاصيل الزراعية المختلفة وأماكن زراعتها.",
    "يفسر الأهمية الاقتصادية للنشاط الزراعي لسكان وطننا العربي.",
    "يحدد المشكلات التي تواجه الزراعة وجهود الدول العربية لحلها.",
    "يقدم نماذج لأهم المشروعات القومية الزراعية الحديثة في مصر."
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6" dir="rtl">
      
      {/* الحاوية الرئيسية - نفس مقاس max-w-2xl وتصميم التعليمات تماماً */}
      <div className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl p-10 border-t-[10px] border-[#ffcc00]">
        
        {/* رأس الصفحة بنفس التنسيق */}
        <div className="text-center mb-10">
          <div className="text-7xl mb-4">🎯</div>
          <h1 className="text-3xl font-black text-gray-900 mb-2">أهداف الدرس</h1>
          <p className="text-gray-500 font-bold">عزيزي الطالب، بنهاية هذا الدرس ستكون قادراً على أن:</p>
        </div>

        {/* قائمة الأهداف بنفس شكل التعليمات لضمان تناسق الحجم */}
        <div className="space-y-4 mb-12">
          {goals.map((text, index) => (
            <div key={index} className="flex items-center gap-5 p-5 bg-[#fafafa] rounded-2xl border-r-8 border-[#ffcc00] shadow-sm transition-all hover:bg-yellow-50">
              <span className="w-10 h-10 bg-[#ffcc00] text-yellow-950 rounded-full flex items-center justify-center flex-shrink-0 font-black text-xl shadow-sm">
                {index + 1}
              </span>
              <p className="text-xl text-gray-700 font-bold leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        {/* أزرار التنقل بنفس التصميم */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* زر الرجوع للتعليمات - بنفس لون زر الرئيسية الفاتح */}
          <Link 
            href="/instructions" 
            className="flex-1 text-center py-5 bg-[#fef9e7] text-[#856404] rounded-2xl font-black text-xl hover:bg-[#fdf3d0] transition-all border-b-4 border-[#fcf0c0]"
          >
            رجوع للتعليمات
          </Link>
          
          {/* زر ابدأ الدرس - لون أصفر قوي - ينقل لقائمة الموضوعات */}
          <Link 
            href="/unit1/lesson1/objectives" 
            className="flex-1 text-center py-5 bg-[#ffcc00] text-yellow-950 rounded-2xl font-black text-2xl shadow-xl transition-all hover:bg-[#e6b800] hover:scale-105 active:scale-95 border-b-4 border-[#cca300]"
          >
             ابدأ الدرس الآن
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-gray-400 font-bold">
        بالتركيز نصل إلى الهدف 💡
      </footer>
    </div>
  );
}