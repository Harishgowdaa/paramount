import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, Search } from 'lucide-react';

const categories = ['All', 'HSS Tools', 'Carbide Tools', 'Milling Cutters', 'Drill Bits', 'Reamers', 'Custom'];

const products = [
  {
    id: 1,
    name: 'HSS Twist Drill',
    category: 'HSS Tools',
    description: 'High-speed steel twist drills for precision drilling operations',
    specs: 'Dia: 1-50mm | Material: M2 HSS',
  },
  {
    id: 2,
    name: 'Carbide End Mill',
    category: 'Carbide Tools',
    description: 'Premium carbide end mills for high-performance milling',
    specs: 'Dia: 3-25mm | Flutes: 2/4',
  },
  {
    id: 3,
    name: 'Shell End Mill',
    category: 'Milling Cutters',
    description: 'Heavy-duty shell end mills for face milling applications',
    specs: 'Dia: 40-100mm | Insert Type: APKT',
  },
  {
    id: 4,
    name: 'Straight Flute Drill',
    category: 'Drill Bits',
    description: 'Precision ground straight flute drills for accurate holes',
    specs: 'Dia: 0.5-20mm | Tolerance: h7',
  },
  {
    id: 5,
    name: 'Machine Reamer',
    category: 'Reamers',
    description: 'High precision reamers for finishing operations',
    specs: 'Dia: 3-50mm | Finish: Mirror Polish',
  },
  {
    id: 6,
    name: 'Custom Form Tool',
    category: 'Custom',
    description: 'Tailor-made cutting tools designed to your specifications',
    specs: 'Made to Order | Any Configuration',
  },
  {
    id: 7,
    name: 'HSS Slot Drill',
    category: 'HSS Tools',
    description: 'Versatile slot drills for slotting and profiling',
    specs: 'Dia: 2-20mm | 2 Flute Design',
  },
  {
    id: 8,
    name: 'Carbide Drill',
    category: 'Carbide Tools',
    description: 'Solid carbide drills for high-speed drilling',
    specs: 'Dia: 3-20mm | Point Angle: 140°',
  },
  {
    id: 9,
    name: 'Face Mill',
    category: 'Milling Cutters',
    description: 'Indexable face mills for surface finishing',
    specs: 'Dia: 50-200mm | Insert: APKT/RPMT',
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

          <motion.div
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
          </motion.div>

          <motion.div
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
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
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

                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform rotate-12"
                  ></motion.div>
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

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                    <span className="text-xs text-slate-500">{product.specs}</span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors"
                    >
                      View Details
                    </motion.button>
                  </div>
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
