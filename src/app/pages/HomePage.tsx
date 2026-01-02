import { ArrowRight, Check, Sparkles, Award, Users, BookOpen, Heart, GraduationCap, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import DonationBlock from '../components/DonationBlock';
import { motion } from 'framer-motion';
import schoolImg from '../../assets/school.jpeg';
import p8 from '../../assets/p8.jpeg';
import p19 from '../../assets/p19.jpeg';
import p24 from '../../assets/p24.jpeg';
import p37 from '../../assets/p37.jpeg';

export default function HomePage() {
  const highlights = [
    { icon: BookOpen, title: 'Well-equipped Classrooms', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, title: 'Speech Therapy Room', color: 'from-purple-500 to-pink-500' },
    { icon: GraduationCap, title: 'Trained Special Educators', color: 'from-orange-500 to-red-500' },
    { icon: Award, title: 'Free Educational Materials', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, title: 'Hearing Aids for Students', color: 'from-rose-500 to-pink-500' },
    { icon: Lightbulb, title: 'CCTV Safety Systems', color: 'from-indigo-500 to-purple-500' },
  ];

  const stats = [
    { number: '54+', label: 'Years of Excellence', color: 'from-cyan-500 to-blue-600' },
    { number: '500+', label: 'Lives Transformed', color: 'from-orange-500 to-pink-600' },
    { number: '100%', label: 'Free Education', color: 'from-green-500 to-emerald-600' },
    // { number: '50+', label: 'Dedicated Staff', color: 'from-purple-500 to-indigo-600' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Hero Background Image (brightened) */}
        <div
          className="absolute inset-0 bg-cover bg-center filter brightness-110"
          style={{ backgroundImage: `url(${schoolImg})` }}
        />

        {/* Lighter overlay so background appears brighter */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Mesh Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-white/20"
              >
                <Sparkles className="text-yellow-400" size={20} />
                <span className="text-sm font-medium">Empowering Since 1970</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-6xl md:text-8xl mb-6 leading-tight"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Mukbadhir
                </span>
                <span className="block text-white">Vidyamandir</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-2xl mb-3 text-cyan-200"
              >
                Wardhmaneri, Maharashtra
              </motion.p>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-lg mb-10 text-gray-300 leading-relaxed max-w-xl"
              >
                Breaking barriers through education. Empowering hearing-impaired students with knowledge, skills, and confidence to achieve their dreams.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/admission"
                  className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all flex items-center gap-3 overflow-hidden"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
                <Link
                  to="/donate"
                  className="bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full hover:bg-white/20 transition border border-white/20 flex items-center gap-2"
                >
                  <Heart size={20} />
                  Support Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Content - Feature Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full h-[600px]">
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 right-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl w-80"
                >
                  <Award className="text-cyan-400 mb-4" size={40} />
                  <h3 className="text-white text-2xl mb-2">Recognized Excellence</h3>
                  <p className="text-gray-300">Government recognized since 1982</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-40 left-0 bg-gradient-to-br from-orange-500/20 to-pink-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl w-72"
                >
                  <Users className="text-orange-400 mb-4" size={40} />
                  <h3 className="text-white text-2xl mb-2">Expert Care</h3>
                  <p className="text-gray-300">Specialized educators and therapists</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-0 right-10 bg-gradient-to-br from-purple-500/20 to-indigo-600/20 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl w-72"
                >
                  <GraduationCap className="text-purple-400 mb-4" size={40} />
                  <h3 className="text-white text-2xl mb-2">Holistic Development</h3>
                  <p className="text-gray-300">Academic & vocational training</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className={`inline-block bg-gradient-to-br ${stat.color} p-1 rounded-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="bg-white px-8 py-6 rounded-3xl">
                    <p className={`text-5xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.number}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-3xl"></div>
                <ImageWithFallback
                  src={p37}
                  alt="Students Learning"
                  className="relative z-10 w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-orange-400 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl">
                  <div className="text-white text-center">
                    <p className="text-5xl mb-2">54</p>
                    <p className="text-sm">Years Legacy</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm mb-6">
                Our Legacy
              </div>
              <h2 className="text-6xl mb-6 text-gray-900 leading-tight">
                Transforming Lives Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Education</span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Shri Sant Bhanudas Maharaj Sanstha has been dedicated to empowering hearing-impaired children for over five decades. What started as a humble initiative has grown into a beacon of hope for hundreds of families.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe every child deserves quality education, dignity, and the opportunity to lead an independent life. Our holistic approach combines academic excellence with vocational training and life skills development.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-cyan-600 hover:gap-4 transition-all text-lg group"
              >
                Learn More About Us 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Facilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything your child needs to thrive and succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${highlight.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className={`inline-flex bg-gradient-to-br ${highlight.color} p-4 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <highlight.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl mb-3 text-gray-900">{highlight.title}</h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${highlight.color} rounded-full group-hover:w-full transition-all duration-500`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl mb-6">Latest Updates</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Stay informed about our achievements and upcoming events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                image: p8,
                title: "Annual Excellence Awards 2024",
                description: "Celebrating outstanding achievements in academics and arts"
              },
              {
                image: p19,
                title: "New Learning Programs",
                description: "Introducing advanced vocational training modules"
              },
              {
                image: p24,
                title: "Community Outreach",
                description: "Building bridges with local communities"
              }
            ].map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <ImageWithFallback
                  src={news.image}
                  alt={news.title}
                  className="w-full h-72 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent p-8 z-20">
                  <h3 className="text-2xl mb-2">{news.title}</h3>
                  <p className="text-gray-400">{news.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team section removed */}

      {/* Donation Section */}
      <section className="py-32 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-200/50 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[130px]"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <DonationBlock />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl mb-8">Ready to Make an Impact?</h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto text-gray-300">
              Join us in creating opportunities for hearing-impaired children to achieve their full potential
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/admission"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-full hover:shadow-2xl hover:shadow-cyan-500/50 transition-all text-lg flex items-center gap-3"
              >
                Apply for Admission
                <ArrowRight size={24} />
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 backdrop-blur-xl text-white px-12 py-5 rounded-full hover:bg-white/20 transition border border-white/20 text-lg"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}