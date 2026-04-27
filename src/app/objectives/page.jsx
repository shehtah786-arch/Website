import Link from 'next/link';

export default function ObjectivesPage() {
  const objectives = [
    "يصنف عوامل قيام الزراعة في وطننا العربي.",
    "يميز بين أنواع المحاصيل الزراعية المختلفة.",
    "يفسر أهمية النشاط الزراعي في الوطن العربي.",
    "يحدد المشكلات التي تواجه الزراعة وجهود حلها.",
    "يقدم نماذج لأهم المشروعات القومية الزراعية في مصر."
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6" dir="rtl">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 border-t-8 border-[#ffcc00]">
        
        <div className="text-center mb-8">
          <span className="text-6xl">🎯</span>
          <h1 className="text-3xl font-black text-gray-900 mt-4">أهداف الدرس</h1>
          <p className="text-gray-500 mt-2 font-bold">عزيزي الطالب، بنهاية هذا الدرس ستكون قادراً على أن:</p>
        </div>

        <ul className="space-y-4 mb-10">
          {objectives.map((obj, index) => (
            <li key={index} className="flex items-center gap-4 p-4 bg-yellow-50 rounded-2xl border-r-4 border-[#ffcc00]">
              <span className="font-bold text-yellow-700">{index + 1}.</span>
              <span className="text-lg text-gray-800 font-medium">{obj}</span>
            </li>
          ))}
        </ul>

        {/* الأزرار بعد التنسيق الموحد */}
        <div className="flex gap-4">
          <Link 
            href="/instructions" 
            className="flex-1 text-center py-4 bg-yellow-100 text-yellow-800 rounded-xl font-bold hover:bg-yellow-200 transition-all"
          >
            رجوع
          </Link>
          <Link 
            href="/unit1/lesson1" 
            className="flex-1 text-center py-4 bg-[#ffcc00] text-yellow-950 rounded-xl font-black text-lg shadow-lg hover:bg-[#e6b800] transition-transform active:scale-95"
          >
             ابدأ الدرس
          </Link>
        </div>
      </div>
    </div>
  );
}