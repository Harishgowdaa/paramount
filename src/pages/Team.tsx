import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    position: 'Chief Executive Officer',
    description: 'Visionary leader with 25+ years in precision manufacturing',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Priya Sharma',
    position: 'Chief Technology Officer',
    description: 'Expert in cutting-edge manufacturing technologies and innovation',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Amit Patel',
    position: 'Head of Operations',
    description: 'Streamlining production processes for maximum efficiency',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Sneha Reddy',
    position: 'Quality Assurance Director',
    description: 'Ensuring every product meets the highest quality standards',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Vikram Singh',
    position: 'Sales & Marketing Head',
    description: 'Building relationships and expanding global market presence',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'Neha Gupta',
    position: 'R&D Manager',
    description: 'Pioneering next-generation cutting tool solutions',
    color: 'from-indigo-500 to-blue-500',
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">Team</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              The brilliant minds behind our success and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all"
              >
                <div className="relative h-80 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  ></motion.div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`w-40 h-40 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-5xl font-bold border-4 border-slate-900/50`}
                    >
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </motion.div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.2, y: -5 }}
                        href="#"
                        className="bg-slate-800 p-3 rounded-full hover:bg-orange-500 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-white" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, y: -5 }}
                        href="#"
                        className="bg-slate-800 p-3 rounded-full hover:bg-orange-500 transition-colors"
                      >
                        <Mail className="h-5 w-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-orange-500 font-semibold mb-3">
                    {member.position}
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-xl"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Team</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for precision engineering and innovation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              View Open Positions
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { number: '15+', label: 'Team Members' },
              { number: '10+', label: 'Years Experience' },
              { number: '98%', label: 'Employee Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 text-center border border-slate-700"
              >
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
