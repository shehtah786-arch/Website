"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ExamPage() {
  // 1. تعريف الأسئلة (تأكدي من نظافة النصوص من الرموز التقنية)
  const questions = [
    {
      id: 1,
      q: "أياً مما يلي يعد من المقومات البشرية لقيام الزراعة في الوطن العربي...؟",
      options: ["المناخ المتنوع", "الأيدي العاملة المدربة", "موارد المياه العذبة", "التربة الخصبة"],
      ans: 1 // الأيدي العاملة المدربة
    },
    {
      id: 2,
      q: "تعتمد الزراعة في أجزاء كبيرة من دول بلاد المغرب العربي على مياه...؟",
      options: ["الأنهار", "المياه الجوفية", "الأمطار", "تحلية البحر"],
      ans: 2 // الأمطار
    },
    {
      id: 3,
      q: "تعد مصر هي الدولة العربية الأولى في إنتاج محصول...؟",
      options: ["البن", "القمح", "الموز", "الأناناس"],
      ans: 1 // القمح
    },
    {
      id: 4,
      q: "أي من المحاصيل التالية يدخل بشكل أساسي في صناعة المنسوجات...؟",
      options: ["قصب السكر", "القمح", "القطن", "الأرز"],
      ans: 2 // القطن
    },
    {
      id: 5,
      q: "من أهم المشروعات الزراعية في مصر ويقع بالصحراء الغربية هو مشروع...؟",
      options: ["توشكى", "مستقبل مصر", "الدلتا الجديدة", "شرق العوينات"],
      ans: 0 // توشكى
    }
  ];

  // 2. إدارة الحالات (States)
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  // 3. وظيفة اختيار الإجابة
  const handleSelect = (questionId, optionIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
  };

  // 4. وظيفة حساب النتيجة
  const calculateScore = () => {
    let currentScore = 0;
    questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.ans) {
        currentScore += 1;
      }
    });
    setScore(currentScore);
    setShowResult(true);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 rtl min-h-screen bg-gray-50" dir="rtl">
      <h1 className="text-3xl font-black text-center mb-10 text-blue-900 border-b-4 border-yellow-400 pb-4">
        الاختبار النهائي للنشاط الزراعي في وطننا العربي
      </h1>

      {!showResult ? (
        // عرض الأسئلة
        <div className="space-y-8">
          {questions.map((item, index) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold mb-4">
                <span className="bg-yellow-400 px-2 py-1 rounded ml-2">{index + 1}</span>
                {item.q}
              </h3>
              <div className="grid gap-3">
                {item.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(item.id, i)}
                    className={`p-4 text-right rounded-xl border-2 transition-all ${
                      selectedAnswers[item.id] === i
                        ? "border-blue-600 bg-blue-50 text-blue-900 font-bold"
                        : "border-gray-100 hover:border-blue-200 text-gray-700"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={calculateScore}
            disabled={Object.keys(selectedAnswers).length < questions.length}
            className="w-full py-4 bg-green-600 text-white rounded-2xl font-black text-xl shadow-lg hover:bg-green-700 disabled:bg-gray-300 transition-colors mt-10"
          >
            عرض النتيجة النهائية
          </button>
        </div>
      ) : (
        // عرض النتيجة النهائية
        <div className="text-center bg-white p-12 rounded-3xl shadow-xl border-t-8 border-green-500 animate-in fade-in zoom-in duration-500">
          <div className="text-7xl mb-6">🎊</div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">أحسنت يا بطل!</h2>
          <p className="text-gray-500 mb-6 text-lg">لقد أتممت الاختبار بنجاح</p>
          
          <div className="inline-block bg-green-50 px-10 py-6 rounded-2xl border-2 border-green-200 mb-10">
            <span className="text-gray-600 block text-sm mb-1 font-bold">درجتك هي</span>
            <span className="text-5xl font-black text-green-600">
              {score} / {questions.length}
            </span>
          </div>

          <div className="flex gap-4">
  <button 
    onClick={() => { setShowResult(false); setSelectedAnswers({}); }}
    className="flex-1 py-4 bg-yellow-100 text-yellow-800 rounded-xl font-bold hover:bg-yellow-200 transition-all"
  >
    إعادة الاختبار
  </button>
  <Link 
    href="/" 
    className="flex-1 py-4 bg-[#ffcc00] text-yellow-950 rounded-xl font-black shadow-lg flex items-center justify-center hover:bg-[#e6b800] transition-transform active:scale-95"
  >
    العودة للرئيسية
  </Link>
</div>
        </div>
      )}
    </div>
  );
}