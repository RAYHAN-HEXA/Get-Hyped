import React, { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const [stickers, setStickers] = useState([]);
  const lastPositionRef = useRef({ x: 0, y: 0 });

  const colors = ['#3b82f6', '#22c55e', '#ef4444', '#eab308', '#a855f7', '#ffffff'];

  const distanceCheck = (currentPos) => {
    const lastPos = lastPositionRef.current;
    const dx = currentPos.x - lastPos.x;
    const dy = currentPos.y - lastPos.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleMouseMove = useCallback((e) => {
    const currentPosition = { x: e.clientX, y: e.clientY };
    if (distanceCheck(currentPosition) < 220) return;

    lastPositionRef.current = currentPosition;

    const newSticker = {
      id: Date.now() + Math.random(),
      ...currentPosition,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: Math.random() * 40 - 20,
    };

    setStickers((prev) => [...prev, newSticker]);
    setTimeout(() => {
      setStickers((prev) => prev.filter((s) => s.id !== newSticker.id));
    }, 2500);
  }, []);

  return (
    <footer className="relative w-full min-h-screen bg-[#f5f0e6] flex flex-col overflow-hidden font-sans text-black">
      {/* Interaction Layer */}
      <div 
        onMouseMove={handleMouseMove}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="w-full h-[70%] flex flex-col items-center justify-center select-none">
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-none pointer-events-none">
            Let's Get Hyped!
          </h1>
          
          <div className="mt-12 flex flex-wrap gap-4 justify-center pointer-events-auto z-30">
            <button className="flex items-center gap-2 px-8 py-4 bg-white border-2 border-black rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all">
              Mail ons direct <span className="bg-black text-white rounded p-0.5 px-1 text-xs">📩</span>
            </button>
            <button className="flex items-center gap-2 px-8 py-4 bg-[#ff4d29] text-white border-2 border-black rounded-full font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform">
              Get Results <span className="bg-white rounded-full p-1 text-[10px]">🔥</span>
            </button>
          </div>
        </div>
      </div>

      {/* Stickers Rendering */}
      <AnimatePresence>
        {stickers.map((sticker) => (
          <motion.div
            key={sticker.id}
            initial={{ opacity: 0, scale: 0.3, rotate: sticker.rotate - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: sticker.rotate }}
            exit={{ opacity: 0, scale: 1.1, y: -40 }}
            style={{
              position: 'fixed',
              left: sticker.x,
              top: sticker.y,
              x: '-50%',
              y: '-50%',
              zIndex: 5,
            }}
            className="pointer-events-none"
          >
            <div 
              style={{ backgroundColor: sticker.color }}
              className="px-10 py-3 border-[3px] border-black rounded-xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <span className="text-5xl font-black italic tracking-tighter uppercase">GET HYPED</span>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bottom Information Section */}
      <div className="mt-auto w-full px-6 md:px-16 pb-12 z-30 flex flex-col md:flex-row justify-between items-end gap-10">
        
        {/* Left Side: Branding/Visual */}
        <div className="hidden md:block">
           <h2 className="text-8xl font-black opacity-10 leading-none rotate-[-5deg] origin-left">GETHYPED</h2>
        </div>

        {/* Right Side: Links & Info */}
        <div className="flex flex-col items-end gap-8 w-full md:w-auto">
          {/* Nav Pills */}
          <div className="flex flex-wrap justify-end gap-3">
            {['Expertises', 'Work', 'About', 'Contact'].map((item) => (
              <button key={item} className="px-5 py-2 bg-white border border-black/10 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-shadow">
                {item}
              </button>
            ))}
          </div>

          {/* Socials & Contact Wrapper */}
          <div className="flex flex-col md:flex-row gap-10 text-right md:text-left items-end md:items-start">
            {/* Social Icons */}
            <div className="flex flex-col items-end gap-3">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Follow us</p>
              <div className="flex gap-3">
                {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-black/5 hover:bg-black hover:text-white transition-colors">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Contact</p>
              <a href="mailto:info@gethyped.nl" className="text-lg font-bold hover:underline">info@gethyped.nl</a>
              <p className="text-sm font-medium text-gray-600">+31 6 1533 7496</p>
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Adres</p>
              <p className="text-sm font-medium leading-relaxed">
                Bedrijvenstraat 6,<br />
                7141 AL Groenlo
              </p>
            </div>
          </div>

          {/* Copyrights */}
          <div className="flex justify-between w-full border-t border-black/5 pt-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            <p>© 2025 GET HYPED</p>
            <p>DESIGN BY DYLAN</p>
            <p className="hidden md:block">Privacyvoorwaarden</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;