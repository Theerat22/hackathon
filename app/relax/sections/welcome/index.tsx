"use client";

import { easeOut, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Form: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const router = useRouter();
  const questions = [
    {
      text: "เธอเคยนอนไม่หลับเพราะคิดมากหรือกังวลใจ",
      options: [
        { label: 'จริงมาก', value: 1 },
        { label: 'ค่อนข้างจริง', value: 2 },
        { label: 'น้อยครั้ง', value: 3 },
        { label: 'ไม่เคย', value: 4 },
      ],
    },
    {
      text: "เธอเคยมีความกดดันจากการทำงานไหม",
      options: [
        { label: 'บ่อยครั้ง', value: 1 },
        { label: 'ค่อนข้างบ่อย', value: 2 },
        { label: 'ไม่บ่อย', value: 3 },
        { label: 'ไม่เคย', value: 4 },
      ],
    },
    // Add more questions as needed
  ];

  const handleSelect = (value: number) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    // if (selectedValue !== null) {
    //   const updatedAnswers = [...answers, selectedValue];
    //   setAnswers(updatedAnswers);
    //   setSelectedValue(null);

    //   // Navigate to the results page with answers in the query
    //   router.push({
    //     pathname: "/relax/result",
    //     query: { answers: JSON.stringify(updatedAnswers) },
    //   });
    // }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      const askSection = document.getElementById("ask");
      if (askSection) {
        askSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const currentQuestion = questions[questionIndex];

  return (
    <main className="relative pt-32 bg-amber-100 py-12 overflow-hidden">
      <section id="form" className="relative min-h-screen">
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
        </div>
      </section>

      <section id="ask" className="relative min-h-screen">
        <div className="container mx-auto px-4 text-center flex flex-col justify-center items-center z-20 relative pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={questionIndex} // Trigger animation on question change
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1, ease: easeOut }}
              className="bg-white text-customGreen font-bold text-4xl py-6 px-6 max-w-3xl mx-auto rounded-xl shadow-lg z-10 mb-8"
            >
              {currentQuestion.text}
            </motion.div>
          </AnimatePresence>
          <div className="flex flex-col space-y-4 p-4">
            {currentQuestion.options.map((option, index) => (
              <motion.button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.75 + index * 0.2,
                  ease: "easeOut",
                }}
                className={`py-8 px-20 text-white rounded-lg font-semibold 
                ${selectedValue === option.value ? "ring-4 ring-white" : ""} 
                ${option.value === 1 ? "bg-[#C97E7E]" : ""} 
                ${option.value === 2 ? "bg-[#D6AA8B]" : ""} 
                ${option.value === 3 ? "bg-[#D6BE8B]" : ""} 
                ${option.value === 4 ? "bg-[#AED68B]" : ""}`}
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
                <button
                  onClick={handleSubmit}
                  className="bg-sky-500 text-white py-3 px-8 font-bold text-xl rounded-full hover:bg-sky-600 transition-all duration-300 ease-out"
                >
                  Submit
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
