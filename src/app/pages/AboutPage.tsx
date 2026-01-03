import { Heart, Users, Award, Target, Sparkles, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'framer-motion';
import school from '../../assets/school.jpeg';
import school2 from '../../assets/school2.jpeg';

/**
 * AboutPage component for Mukbadhir Vidyamandir.
 * Designed for responsiveness across mobile and desktop.
 */
export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We provide a nurturing environment where every child feels valued and supported in their educational journey.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Inclusion',
      description: 'We promote social inclusion and equal opportunities for all students, regardless of their abilities.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in education and care, continuously improving our methods and facilities.',
      color: 'from-orange-500 to-amber-600'
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500 rounded-full blur-[100px] md:blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-pink-500 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-4 py-1.5 md:px-5 md:py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="text-yellow-400" size={18} />
              <span className="text-white text-xs md:text-sm uppercase tracking-wider font-semibold">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl mb-6 text-white font-bold leading-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Us</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 leading-relaxed max-w-3xl">
              Five decades of dedication to empowering hearing-impaired children with education, dignity, and opportunity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-100/50 rounded-full blur-[100px] md:blur-[150px]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center lg:text-left"
              >
                <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm mb-6 font-semibold">
                  Our Legacy
                </div>
                <h2 className="text-4xl md:text-6xl mb-6 text-gray-900 font-bold">
                  54 Years of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Impact</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed">
                  <p>
                    Shri Sant Bhanudas Maharaj Sanstha has been dedicated to the service of persons with disabilities for the past 54 years at Wardhmaneri. With the noble intention of providing education, social inclusion, and self-reliance to hearing-impaired children, Mukbadhir Vidyamandir was established.
                  </p>
                  <p>
                    What began with limited resources has today evolved into a well-structured institution offering quality education, moral values, and vocational opportunities to hearing-impaired students.
                  </p>
                  <p>
                    Many former students are now successfully employed in various fields and are living dignified and independent lives.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mt-8 lg:mt-0"
              >
                <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-full h-full bg-gradient-to-br from-purple-400 to-pink-600 rounded-3xl"></div>
                <ImageWithFallback
                  src={school}
                  alt="School Building"
                  className="relative z-10 w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-4 font-bold text-gray-900">Our Purpose</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by our mission and vision to create lasting impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group-hover:border-transparent">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-4 md:p-5 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform">
                  <Target className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-3xl md:text-4xl mb-4 text-gray-900 font-bold">Our Mission</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To empower hearing-impaired children by providing quality education, life skills, and employment-oriented opportunities, ensuring they can live their lives with dignity and self-respect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity"></div>
              <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all border border-gray-100 group-hover:border-transparent">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 md:p-5 rounded-2xl inline-flex mb-6 group-hover:scale-110 transition-transform">
                  <Award className="text-white w-8 h-8 md:w-10 md:h-10" />
                </div>
                <h3 className="text-3xl md:text-4xl mb-4 text-gray-900 font-bold">Our Vision</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  To enable persons with disabilities to live with dignity and confidence, creating a society where every individual has the opportunity to lead an independent and fulfilling life.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-cyan-500 rounded-full blur-[100px] md:blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-pink-500 rounded-full blur-[100px] md:blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <TrendingUp size={48} className="mx-auto mb-6 md:mb-8 text-cyan-400 md:scale-125" />
            <blockquote className="text-2xl md:text-5xl mb-8 leading-relaxed italic font-medium">
              "To enable persons with disabilities to live with dignity and confidence"
            </blockquote>
            <p className="text-lg md:text-xl text-gray-300 font-semibold">— Our Guiding Philosophy</p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-4 font-bold text-gray-900">Our Core Values</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="relative inline-block mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity`}></div>
                  <div className={`relative bg-gradient-to-br ${value.color} p-6 md:p-8 rounded-3xl group-hover:scale-110 transition-transform`}>
                    <value.icon className="text-white w-10 h-10 md:w-12 md:h-12" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl mb-4 text-gray-900 font-bold">{value.title}</h3>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="py-16 md:py-32 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-4 font-bold text-gray-900">Our Campus</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A nurturing environment designed for learning and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
              <ImageWithFallback
                src={school2}
                alt="School Building"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>

            <motion.div
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
              <ImageWithFallback
                src={school}
                alt="Playground"
                className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-16 md:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl mb-6 font-bold">Official Recognition</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto">
              Officially recognized and accredited by government authorities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                { label: 'Recognition Date', value: '10 January 1982' },
                { label: 'License Number', value: '0316' },
                { label: 'UDISE Code', value: '27080110404' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition group"
                >
                  <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-3 uppercase tracking-wider font-semibold">{item.label}</p>
                  <p className="text-2xl md:text-3xl font-bold text-cyan-400 group-hover:text-white transition-colors">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}