import { Heart, ArrowRight, TrendingUp, Users, Building, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DonationBlock() {
  const impactStats = [
    { icon: Users, value: '500+', label: 'Students Empowered' },
    { icon: Building, value: '54', label: 'Years of Service' },
    { icon: Award, value: '100%', label: 'Free Education' },
  ];

  return (
    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-pink-600 to-purple-700">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-red-400 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left Content */}
          <div className="flex-1">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex bg-white/20 backdrop-blur-md p-5 rounded-3xl mb-6 shadow-lg"
            >
              <Heart className="text-white" size={48} fill="white" />
            </motion.div>

            <h3 className="text-4xl md:text-5xl mb-4 text-white leading-tight">
              Transform Lives with Your Support
            </h3>
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              Your generous donation provides free education, nutritious meals, hearing aids, and life-changing opportunities to hearing-impaired children who need it most.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                to="/donate"
                className="group bg-white text-orange-600 px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center gap-3 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <span className="text-lg">Donate Now</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/30 transition border border-white/30 text-lg">
                Learn More
              </button>
            </div>

            <div className="flex items-center gap-3 text-white/80 text-sm">
              <TrendingUp size={20} />
              <span>Every donation makes a real difference</span>
            </div>
          </div>

          {/* Right Stats */}
          <div className="lg:w-80">
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <p className="text-white/80 mb-6 text-sm uppercase tracking-wider">Our Impact</p>
              <div className="space-y-6">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                  >
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-2xl">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white text-3xl">{stat.value}</p>
                      <p className="text-white/70 text-sm">{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
