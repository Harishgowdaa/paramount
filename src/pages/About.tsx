// MiniCarousel component above About
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { useRef } from 'react';
import MiniCarousel from '../components/MiniCarousel';


const milestones = [
  { year: '1985', title: 'Company Founded', description: 'Started with a vision to revolutionize cutting tool manufacturing' },
  { year: '1995', title: 'First Export', description: 'Expanded operations to international markets' },
  { year: '2005', title: 'ISO Certified', description: 'Achieved ISO 9001:2000 certification for quality management' },
  { year: '2015', title: 'Innovation Hub', description: 'Established R&D center for advanced tool development' },
  { year: '2025', title: 'Industry Leader', description: 'Recognized as a leading manufacturer with global presence' },
];

const values = [
  { icon: Award, title: 'Quality Excellence', description: 'Uncompromising commitment to superior quality in every product' },
  { icon: Users, title: 'Customer Focus', description: 'Building lasting relationships through exceptional service' },
  { icon: Target, title: 'Precision Engineering', description: 'Leveraging cutting-edge technology for perfect results' },
  { icon: TrendingUp, title: 'Continuous Innovation', description: 'Always pushing boundaries to develop better solutions' },
];

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwxNTUsMCwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        </motion.div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Paramount</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-slate-300"
            >
              Four decades of engineering excellence and innovation
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950" ref={containerRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center mb-24"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <p>
                  Paramount Cutting Tools has been at the forefront of precision manufacturing,
                  delivering cutting-edge solutions to industries worldwide. What started as a small workshop has
                  evolved into a state-of-the-art facility equipped with the latest technology.
                </p>
                <p>
                  Our journey has been marked by relentless innovation and an unwavering commitment to quality.
                  We've continuously invested in research, technology, and our people to ensure we stay ahead
                  of industry demands and exceed customer expectations.
                </p>
                <p>
                  Today, we serve clients across multiple continents, providing customized cutting tool solutions
                  that power manufacturing operations in automotive, aerospace, defense, and general engineering sectors.
                </p>
              </div>
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/src/assets/images/about/about-story.webp)` }}
                aria-label="Paramount Cutting Tools Factory"
              />
              {/* Mini carousel in left bottom */}
              <MiniCarousel />
            </motion.div>
// ...existing code...


function MiniCarousel() {
}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Journey</h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-orange-600 -translate-x-1/2 hidden md:block"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                      <div className="text-orange-500 font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-white font-bold text-xl mb-2">{milestone.title}</h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-950 z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  >
                    <value.icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              To be the global leader in cutting tool manufacturing by delivering innovative,
              precision-engineered solutions that empower our customers to achieve manufacturing
              excellence while maintaining the highest standards of quality, sustainability, and customer service.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {['ISO 9001 Certified', '24/7 Support'].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-2 text-white"
                >
                  <CheckCircle className="h-6 w-6" />
                  <span className="font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
