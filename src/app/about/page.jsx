export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center p-6" dir="rtl">
      <div className="max-w-4xl mx-auto">
        
        {/* العنوان */}
        <h1 className="text-5xl font-black text-blue-900 mb-12 text-center">حول المنصة</h1>
        
        {/* المقدمة */}
        <div className="bg-blue-50 p-8 rounded-3xl mb-16 border-r-8 border-blue-400">
          <p className="text-2xl text-blue-900 font-bold leading-relaxed">
            منصة التعلم الذكي هي نافذتك التعليمية المبتكرة، صممت خصيصاً لطلاب الصف السادس الابتدائي لاستكشاف "جغرافيا الوطن العربي" بطريقة عصرية وتفاعلية.
          </p>
        </div>

        {/* الأهداف - الكروت */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* كرت الرؤية */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-b-4 border-blue-300 hover:shadow-xl transition-all duration-300">
                <span className="text-5xl mb-6 block">🎯</span>
                <h3 className="text-3xl font-black text-blue-900 mb-4">رؤيتنا</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    نطمح لتحويل المذاكرة من عبء دراسي إلى رحلة استكشافية ممتعة، حيث نربط المنهج الدراسي بالتكنولوجيا لتعزيز الفهم والابتكار لدى الطلاب.
                </p>
            </div>
            
            {/* كرت ماذا نقدم */}
            <div className="bg-white p-10 rounded-3xl shadow-md border-b-4 border-yellow-300 hover:shadow-xl transition-all duration-300">
                <span className="text-5xl mb-6 block">💡</span>
                <h3 className="text-3xl font-black text-yellow-800 mb-4">ماذا نقدم؟</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                    نقدم محتوى دراسياً شاملاً، يتضمن شرحاً مبسطاً للمحاصيل والزراعة، اختبارات تفاعلية، ومصادر تعليمية رقمية تساعد الطالب على التفوق.
                </p>
            </div>
        </div>

        {/* رسالة شكر */}
        <div className="text-center bg-gray-50 py-8 rounded-2xl">
            <p className="text-xl text-gray-600 font-medium">
                شكراً لاختيارك منصتنا لتكون جزءاً من رحلتك التعليمية. 🌟
            </p>
        </div>

      </div>
    </div>
  );
}