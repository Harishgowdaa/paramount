import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Drill, Cog, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import solidCarbide from '../assets/images/solid_carbide-1.png';
import precise from '../assets/images/precise-2.png';
import highSpeed from '../assets/images/high-speed-3.png';
import cermet from '../assets/images/cermet-and-pcd-4.png';
import threadmill from '../assets/images/threadmill-5.png';
import customizedsplinserts from '../assets/images/customized-spl-inserts-6.png';
import hob from '../assets/images/hob-7.png';
import FineBoring from '../assets/images/Fine-Boring-8.png';
import FormTool from '../assets/images/Form-Tool.png';

const heroSlides = [
  {
    img: FormTool,
    title: 'Form Tools Precision Engineered For Excellence',
  },
  {
    img: solidCarbide,
    title: 'Solid Carbide All Types Of Precision Tools',
  },
  {
    img: precise,
    title: 'Precise, Reliable And Customized Form Cutter',
  },
  {
    img: highSpeed,
    title: 'High Speed Spl Pcd Reamer And Combination Tool',
  },
  {
    img: cermet,
    title: 'High Speed Expendable Reamer Carbide, Cermet And Pcd',
  },
  {
    img: threadmill,
    title: 'Spl Solid Carbide Thread Mill And Boring Tools',
  },
  {
    img: customizedsplinserts,
    title: 'Customized Spl Inserts',
  },
  {
    img: hob,
    title: 'Hob, Fir Tree And Port Tools',
  },
  {
    img: FineBoring,
    title: 'Competence Reaming And Fine Boring',
  },
];


const products = [
  {
    icon: Drill,
    name: 'HSS Cutting Tools',
    description: 'High-speed steel tools engineered for maximum performance and extended tool life.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cog,
    name: 'Carbide Solutions',
    description: 'Premium carbide tools offering exceptional hardness and wear resistance.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Wrench,
    name: 'Custom Tooling',
    description: 'Bespoke cutting solutions tailored to your specific manufacturing needs.',
    color: 'from-purple-500 to-pink-500',
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const prevIndex = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
  const nextIndex = (currentSlide + 1) % heroSlides.length;

  return (
    <div className="min-h-screen md:m bg-slate-950">
      <section className="relative h-[90vh] overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="relative h-full w-full flex items-center"
          >
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 h-full">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-6 items-center h-full">

                <div className="md:col-span-3 text-left flex flex-col justify-center ml-4 sm:ml-6 md:ml-10">
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-orange-400 text-xs md:text-sm font-semibold uppercase tracking-wider mb-3"
                  >
                    Precision Engineering
                  </motion.h2>

                  <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-6"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>

                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Link
                      to="/products"
                      className="inline-flex items-center space-x-2 bg-orange-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-orange-500 transition-all"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </motion.div>
                </div>

                <div className="md:col-span-7 flex justify-center items-center h-full ml-4 sm:ml-6 md:ml-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-[60vh] lg:h-[70vh] flex justify-center items-center"
                  >
                    <img
                      src={heroSlides[currentSlide].img}
                      alt={heroSlides[currentSlide].title}
                      className="max-w-[95%] h-full object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-6 bg-orange-500' : 'w-2 bg-slate-600'
                }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Premium Range
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Discover our collection of precision-engineered cutting tools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`bg-gradient-to-br ${product.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}
                >
                  <product.icon className="h-8 w-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <motion.a
                  href="#"
                  className="inline-flex items-center space-x-2 text-orange-500 font-semibold group-hover:text-orange-400"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.a>

                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
