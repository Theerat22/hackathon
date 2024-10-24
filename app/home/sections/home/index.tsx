"use client";
// import Image from "next/image";
import {easeOut, motion} from "framer-motion";
import Link from "next/link";
export const Welcome = () => {
  return (
    <>
      <section id="welcome" className="min-h-[850px] pt-44 bg-gradient-to-b from-white to-gray-50 py-12 ">
      <div className="container mx-auto px-4 text-center">
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0, ease: easeOut}}
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Hackathon
          </h1>
        </motion.div>
        
          <motion.p 
          className="text-gray-500 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay : 0.5, ease: easeOut}}
          >
            hellooo
            </motion.p>
        <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay : 0.75, ease: easeOut}}
        >
          <Link href="#rooms">
            <button className="bg-indigo-600 text-white py-3 px-8 rounded-full hover:bg-indigo-700">
              ddd
            </button>
          </Link>
        </motion.div>
        
      </div>

      <div className="container mx-auto px-4 mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
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
        </motion.div>

      </div>

    </section>
    </>
  );
};
