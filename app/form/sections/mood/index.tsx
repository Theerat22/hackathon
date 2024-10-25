"use client";
// import Image from "next/image";
import { easeOut, motion } from "framer-motion";
import Link from "next/link";
import { CgWorkAlt } from "react-icons/cg";
import { IoMdHappy } from "react-icons/io";

export const Mood = () => {
  return (
    <>
      <section id="mood" className="relative min-h-screen pt-32 bg-amber-100 py-12 overflow-hidden">
        {/* Circle Backgrounds */}
        <div className="absolute top-[-100px] left-[-150px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-[#4B6A81] opacity-80 rounded-full shadow-2xl z-0"></div>
        <div className="absolute top-[-50px] right-[-150px] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] bg-[#B2CF86] opacity-90 rounded-full shadow-xl z-0"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#A6C8E1] opacity-85 rounded-full shadow-lg z-0"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] bg-[#B2CF86] opacity-80 rounded-full shadow-xl animate-pulse z-0"></div>
        
        <div className="absolute top-[150px] right-0 w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] bg-[#E8F0C8] opacity-70 rounded-full shadow-md z-0"></div>
        <div className="absolute bottom-[100px] left-[200px] w-[75px] h-[75px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px] bg-[#8DAB56] opacity-75 rounded-full shadow-lg z-0"></div>

        {/* Form Container */}
        <div className="container mx-auto px-4 text-center z-20 relative">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: easeOut }}
        >
            <div className="bg-white text-customGreen font-bold text-3xl py-4 px-4 w-64 mx-auto rounded-xl shadow-lg z-10 mb-8">
                ฉันอยู่ใน Mood อะไรตอนนี้
            </div>
        </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: easeOut }}
          >
            <div className="grid grid-rows-2 lg:grid-cols-2">

            <Link 
                href={'/home'}
                className="flex flex-col items-center mt-7 transform hover:scale-110 transition duration-300 lg:mt-20"
                >
                <div className="absolute bg-white py-10 px-12 w-64 lg:w-96 lg:py-16 lg:px-16 rounded-xl shadow-lg z-10 flex flex-col items-center justify-center min-h-[200px]">
                    <CgWorkAlt size={100} className="text-customGreen mb-2" /> {/* Adjusted margin-bottom */}
                    <h1 className="text-center text-customGreen font-semibold text-lg">โฟกัสการเรียน / ทำงาน</h1>
                </div>
            </Link>
            <Link 
                href={'/home'}
                className="flex flex-col items-center mt-7 transform hover:scale-110 transition duration-300 lg:mt-20"
                >
                <div className="bg-white py-10 px-12 w-64 lg:w-96 lg:py-16 lg:px-16 rounded-xl shadow-lg z-10 flex flex-col items-center justify-center min-h-[200px]">
                    <IoMdHappy size={100} className="text-customGreen mb-2" /> {/* Adjusted margin-bottom */}
                    <h1 className="text-center text-customGreen font-semibold text-lg">ผ่อนคลายจากการทำงาน</h1>
                </div>
            </Link>


            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};
