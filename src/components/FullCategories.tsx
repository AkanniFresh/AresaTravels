/*
Expanded Tour Categories Section - React + Tailwind CSS
*/
import { motion} from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import { useState } from 'react';
import SubpageNavbar from './SubpageNavbar'; // Adjust the path as needed

const categories = [
  {
    icon: '🎓',
    title: 'Study Abroad',
    description:
      'Explore programs in the UK, USA, Canada & more. We guide you from application to visa.',
  },
  {
    icon: '💼',
    title: 'Work Abroad',
    description:
      'Discover job placements in Germany, UAE & more — legally and with full support.',
  },
  {
    icon: '💰',
    title: 'Scholarships',
    description:
      'Browse curated scholarships that fit your goals. We help you apply successfully.',
  },
  {
    icon: '🗣️',
    title: 'Language Training',
    description:
      'Prep for IELTS, TOEFL, or French tests with expert guidance. Boost your confidence.',
  },
];

const steps = [
  'Submit your interest',
  'Get personalized guidance',
  'Prepare documents',
  'Apply to programs or jobs',
  'Get support until arrival',
];

const FullCategories = () => {
  const [expanded, setExpanded] = useState(false);

  return (
       

    <section className="bg-blue-50 text-center">
             <SubpageNavbar />

           <div className="relative overflow-hidden h-[75vh]">
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full h-full"
        >
          <img 
            src="./logos/bookingpix.jpg" 
            alt="Mountain view" 
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-32 relative z-10 flex flex-col justify-center items-center h-[65vh]">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.p 
            className="text-lg text-white opacity-90 mb-4 text-center tracking-widest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
           THE JOURNEY BEGIN WITH JUST A CLICK
          </motion.p>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Explore Life-Changing Opportunities
          </motion.h1>

          {/* <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <motion.button 
             style={{
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
              className="flex w-fit items-center gap-1.5 rounded-sm bg-blue-400 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 uppercase font-semibold group text-sm"
              
            >
              SCROLL DOWN TO BOOK
              <FiArrowDown className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
            </motion.div> */}
        </motion.div>
      </div>
  </div>



             <div className='py-16 px-4'>

      <h2 className="text-2xl sm:text-3xl font-semibold mb-8">Tour Categories</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-white rounded shadow p-6 flex flex-col items-center"
          >
            <span className="text-3xl mb-2">{cat.icon}</span>
            <h3 className="text-lg font-semibold">{cat.title}</h3>
          </div>
        ))}
      </div>

      <button
        className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Hide Details' : 'Get Started'}
      </button>

      {expanded && (
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto text-left">
          <h3 className="text-xl font-bold mb-4">Explore Life-Changing Opportunities</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <div key={index} className="border p-4 rounded-md">
                <h4 className="text-lg font-semibold mb-2">
                  {cat.icon} {cat.title}
                </h4>
                <p className="text-sm text-gray-700">{cat.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-lg font-semibold mb-2">How It Works</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              {steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="mt-6 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
              Book a Free Consultation
            </button>
          </div>
        </div>
      )}
      </div>
    </section>
  );
};

export default FullCategories;
