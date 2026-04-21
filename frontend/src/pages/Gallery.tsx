import React, { useState } from 'react';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'images' | 'videos'>('images');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const { images, videos } = siteData.gallery;

  const closeLightbox = () => setLightboxIndex(null);
  const closeVideo = () => setActiveVideo(null);

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white">
      <main>
        {/* 1. Hero Section */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={`${import.meta.env.BASE_URL}images/leopard-footer.jpeg`}
              alt="Gallery Background"
              className="w-full h-full object-cover grayscale-[40%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1106] via-transparent to-[#0c1106]/40" />
          </div>

          <div className="relative z-10 w-full px-6 pb-10 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Visual Memories
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              Our Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md mt-4 text-white/80 text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              A glimpse into the breathtaking wildlife, majestic landscapes, and unforgettable moments waiting for you.
            </motion.p>
          </div>
        </section>

        {/* 2. Tabs */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 mb-16">
          <div className="flex justify-center space-x-8 border-b border-white/10 pb-4">
            <button
              onClick={() => setActiveTab('images')}
              className={`text-2xl font-serif tracking-wide transition-colors relative ${
                activeTab === 'images' ? 'text-brand-green' : 'text-gray-500 hover:text-white'
              }`}
            >
              Images
              {activeTab === 'images' && (
                <motion.div layoutId="underline" className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-brand-green" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`text-2xl font-serif tracking-wide transition-colors relative ${
                activeTab === 'videos' ? 'text-brand-green' : 'text-gray-500 hover:text-white'
              }`}
            >
              Videos
              {activeTab === 'videos' && (
                <motion.div layoutId="underline" className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-brand-green" />
              )}
            </button>
          </div>
        </section>

        {/* 3. Content Area */}
        <section className="relative z-10 max-w-7xl mx-auto px-4 min-h-[50vh]">
          <AnimatePresence mode="wait">
            {activeTab === 'images' ? (
              <motion.div
                key="images"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {images.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    whileHover={{ scale: 1.02 }}
                    className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <h3 className="text-white font-serif text-xl">{img.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-10"
              >
                {videos.map((vid) => (
                  <motion.div
                    key={vid.id}
                    className="relative group cursor-pointer"
                    onClick={() => setActiveVideo(vid.url)}
                    onMouseEnter={(e) => {
                      const v = e.currentTarget.querySelector('video');
                      if (v) v.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      const v = e.currentTarget.querySelector('video');
                      if (v) {
                        v.pause();
                        v.currentTime = 0;
                      }
                    }}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-md border border-brand-green/20 bg-black">
                      <video
                        src={vid.url}
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors group-hover:bg-black/20">
                        <div className="w-16 h-16 rounded-full bg-brand-green/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(106,180,62,0.5)] group-hover:scale-110 transition-transform">
                          <Play className="w-6 h-6 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-2xl font-serif text-brand-green mb-2">{vid.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed max-w-md">{vid.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-brand-green p-2 transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="max-w-5xl w-full px-4 text-center">
              <img
                src={images[lightboxIndex].url}
                alt={images[lightboxIndex].title}
                className="max-h-[80vh] mx-auto object-contain rounded-sm shadow-2xl"
              />
              <p className="text-white font-serif text-2xl mt-6">{images[lightboxIndex].title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Player Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center"
          >
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 text-white hover:text-brand-green p-2 transition-colors z-10"
            >
              <X className="w-10 h-10" />
            </button>
            <div className="w-full max-w-6xl px-4">
              <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
                <video
                  src={activeVideo}
                  controls
                  autoPlay={true}
                  muted={false}
                  className="w-full h-full focus:outline-none"
                  controlsList="nodownload"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;
