import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { id: 1, title: 'Precision Milling', category: 'Manufacturing', height: 'tall' },
  { id: 2, title: 'Quality Control', category: 'Inspection', height: 'short' },
  { id: 3, title: 'Advanced Machinery', category: 'Facilities', height: 'medium' },
  { id: 4, title: 'Tool Assembly', category: 'Production', height: 'medium' },
  { id: 5, title: 'CNC Operations', category: 'Manufacturing', height: 'tall' },
  { id: 6, title: 'Material Testing', category: 'Quality', height: 'short' },
  { id: 7, title: 'Finished Products', category: 'Products', height: 'medium' },
  { id: 8, title: 'Team at Work', category: 'Team', height: 'short' },
  { id: 9, title: 'R&D Laboratory', category: 'Innovation', height: 'tall' },
  { id: 10, title: 'Packaging Unit', category: 'Logistics', height: 'medium' },
  { id: 11, title: 'Tool Design', category: 'Design', height: 'short' },
  { id: 12, title: 'Production Floor', category: 'Facilities', height: 'medium' },
];

const categories = ['All', 'Manufacturing', 'Facilities', 'Products', 'Quality', 'Team', 'Innovation'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = galleryImages.filter(
    (img) => selectedCategory === 'All' || img.category === selectedCategory
  );

  const getHeightClass = (height: string) => {
    switch (height) {
      case 'short': return 'h-48';
      case 'medium': return 'h-64';
      case 'tall': return 'h-80';
      default: return 'h-64';
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A6CE39] to-[#A6CE39]">Gallery</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              A glimpse into our world of precision manufacturing
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-3 mb-12 justify-center"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#A6CE39] to-[#A6CE39] text-white shadow-lg shadow-[#A6CE39]/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`group relative ${getHeightClass(image.height)} rounded-xl overflow-hidden cursor-pointer bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700`}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A6CE39]/20 via-transparent to-slate-900/50"></div>

                  <motion.div
                    className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/70 transition-all duration-300 flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="bg-[#A6CE39] p-4 rounded-full"
                    >
                      <ZoomIn className="h-6 w-6 text-white" />
                    </motion.div>
                  </motion.div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent">
                    <h3 className="text-white font-semibold text-lg mb-1">{image.title}</h3>
                    <span className="text-[#A6CE39] text-sm">{image.category}</span>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-slate-300">
                    {image.category}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg">No images found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-4 right-4 bg-slate-800 p-3 rounded-full hover:bg-[#A6CE39] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-5xl w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border-2 border-[#A6CE39]/50 shadow-2xl shadow-[#A6CE39]/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#A6CE39]/10 via-transparent to-slate-900/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-white mb-4">
                    {galleryImages.find(img => img.id === selectedImage)?.title}
                  </div>
                  <div className="text-[#A6CE39] text-xl">
                    {galleryImages.find(img => img.id === selectedImage)?.category}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
