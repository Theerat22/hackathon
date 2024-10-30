"use client";

import { easeOut, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "@/app/context/GlobalContext";

export const Form: React.FC = () => {
  const { formData, setFormData } = useForm();
  const router = useRouter();
  const [volume, setVolume] = useState<number>(formData.environment);
  const [focus, setFocus] = useState<number>(formData.mood);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      name: formData.name,
      job: formData.job,
      age: formData.age,
      environment: volume,
      mood: focus,
      questions: [],
    });
    console.log("Form submitted:", { environment: volume, mood: focus });
    router.push("/focus/result");
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

  return (
    <main className="relative pt-32 bg-amber-100 py-12 overflow-hidden">
      <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4B6A81] opacity-80 rounded-full shadow-2xl z-0"></div>
        <div className="absolute top-[-50px] right-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#B2CF86] opacity-90 rounded-full shadow-xl z-0"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#A6C8E1] opacity-85 rounded-full shadow-lg z-0"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#B2CF86] opacity-80 rounded-full shadow-xl animate-pulse z-0"></div>
        
        <div className="absolute top-[150px] right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-[#E8F0C8] opacity-70 rounded-full shadow-md z-0"></div>
        <div className="absolute bottom-[100px] left-[200px] w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] bg-[#8DAB56] opacity-75 rounded-full shadow-lg z-0"></div>

      {/* Other background elements */}

      <section id="form" className="relative min-h-screen">
        <div className="container mx-auto px-4 text-center z-20 relative">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0, ease: easeOut }}>
            <div className="bg-white text-customGreen font-bold text-3xl py-4 px-4 w-64 mx-auto rounded-xl shadow-lg z-10 mb-8">
              โฟกัสการเรียน / ทำงาน
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
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0, ease: "easeOut" }}>
            <div className="bg-white text-customGreen font-bold text-2xl py-6 px-6 max-w-3xl mx-auto rounded-xl shadow-lg z-10 mb-8 lg:text-4xl">
              สภาพแวดล้อมของคุณ มีเสียงรบกวนระดับไหน
            </div>
          </motion.div>

          <motion.div className="flex space-x-4 justify-center pt-5" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
              <button key={value} onClick={() => handleVolumeChange(value)} className={`py-4 px-6 text-white rounded-full font-semibold ${volume === value ? "bg-[#4B6A81]" : "bg-gray-300"} ${volume === value ? "text-white" : ""}`}>
                {value}
              </button>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0, ease: "easeOut" }}>
            <div className="bg-white text-customGreen font-bold text-2xl py-6 px-6 max-w-3xl mt-24 mx-auto rounded-xl shadow-lg z-10 mb-8 lg:text-4xl">
              ระดับความโฟกัสที่ต้องการ
            </div>
          </motion.div>

          <motion.div className="flex space-x-4 justify-center pt-5" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((value) => (
              <button key={value} onClick={() => handleFocusChange(value)} className={`py-4 px-6 text-white rounded-full font-semibold ${focus === value ? "bg-[#4B6A81]" : "bg-gray-300"} ${focus === value ? "text-white" : ""}`}>
                {value}
              </button>
            ))}
          </motion.div>

          {volume !== null && focus !== null && (
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.75, ease: "easeOut" }} className="mt-20">
              <button onClick={handleSubmit} className="bg-sky-500 text-white py-3 px-6 rounded-full font-bold shadow-lg text-2xl hover:transition-all duration-300 ease-out">
                ตกลง
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
};
