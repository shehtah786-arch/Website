// src/app/layout.js
import Link from 'next/link';
import './globals.css'; 

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      {/* التعديل هنا: تم وضع كود اللون الدقيق من الصورة bg-[#E6F3F1] */}
      <body className="bg-[#E6F3F1] min-h-screen">
        
        {/* شريط التنقل (Navbar) - جعلناه بلون متناسق (أخضر أهدى قليلاً) */}
        <nav className="bg-[#D9EAE8] shadow-sm p-4 sticky top-0 z-50 border-b border-[#C8DFDC]">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="font-black text-xl text-[#2F4F4F]">منصتي التعليمية</div>
            
            <div className="flex gap-6">
              <Link href="/" className="font-bold text-[#365E5C] hover:text-[#2F4F4F] transition-colors">الرئيسية</Link>
              <Link href="/about" className="font-bold text-[#365E5C] hover:text-[#2F4F4F] transition-colors">حول المنصة</Link>
              <Link href="/instructions" className="font-bold text-[#365E5C] hover:text-[#2F4F4F] transition-colors">التعليمات</Link>
              
              <Link href="/objectives" className="font-bold text-[#365E5C] hover:text-[#2F4F4F] transition-colors">المحتوى</Link>
              
              <Link href="/exam" className="font-bold text-[#365E5C] hover:text-[#2F4F4F] transition-colors">الاختبار</Link>
              <Link href="/help" className="font-bold text-[#365E5C] hover:text-[#2F4F4F] transition-colors">المساعدة</Link>
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