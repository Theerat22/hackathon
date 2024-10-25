"use client";
// import Image from "next/image";
import { easeOut, motion } from "framer-motion";

export const Form = () => {
  return (
    <>
      <section id="welcome" className="relative min-h-screen pt-32 bg-amber-100 py-12">
        {/* Circle Backgrounds */}
        <div className="absolute top-[-100px] left-[-150px] w-[500px] h-[500px] bg-[#4B6A81] opacity-80 rounded-full shadow-2xl z-0"></div>
        <div className="absolute top-[-50px] right-[-150px] w-[450px] h-[450px] bg-[#B2CF86] opacity-90 rounded-full shadow-xl"></div>
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#A6C8E1] opacity-85 rounded-full shadow-lg"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-[400px] h-[400px] bg-[#B2CF86] opacity-80 rounded-full shadow-xl animate-pulse"></div>
        <div className="absolute top-[200px] right-0 w-[200px] h-[200px] bg-[#E8F0C8] opacity-70 rounded-full shadow-md"></div>
        <div className="absolute bottom-[150px] left-[250px] w-[150px] h-[150px] bg-[#8DAB56] opacity-75 rounded-full shadow-lg"></div>

        {/* Form Container */}
        <div className="container mx-auto px-4 text-center z-10 relative">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0, ease: easeOut }}
        >
            <div className="bg-white text-customGreen font-bold text-3xl py-4 px-4 w-64 mx-auto rounded-xl shadow-lg z-10 mb-8">
                ข้อมูลส่วนตัว
            </div>
        </motion.div>


          {/* Form Inputs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: easeOut }}
          >
            <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
              {/* Name Input */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-left text-gray-700 font-semibold mb-2">
                ชื่อเล่น : 
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your name"
                />
              </div>
 
              {/* Age Input */}
              <div className="mb-6">
                <label htmlFor="age" className="block text-left text-gray-700 font-semibold mb-2">
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  className="w-full px-4 py-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your age"
                />
              </div>

              {/* Job Input */}
              <div className="mb-6">
                <label htmlFor="job" className="block text-left text-gray-700 font-semibold mb-2">
                  Job:
                </label>
                <input
                  type="text"
                  id="job"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Enter your job"
                />
              </div>

              {/* Submit Button */}
              
            </form>
            
          </motion.div>
          <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: easeOut }}
          >
                <button
                  type="submit"
                  className="bg-sky-500 text-white py-3 px-8 font-bold text-xl rounded-full  hover:bg-sky-600 transition-all duration-300 ease-out"
                >
                  Submit
                </button>
            </motion.div>

        </div>
      </section>
    </>
  );
};