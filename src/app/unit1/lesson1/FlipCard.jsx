// src/app/unit1/lesson1/FlipCard.jsx
"use client";
import { useState } from 'react';

export default function FlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="w-full h-80 cursor-pointer perspective-1000 mx-auto" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* الوجه الأمامي (أصفر فاتح) */}
        <div className="absolute w-full h-full backface-hidden bg-yellow-50 rounded-3xl shadow-lg flex flex-col items-center justify-center p-6 border-4 border-yellow-100">
          <span className="text-6xl mb-4">💡</span>
          <h3 className="text-2xl font-black text-yellow-900">هل تعلم؟</h3>
          <p className="text-yellow-800 font-bold mt-2">اضغط لتعرف حقيقة تاريخية!</p>
        </div>

        {/* الوجه الخلفي (أخضر فاتح) */}
        <div className="absolute w-full h-full backface-hidden bg-green-50 rounded-3xl shadow-lg flex items-center justify-center p-6 rotate-y-180 border-4 border-green-100">
          <p className="text-green-900 text-lg font-bold text-center leading-relaxed">
            "سجل المصريون أنشطتهم الزراعية على جدران المعابد والمقابر، مما يدل على أهمية الزراعة في حياتهم واقتصادهم."
          </p>
        </div>
      </div>
    </div>
  );
}