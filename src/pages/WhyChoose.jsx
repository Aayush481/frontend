import React, { useEffect, useRef, useState } from 'react';

import './whyChoseUs.css';

const features = [
  {
    title: "AI Skill Extraction",
    desc: "Reveal your top skills instantly.",
    icon: "🤖"
  },
  {
    title: "Instant Insights",
    desc: "Get clear, actionable feedback.",
    icon: "⚡"
  },
  {
    title: "Private & Secure",
    desc: "Your resume stays confidential.",
    icon: "🔒"
  },
  {
    title: "Easy Upload",
    desc: "PDF & DOCX supported.",
    icon: "📄"
  },
  {
    title: "Career Boost",
    desc: "Unlock new job opportunities.",
    icon: "🚀"
  },
  {
    title: "Any Device",
    desc: "Works everywhere, anytime.",
    icon: "🌐"
  },
  {
    title: "Simple to Use",
    desc: "Clean, intuitive design.",
    icon: "👌"
  }
];

const WhyChoose = () => {
  const stepsRef = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const option = {
      root: null,
      threshold: 0.5,
    };

    const cb = (entries) => {
        console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number(entry.target.getAttribute('data-idx'));
          setActiveIdx(idx);
        }
      });
    };

    const observer = new IntersectionObserver(cb, option);

    stepsRef.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => {
      stepsRef.current.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  return (
    <div className='w-full flex justify-center items-center py-16 bg-gradient-to-b from-blue-700 via-blue-900 to-blue-400'>
      <div className='w-[85%] flex  flex-col justify-center items-center relative h-auto gap-10'>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Us?</h2>
             <div className='md:w-[80%] w-[100%] flex flex-col h-[300px] md:h-[490px] md:flex-row justify-center items-center relative overflow-hidden gap-2 feature-animate'>
        {/* left part */}
        <div className='w-[100%] md:w-1/2 flex flex-col gap-8 relative'>
      
          <div className="flex flex-col gap-6 gridCon ">
            {features.map((feature, idx) => (
              <div
                key={idx}
                data-idx={idx}
                ref={el => stepsRef.current[idx] = el}
                className={` w-[90%] transition-all duration-500 p-3  text-center items-center md:justify-center overflow-x-visible flex-wrap text-[10px] md:text-[16px] mr-[1rem] md:p6 rounded-xl border border-blue-400 bg-white/10 shadow-lg flex  flex-col md:flex-row items-center gap-2 md:gap-4 
                  ${activeIdx === idx ? 'scale-110 md:ml-7 bg-blue-900/70 border-blue-700 text-white shadow-2xl feature-animate' : 'opacity-70'}
                `}
              >
                <span className="text-4xl">{feature.icon}</span>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-blue-100">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className='md:w-[65%] w-[90%] h-full flex justify-center p-0 ml-0 relative md:opacity-[1] opacity-[1]'>
      <img src="https://cvcompiler.com/assets/images/rw-fixer.png" alt="" className='size-[80%] rounded-md' />
</div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;