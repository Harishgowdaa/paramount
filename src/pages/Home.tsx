import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Drill, Cog, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import solidCarbide from '../assets/images/solid carbide-1.png';
import precise from '../assets/images/precise-2.png';
import highSpeed from '../assets/images/high-speed-3.png';
import cermet from '../assets/images/cermet-and-pcd-4.png';

const heroSlides = [
  {
    img: solidCarbide,
    title: 'The solid carbide all types of precision tools',
  },
  {
    img: precise,
    title: 'Precise, reliable and customized form cutter',
  },
  {
    img: highSpeed,
    title: 'High speed spl pcd reamer and combination tool',
  },
  {
    img: cermet,
    title: 'High speed expendable reamer carbide, cermet and pcd',
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
    <div className="min-h-screen bg-slate-950">
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwxNTUsMCwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="relative h-full w-full flex items-center"
          >
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="text-left md:pr-8">
                  <motion.h2
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-orange-400 text-sm md:text-base font-semibold uppercase tracking-wider mb-4"
                  >
                    Premium Solutions
                  </motion.h2>

                  <motion.h1
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
                  >
                    {heroSlides[currentSlide].title}
                  </motion.h1>

                  <motion.div
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="mt-4"
                  >
                    <Link
                      to="/products"
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
                    >
                      <span>Explore Products</span>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </motion.div>
                </div>

                <div className="flex justify-center md:justify-end">
                  <div className="relative w-full max-w-md md:max-w-lg h-[380px] md:h-[520px]">
                    <motion.div
                      initial={{ scale: 0.98, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.9 }}
                      transition={{ duration: 0.6 }}
                      className="absolute top-12 right-6 w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 transform rotate-3 bg-black/5 shadow-lg"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroSlides[nextIndex].img})` }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ scale: 0.99, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.95 }}
                      transition={{ duration: 0.6, delay: 0.05 }}
                      className="absolute top-6 right-3 w-full h-full rounded-3xl overflow-hidden border-2 border-white/15 transform -rotate-1 bg-black/5 shadow-2xl"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${heroSlides[prevIndex].img})` }}
                        aria-hidden="true"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 10, scale: 0.995, opacity: 0 }}
                      animate={{ y: 0, scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="absolute top-0 right-0 w-full h-full rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl bg-black"
                    >
                      <div
                        className="w-full h-full bg-cover bg-center relative"
                        style={{ backgroundImage: `url(${heroSlides[currentSlide].img})` }}
                        role="img"
                        aria-label={heroSlides[currentSlide].title}
                      >
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 bg-orange-500' : 'w-2 bg-slate-600'
                }`}
            />
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="h-6 w-6 text-white" />
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
