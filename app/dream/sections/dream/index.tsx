"use client";

import { easeOut, motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "@/app/context/GlobalContext";

export const Dream: React.FC = () => {
  const { formData, setFormData } = useForm();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  // const [volume, setVolume] = useState<number>(formData.environment);
  // const [focus, setFocus] = useState<number>(formData.mood);
  // console.log("formData:", formData);
  const router = useRouter();
  const questions = [
    {
      text: 'หากคุณต้องเลือกวิชาเรียนที่สนใจคุณจะเลือกสาขาใด',
      options: [
        { label: 'วิทยาศาสตร์', value: 4 },
        { label: 'คณิตศาสตร์และเทคโนโลยี', value: 3 },
        { label: 'ภาษา สังคม และการสื่อสาร', value: 2 },
        { label: 'สุนทรีย นาฏศิลป์ และทักษะชีวิต', value: 1 },
      ],
    },
    {
      text: 'คุณคิดว่าทักษะในข้อใดใกล้เคียงกับตัวคุณมากที่สุด',
      options: [
        { label: 'ด้านกีฬา ดนตรี และศิลปะ', value: 4 },
        { label: 'ด้านสังคมและความเป็นผู้นำ', value: 3 },
        { label: 'ด้านการวิทยาศาสตร์และเทคโนโลยี', value: 2 },
        { label: 'ด้านการแสดงละครและนาฏศิลป์', value: 1 },
        { label: 'ด้านการแสดงละครและนาฏศิลป์', value: 1 },
      ],
    },
    {
      text: 'สถานการณ์ใดที่คุณคิดว่าเป็นตัวเองมากที่สุด',
      options: [
        { label: 'ฉันรู้สึกดีเมื่อได้เล่นดนตรี หรือ วาดภาพ', value: 4 },
        { label: 'ฉันมีความสุขเมื่อได้ช่วยเหลือผู้อื่น', value: 3 },
        { label: 'ฉันชอบอ่านวารประเภทสารคดี หรือการเมือง', value: 2 },
        { label: 'ฉันรักและหลงไหลในสัตว์', value: 1 },
      ],
    },
    {
      text: 'ฉันไม่อยากพบปะผู้คน',
      options: [
        { label: 'บ่อยครั้ง', value: 4 },
        { label: 'ค่อนข้างบ่อย', value: 3 },
        { label: 'ไม่บ่อย', value: 2 },
        { label: 'ไม่เคย', value: 1 },
      ],
    },
    {
      text: 'ฉันรู้สึกกระวนกระวายอยู่ตลอดเวลา',
      options: [
        { label: 'บ่อยครั้ง', value: 4 },
        { label: 'ค่อนข้างบ่อย', value: 3 },
        { label: 'ไม่บ่อย', value: 2 },
        { label: 'ไม่เคย', value: 1 },
      ],
    },
    {
      text: 'ฉันมีอาการปวดหัวข้างเดียว หรือปวดบริเวณขมับทั้ง 2 ข้าง',
      options: [
        { label: 'บ่อยครั้ง', value: 4 },
        { label: 'ค่อนข้างบ่อย', value: 3 },
        { label: 'ไม่บ่อย', value: 2 },
        { label: 'ไม่เคย', value: 1 },
      ],
    },
    {
      text: 'ฉันมีอาการหัวใจเต้นแรง',
      options: [
        { label: 'บ่อยครั้ง', value: 4 },
        { label: 'ค่อนข้างบ่อย', value: 3 },
        { label: 'ไม่บ่อย', value: 2 },
        { label: 'ไม่เคย', value: 1 },
      ],
    },
    {
      text: 'ฉันมีอาการปวดหรือเกร็งกล้ามเนื้อบริเวณท้ายทอย หลัง หรือไหล่',
      options: [
        { label: 'บ่อยครั้ง', value: 4 },
        { label: 'ค่อนข้างบ่อย', value: 3 },
        { label: 'ไม่บ่อย', value: 2 },
        { label: 'ไม่เคย', value: 1 },
      ],
    },
  ];

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    console.log("Selected value:", value);
  };

  const handleSubmit = () => {
    if (selectedValue !== null) {
      const updatedAnswers = [...(formData.questions || []), selectedValue];

      setFormData({ ...formData, questions: updatedAnswers });
      

      console.log("Form submitted:", formData);

      // คำถามถัดไป
      setSelectedValue(null);
  
      // ถ้าเป็นคำถามสุดท้าย ให้ไปที่หน้าผลลัพธ์
      if (questionIndex === questions.length - 1) {
        console.log("Last question");
        // router.push("/relax/result");
      } else {
        // ถ้าไม่ใช่คำถามสุดท้าย ให้แสดงคำถามถัดไป
        setQuestionIndex(questionIndex + 1);
        // console.log("Next question index:", questionIndex + 1);
      }
    }
  };

  const handleVolumeChange = (value: number) => {
    setVolume(value);
    console.log("Selected volume:", value); // Debugging
  };

  const handleFocusChange = (value: number) => {
    setFocus(value);
    console.log("Selected focus level:", value); // Debugging
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
      <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4B6A81] opacity-80 rounded-full shadow-2xl z-0"></div>
        <div className="absolute top-[-50px] right-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#B2CF86] opacity-90 rounded-full shadow-xl z-0"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#A6C8E1] opacity-85 rounded-full shadow-lg z-0"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#B2CF86] opacity-80 rounded-full shadow-xl animate-pulse z-0"></div>
        
        <div className="absolute top-[150px] right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-[#E8F0C8] opacity-70 rounded-full shadow-md z-0"></div>
        <div className="absolute bottom-[100px] left-[200px] w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] bg-[#8DAB56] opacity-75 rounded-full shadow-lg z-0"></div>

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

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0, ease: easeOut }}>
            <div className="text-customGreen font-bold z-10 mt-20">
              <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: easeOut }} className="mb-7 text-4xl lg:text-6xlmb-10">
                สวัสดี
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.75, ease: easeOut }} className="text-6xl lg:text-8xl">
              &quot;{formData.name}&quot;
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="ask" className="relative min-h-screen">
      <div className="container mx-auto px-4 text-center flex flex-col justify-center items-center z-20 relative pt-20">
  <AnimatePresence mode="wait">
    <motion.div
      key={questionIndex}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 1, ease: easeOut }}
      className="bg-white text-customGreen font-bold text-2xl py-6 px-6 max-w-3xl mx-auto rounded-xl shadow-lg z-10 mb-8 lg:text-4xl"
    >
      {currentQuestion.text}
    </motion.div>
  </AnimatePresence>
  <div className="flex flex-col space-y-4 p-4">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
      className="relative"
    >
      <select
        onChange={(e) => handleSelect(e.target.value)}
        className="py-3 px-4 text-lg rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300"
        defaultValue=""
      >
        <option value="" disabled>Select an option</option>
        {currentQuestion.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </motion.div>
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
