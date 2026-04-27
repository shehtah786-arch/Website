export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6" dir="rtl">
      <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 text-center max-w-lg w-full">
        
        {/* العنوان */}
        <h1 className="text-3xl font-black text-blue-900 mb-6">مركز المساعدة</h1>
        
        {/* نص توضيحي */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          إذا واجهتك أي مشكلة أثناء تصفح الموقع، نحن هنا لدعمك. يمكنك الاتصال بنا مباشرة على الرقم التالي:
        </p>

        {/* صندوق رقم الهاتف */}
        <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-100">
          <h3 className="text-sm font-bold text-blue-600 uppercase mb-3 tracking-widest">
            رقم الهاتف
          </h3>
          {/* رابط الاتصال السريع (يعمل عند الضغط عليه من الموبايل) */}
          <a 
            href="tel:01203034182" 
            className="text-4xl font-black text-blue-900 hover:text-blue-700 transition-colors block"
          >
            01203034182
          </a>
        </div>

        {/* زر العودة */}
        <a 
          href="/" 
          className="mt-10 inline-block text-gray-500 hover:text-blue-600 font-bold transition-colors"
        >
          ← العودة للرئيسية
        </a>
      </div>
    </div>
  );
}