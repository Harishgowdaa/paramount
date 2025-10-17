import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';
import Product1 from '../assets/images/products/product-1.png';
import Product2 from '../assets/images/products/product-2.webp';
import Product3 from '../assets/images/products/Products-3.jpg';

const categories = ['All', 'HSS Tools', 'Carbide Tools', 'Milling Cutters', 'Drill Bits', 'Reamers', 'Custom'];

const products = [
  {
    id: 1,
    name: 'Precision Machined Industrial Components',
    category: 'Metal components',
    description: 'A diverse assortment of precision-machined metal parts, including couplings, shafts, and threaded connectors.',
    specs: 'Dia: 1-50mm | Material: M2 HSS',
    image: Product1,
  },
  {
    id: 2,
    name: 'ISO CBN Inserts and Customized Types',
    category: 'Carbide Inserts',
    description: 'Various ISO CBN cutting inserts (CCGW, CNGA, DCGW, etc.) designed for precision machining tasks.',
    specs: 'Dia: 3-25mm | Flutes: 2/4',
    image: Product2,
  },
  {
    id: 3,
    name: 'Precision CNC Machining with Splined Tool',
    category: 'Milling',
    description: 'A splined cutting tool held in a tool holder is poised for or engaged in precision machining on a metal plate.',
    specs: 'Dia: 40-100mm | Insert Type: APKT',
    image: Product3,
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Products</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Precision-engineered cutting tools for every manufacturing need
            </p>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12"
          >
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-12 pr-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <span className="text-slate-400 text-sm">Filter:</span>
            </div>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div> */}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full"></div>

                <div className="relative h-72 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg shadow-lg bg-white/10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {product.name}
                    </h3>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-500">{product.specs}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div> */}
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-orange-600/5 transition-all duration-300 pointer-events-none"
                ></motion.div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
