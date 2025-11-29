import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const resolvePath = (item: string) => {
    if (item === 'Home') return '/';
    if (item === 'About Us') return '/about';
    if (item === 'Our Team') return '/team';
    return `/${item.toLowerCase().replace(/\s+/g, '-')}`;
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 pt-16 pb-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4">
              Paramount Cutting Tools
            </h3>
            <p className="text-sm text-slate-400 mb-4">
              Precision engineering meets innovation. Manufacturing cutting-edge solutions for the mechanical industry since decades.
            </p>
            {/* <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-[#A6CE39] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-[#A6CE39] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="bg-slate-800 p-2 rounded-lg hover:bg-[#A6CE39] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </motion.a>
            </div> */}
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Our Team', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={resolvePath(item)}
                    className="text-sm hover:text-[#A6CE39] transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {['HSS Tools', 'Carbide Tools', 'Milling Cutters', 'Reamers', 'Drill Bits', 'Custom Solutions'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm hover:text-[#A6CE39] transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#A6CE39] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  D-426, 1st Floor, 10th Main road, <br/> 2nd Stage, Peenya, Industrial Area, Bangalore - 560058
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#A6CE39] flex-shrink-0" />
                <a href="tel:+919900858297" className="text-sm hover:text-[#A6CE39] transition-colors">
                  +91 9900858297
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#A6CE39] flex-shrink-0" />
                <a href="mailto:tools@paramountco.in" className="text-sm hover:text-[#A6CE39] transition-colors">
                  tools@paramountco.in
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-slate-800 pt-8 flex flex-col items-center"
        >
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Paramount Cutting Tools. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-slate-500 hover:text-[#A6CE39] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-slate-500 hover:text-[#A6CE39] transition-colors">
              Terms of Service
            </a>
          </div> */}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
