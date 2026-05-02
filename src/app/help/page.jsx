export default function HelpPage() {
  return (
    /* تم تغيير الخلفية هنا لتكون باللون الأصفر الفاتح جداً */
    <div className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center p-6" dir="rtl">
      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-yellow-100 text-center max-w-lg w-full">
        
        {/* أيقونة تعبيرية */}
        <div className="text-5xl mb-4 text-yellow-500">🤝</div>

        {/* العنوان باللون البني الغامق ليتماشى مع الأصفر */}
        <h1 className="text-3xl font-black text-[#4a2c10] mb-6">مركز المساعدة</h1>
        
        {/* نص توضيحي */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
          إذا واجهتك أي مشكلة أثناء تصفح الموقع، نحن هنا لدعمك. يمكنك الاتصال بنا مباشرة على الرقم التالي:
        </p>

        {/* صندوق رقم الهاتف - بتنسيق أصفر متناسق */}
        <div className="bg-yellow-50 p-8 rounded-3xl border-2 border-yellow-200">
          <h3 className="text-sm font-black text-yellow-700 uppercase mb-3 tracking-widest">
            رقم الهاتف
          </h3>
          {/* رابط الاتصال السريع باللون البني أو الأحمر الغامق ليكون واضحاً */}
          <a 
            href="tel:01203034182" 
            className="text-4xl font-black text-[#800000] hover:text-[#b37a34] transition-colors block"
          >
            01203034182
          </a>
        </div>

        {/* زر العودة */}
        <a 
          href="/" 
          className="mt-10 inline-block text-gray-500 hover:text-yellow-700 font-bold transition-colors"
        >
          ← العودة للرئيسية
        </a>
      </div>
    </div>
  );
}