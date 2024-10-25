// "use client";
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import Link from "next/link";
// interface PathNav {
//   home: string;
//   about: string;
// }

// const Navbar: React.FC<PathNav> = ({home, about}) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const scrollToSection = (id: string) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div>
//       <nav className="shadow-sm fixed w-full z-10 bg-white"> {/* Add bg-white or your preferred color */}
//         <div className="w-full">
//           <div className="flex items-center h-20 w-full">
//             <div className="flex items-center mx-10 justify-between w-full">
//               <div className="flex justify-center items-center flex-shrink-0">
//               <Link href="/home" scroll={true}
//                       onClick={() => scrollToSection("/home")}
//                       className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
//                     >
//                     <h1 className="font-bold text-black text-xl cursor-pointer text">
//                       ม่อนธารารีสอร์ท
//                     </h1>
//                   </Link>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-10 flex items-baseline space-x-4">
//                   <Link href={home} scroll={true}
//                       onClick={() => scrollToSection("#welcome")}
//                       className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black"
//                     >
//                       หน้าหลัก
//                   </Link>
//                   <Link
//                     href={rooms} scroll={true}
//                     onClick={() => scrollToSection("#rooms")}
//                     className="cursor-pointer text-black font-semibold px-3 py-2 text-md hover:font-black"
//                     >
//                       บ้านพัก
//                   </Link>
//                   <Link href={activity} scroll={true}
//                       onClick={() => scrollToSection("work")}
//                       className="cursor-pointer text-black font-semibold px-3 py-2 text-md hover:font-black"
//                     >
//                       กิจกรรม
//                   </Link>
//                   <Link href={services}scroll={true}
//                       onClick={() => scrollToSection("services")}
//                       className="cursor-pointer text-black font-semibold px-3 py-2 text-md hover:font-black"
//                     >
//                       สถานที่ใกล้เคียง
//                   </Link>
//                   <Link href={contact} scroll={false}
//                       onClick={() => scrollToSection("contact")}
//                       className="cursor-pointer text-black font-semibold px-3 py-2 text-md hover:font-black"
//                     >
//                       การติดต่อ
//                   </Link>
//                 </div>
//               </div>
//             </div>
//             <div className="mr-10 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded={isOpen}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <div className="md:hidden" id="mobile-menu">
//             <div className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"> {/* Set bg-white for mobile menu */}
//               <Link href="#home" scroll={false}
//                   onClick={() => scrollToSection("home")}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   Home
//               </Link>
//               <Link href="#about" scroll={false}
//                   onClick={() => scrollToSection("about")}
//                   className="cursor-pointer hover:bg-blue-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//                 >
//                   About
//               </Link>

//             </div>
//           </div>
//         </Transition>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
