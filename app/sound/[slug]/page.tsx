"use client";
import { notFound } from 'next/navigation';
import { motion,easeOut } from "framer-motion";
import { useParams } from 'next/navigation';

const soundData = {
    sound1: {
        name: "อันนี้คือเสียงแอร์",
        description: "มีประโยชน์บลลาๆๆๆๆๆๆ",
    },
    sound2: {
        name: "อันนี้คือเสียงพัดลม",
        description: "มีประโยชน์บลลาๆๆๆๆๆๆ",
    },
}

export default function RoomDetails() {
    const params = useParams();
    const sound = soundData[params.slug as keyof typeof soundData];
    if (!sound) {
        notFound(); 
      }
    return (
        <>
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
              เปิดเพลงเพื่อปรับ Mood ของคุณ
            </div>
          </motion.div>


          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.75, ease: easeOut }}
            >
                <h1 className='text-black text-2xl'>{sound.name}</h1>
                <p className='text-black text-2xl'>{sound.description}</p>
            </motion.div>
        </div>
      </section>

    </main>
        </>
    );
}