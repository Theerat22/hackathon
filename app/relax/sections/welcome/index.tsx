"use client";

import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Form: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const options = [
    { label: 'จริงมาก', value: 1 },    // Very true
    { label: 'ค่อนข้างจริง', value: 2 },  // Somewhat true
    { label: 'น้อยครั้ง', value: 3 },   // Rarely true
    { label: 'ไม่เคย', value: 4 },     // Never true
  ];

  const handleSelect = (value: number) => {
    setSelectedValue(value);
    console.log('Selected value:', value); // For debugging or further use
  };

    useEffect(() => {
        const timer = setTimeout(() => {
          const askSection = document.getElementById("ask");
          if (askSection) {
            askSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 3000); // Show the #form section for 3 seconds
    
        return () => clearTimeout(timer); // Cleanup the timer
      }, []);

  return (
    <>
    <main className="relative  pt-32 bg-amber-100 py-12 overflow-hidden">

      <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4B6A81] opacity-80 rounded-full shadow-2xl z-0"></div>
        <div className="absolute top-[-50px] right-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#B2CF86] opacity-90 rounded-full shadow-xl z-0"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#A6C8E1] opacity-85 rounded-full shadow-lg z-0"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#B2CF86] opacity-80 rounded-full shadow-xl animate-pulse z-0"></div>
        
        <div className="absolute top-[150px] right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-[#E8F0C8] opacity-70 rounded-full shadow-md z-0"></div>
        <div className="absolute bottom-[100px] left-[200px] w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] bg-[#8DAB56] opacity-75 rounded-full shadow-lg z-0"></div>

        <section id="form" className="relative min-h-screen ">
        {/* Circle Backgrounds */}
        

        {/* Form Container */}
        <div className="container mx-auto px-4 text-center z-20 relative">

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: easeOut }}
        >
            <div className="bg-white text-customGreen font-bold text-3xl py-4 px-4 w-64 mx-auto rounded-xl shadow-lg z-10 mb-8">
                ผ่อนคลายจากการทำงาน
            </div>
        </motion.div>


        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: easeOut }}
        >
            <div className=" text-customGreen font-bold  z-10 mt-20">
                <p className="mb-7 text-4xl lg:text-6xlmb-10">สวัสดี </p>
                <p className="text-6xl lg:text-8xl">"สมชาย"</p>
            </div>
        </motion.div>


        
        </div>
      </section>

      <section id="ask" className="relative min-h-screen">

        {/* Form Container */}
        <div className="container mx-auto px-4 text-center flex flex-col justify-center items-center z-20 relative pt-20">

        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: easeOut }}
        >
            <div className="bg-white text-customGreen font-bold text-4xl py-6 px-6 max-w-3xl mx-auto rounded-xl shadow-lg z-10 mb-8">
            เธอเคยนอนไม่หลับเพราะคิดมากหรือกังวลใจ
            </div>
        </motion.div>
        <div className="flex flex-col space-y-4 p-4">
      {options.map((option, index) => (
        <motion.button
          key={option.value}
          onClick={() => handleSelect(option.value)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.75 + index * 0.2, ease: "easeOut" }}
          className={`py-8 px-20 text-white rounded-lg font-semibold 
          ${selectedValue === option.value ? 'ring-4 ring-blue-400' : ''} 
          ${option.value === 1 ? 'bg-[#C97E7E]' : ''} 
          ${option.value === 2 ? 'bg-[#D6AA8B]' : ''} 
          ${option.value === 3 ? 'bg-[#D6BE8B]' : ''} 
          ${option.value === 4 ? 'bg-[#AED68B]' : ''}`}
        >
          {option.label}
        </motion.button>
      ))}
      {selectedValue !== null && (
        
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                className="pt-8"
              >
                <Link href={'/relax/result'}>
                <button className="bg-sky-500 text-white py-3 px-8 font-bold text-xl rounded-full  hover:bg-sky-600 transition-all duration-300 ease-out">
                  Submit
                </button>
                </Link>
              </motion.div>
            )}
    </div>
        </div>

      </section>

    </main>
      
    </>
  );
};
