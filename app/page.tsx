"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Clock, ChevronRight, Menu, X } from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const target = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10);
      const difference = target.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-[#8B5CF6] text-white p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Peeple</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#rules" className="hover:underline">Rules</a></li>
              <li><a href="#prizes" className="hover:underline">Prizes</a></li>
              <li><a href="#timeline" className="hover:underline">Timeline</a></li>
            </ul>
          </nav>
          <button onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-[#8B5CF6] text-white px-4 py-2 md:hidden"
        >
          <ul className="space-y-2">
            <li><a href="#about" className="block py-2" onClick={toggleMenu}>About</a></li>
            <li><a href="#rules" className="block py-2" onClick={toggleMenu}>Rules</a></li>
            <li><a href="#prizes" className="block py-2" onClick={toggleMenu}>Prizes</a></li>
            <li><a href="#timeline" className="block py-2" onClick={toggleMenu}>Timeline</a></li>
          </ul>
        </motion.div>
      )}

      <main className="container mx-auto px-4 py-8 md:py-12 overflow-x-hidden">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enhancing Women's Experience in Dating Apps</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8">Join our competition to reshape the future of online dating!</p>
          <a href="https://unstop.com/p/innovating-for-her-enhancing-womens-experience-in-dating-apps-iit-roorkee-1177999" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#8B5CF6] text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold cursor-pointer"
            >
              Register Now
            </motion.div>
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          id="about"
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">About the Competition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Users className="text-[#8B5CF6] w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Team Composition</h4>
              <p>Groups of 2-4 students, with at least one woman per team</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <Calendar className="text-[#8B5CF6] w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Duration</h4>
              <p>till 19th oct to complete and submit your presentation</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          id="rules"
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Competition Rules</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conduct user research on women's experiences in dating apps</li>
            <li>Propose innovative features to improve the dating experience for women</li>
            <li>Submit a comprehensive presentation detailing your findings and ideas</li>
            <li>Adhere to ethical guidelines and respect user privacy in your research</li>
          </ul>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          id="prizes"
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Prizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#8B5CF6] text-white p-6 rounded-lg text-center"
            >
              <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h4 className="text-xl md:text-2xl font-semibold mb-2">1st Place</h4>
              <p className="text-2xl md:text-3xl font-bold">₹20,000</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#8B5CF6] text-white p-6 rounded-lg text-center"
            >
              <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h4 className="text-xl md:text-2xl font-semibold mb-2">2nd Place</h4>
              <p className="text-2xl md:text-3xl font-bold">₹10,000</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#8B5CF6] text-white p-6 rounded-lg text-center"
            >
              <Award className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4" />
              <h4 className="text-xl md:text-2xl font-semibold mb-2">3rd Place</h4>
              <p className="text-2xl md:text-3xl font-bold">₹5,000</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          id="timeline"
          className="mb-12 md:mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Competition Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">Registration Opens:</span> 13th oct</p>
            </div>
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">Registration Closes:</span> In 19th oct</p>
            </div>
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">Competition Starts:</span> 13th oct</p>
            </div>
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2 flex-shrink-0" />
              <p><span className="font-semibold">Submission Deadline:</span> 19th oct</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Time Remaining</h3>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#8B5CF6]">{timeLeft.days}</p>
              <p className="text-sm md:text-base">Days</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#8B5CF6]">{timeLeft.hours}</p>
              <p className="text-sm md:text-base">Hours</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#8B5CF6]">{timeLeft.minutes}</p>
              <p className="text-sm md:text-base">Minutes</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-[#8B5CF6]">{timeLeft.seconds}</p>
              <p className="text-sm md:text-base">Seconds</p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#8B5CF6] text-white py-4 md:py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Peeple Dating App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;