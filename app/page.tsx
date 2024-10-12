"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Clock, ChevronRight } from 'lucide-react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-[#8B5CF6] text-white p-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto flex justify-between items-center"
        >
          <h1 className="text-4xl font-bold">Peeple</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#rules" className="hover:underline">Rules</a></li>
              <li><a href="#prizes" className="hover:underline">Prizes</a></li>
              <li><a href="#timeline" className="hover:underline">Timeline</a></li>
            </ul>
          </nav>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4"> Enhancing Women's Experience in Dating Apps </h2>
          <p className="text-xl mb-8">Join our competition to reshape the future of online dating!</p>
          <a href="https://unstop.com/p/innovating-for-her-enhancing-womens-experience-in-dating-apps-iit-roorkee-1177999" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#8B5CF6] text-white px-8 py-4 rounded-full text-lg font-semibold cursor-pointer"
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">About the Competition</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Users className="text-[#8B5CF6] w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Team Composition</h4>
              <p>Groups of 4 students, with at least one woman per team</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <Calendar className="text-[#8B5CF6] w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Duration</h4>
              <p>1 week to complete and submit your presentation</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          id="rules"
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Competition Rules</h3>
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
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Prizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#8B5CF6] text-white p-6 rounded-lg text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">1st Place</h4>
              <p className="text-3xl font-bold">₹20,000</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#8B5CF6] text-white p-6 rounded-lg text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">2nd Place</h4>
              <p className="text-3xl font-bold">₹10,000</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#8B5CF6] text-white p-6 rounded-lg text-center"
            >
              <Award className="w-16 h-16 mx-auto mb-4" />
              <h4 className="text-2xl font-semibold mb-2">3rd Place</h4>
              <p className="text-3xl font-bold">₹5,000</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          id="timeline"
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-4">Competition Timeline</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2" />
              <p><span className="font-semibold">Registration Opens:</span> Tomorrow</p>
            </div>
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2" />
              <p><span className="font-semibold">Registration Closes:</span> In 3 days</p>
            </div>
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2" />
              <p><span className="font-semibold">Competition Starts:</span> After registration closes</p>
            </div>
            <div className="flex items-center">
              <ChevronRight className="text-[#8B5CF6] w-6 h-6 mr-2" />
              <p><span className="font-semibold">Submission Deadline:</span> 1 week after start</p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Time Remaining</h3>
          <div className="flex justify-center space-x-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#8B5CF6]">{timeLeft.days}</p>
              <p>Days</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#8B5CF6]">{timeLeft.hours}</p>
              <p>Hours</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#8B5CF6]">{timeLeft.minutes}</p>
              <p>Minutes</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#8B5CF6]">{timeLeft.seconds}</p>
              <p>Seconds</p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="bg-[#8B5CF6] text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Peeple Dating App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;