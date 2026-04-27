import Link from 'next/link';
import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {/* شريط التنقل (Navbar) معدل بالأخضر الفاتح */}
        <nav className="bg-green-100 shadow-sm p-4 sticky top-0 z-50 border-b border-green-200">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            {/* نص العنوان بلون أخضر غامق ليكون واضحاً */}
            <div className="font-black text-xl text-green-900">منصتي التعليمية</div>
            
            <div className="flex gap-6">
              <Link href="/" className="font-bold text-green-800 hover:text-green-600 transition-colors">الرئيسية</Link>
              <Link href="/about" className="font-bold text-green-800 hover:text-green-600 transition-colors">حول المنصة</Link>
              <Link href="/instructions" className="font-bold text-green-800 hover:text-green-600 transition-colors">التعليمات</Link>
              <Link href="/unit1/lesson1" className="font-bold text-green-800 hover:text-green-600 transition-colors">المحتوى</Link>
              <Link href="/exam" className="font-bold text-green-800 hover:text-green-600 transition-colors">الاختبار</Link>
              <Link href="/help" className="font-bold text-green-800 hover:text-green-600 transition-colors">المساعدة</Link>
            </div>
          </div>
        </nav>
        
        {/* محتوى الصفحة المتغير */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}