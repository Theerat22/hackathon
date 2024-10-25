"use client";
// import Image from "next/image";
import {easeOut, motion} from "framer-motion";
// import { TbClick } from "react-icons/tb";

import Link from "next/link";
export const Welcome = () => {
  return (
    <>
      <section id="welcome" className="relative min-h-screen pt-32 bg-amber-100 py-12 ">
      <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#4B6A81] opacity-80 rounded-full shadow-2xl"></div>
      <div className="absolute top-[-50px] right-[-150px] w-[450px] h-[450px] bg-[#B2CF86] opacity-90 rounded-full shadow-xl "></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#A6C8E1] opacity-85 rounded-full shadow-lg "></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[400px] h-[400px] bg-[#B2CF86] opacity-80 rounded-full shadow-xl animate-pulse"></div>
      
      <div className="absolute top-[200px] right-0 w-[200px] h-[200px] bg-[#E8F0C8] opacity-70 rounded-full shadow-md"></div>
      <div className="absolute bottom-[150px] left-[250px] w-[150px] h-[150px] bg-[#8DAB56] opacity-75 rounded-full shadow-lg"></div>

      <div className="container mx-auto px-4 text-center">
        <motion.div

        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0, ease: easeOut}}
        >
          <h1 className="text-6xl font-bold text-customGreen mb-4 pt-20 lg:text-8xl">
            MoodFlow
          </h1>
        </motion.div>
        
          <motion.div 
          className="flex justify-center text-white m-5 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 0.5, ease: easeOut}}
          >
            <p className="text-lg m-3 lg:text-3xl max-w-lg text-center text-gray-500">
            MoodFlow เป็นเว็ปแอปพลิเคชั่นช่วยให้ผุ้ใช้งานผ่อนคลายได้ จากการเรียนหนังสือ และให้คำปรึกษาเกี่ยวกับการเรียน
            </p>

          </motion.div>

        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0.75, ease: easeOut}}
        >
          <Link href="/form">
            <button className="bg-sky-500 text-white py-3 px-8 font-bold text-3xl md:py-5 md:px-10 rounded-full mt-4 hover:bg-sky-600 transition-all duration-300 ease-out">
              start
            </button>
            
          </Link>
          {/* <TbClick size={30} /> */}
        </motion.div>
        
      </div>

      {/* <div className="container mx-auto px-4 mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1, ease: easeOut}}
          >
            <p>Hello</p>
          </motion.div>
        
          <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1.2, ease: easeOut }}
          >
            <p>Hello</p>
          </motion.div>

        <motion.div 
          className="col-span-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 1.5, ease: easeOut }}
          >
            <p>Hello</p>
        </motion.div> */}

      {/* </div> */}

    </section>
    </>
  );
};
