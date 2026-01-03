import { GraduationCap, Heart, Palette, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { motion } from 'framer-motion';
import p19 from '../../assets/p19.jpeg';
import p18 from '../../assets/p18.jpeg';
import p37 from '../../assets/p37.jpeg';

export default function ServicesPage() {
  const services = [
    {
      icon: GraduationCap,
      title: 'Special Education Programs',
      description: 'Comprehensive educational programs designed specifically for hearing-impaired students with experienced special educators.',
    },
    {
      icon: Heart,
      title: 'Speech Therapy',
      description: 'Professional speech therapy services with dedicated therapy rooms and trained therapists.',
    },
    {
      icon: Palette,
      title: 'Vocational Training',
      description: 'Handicraft training, drawing, and painting education to develop practical skills.',
    },
    {
      icon: Users,
      title: 'Counseling Services',
      description: 'Regular counseling sessions and parent-teacher meetings to support student development.',
    },
  ];

  const activities = [
    'Cultural programs and annual day celebrations',
    'Sports events and physical education',
    'Art and craft exhibitions',
    'Drawing and painting competitions',
    'Handicraft workshops',
    'Early diagnosis and treatment programs',
    'Student rehabilitation programs',
    'Community integration activities',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-6">Services & Activities</h1>
          <p className="text-xl max-w-3xl">
            Comprehensive programs and services designed to empower our students
          </p>
        </div>
      </section>

      {/* Services Section - Updated to 2 columns on mobile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white p-4 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                  <Icon className="text-blue-600 mb-4 w-8 h-8 md:w-12 md:h-12" />
                  <h3 className="text-lg md:text-2xl mb-2 md:mb-4 font-bold">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-700">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Activities & Programs</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow flex items-start gap-3"
                >
                  <span className="text-blue-600 mt-1">✓</span>
                  <p className="text-gray-700">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Activities in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={p19}
                alt="Classroom Activity"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl">Classroom Learning</h3>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={p37}
                alt="Group Study"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl">Collaborative Learning</h3>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg">
              <ImageWithFallback
                src={p18}
                alt="Playground Activities"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-xl">Sports & Recreation</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Facilities - Updated to 2 columns on mobile */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Key Facilities</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Speech Therapy Room', desc: 'Dedicated space with modern equipment for speech therapy sessions' },
              { title: 'Hearing Aids', desc: 'Free provision of hearing aids to students who need them' },
              { title: 'Educational Materials', desc: 'Free educational materials and learning aids for all students' },
              { title: 'Nutritious Meals', desc: 'Hygienic and nutritious meal facilities for all students' },
              { title: 'Medical Unit', desc: 'Institutional medical unit for health monitoring and care' },
              { title: 'Safety & Security', desc: 'CCTV cameras throughout campus for student safety' },
            ].map((facility, index) => (
              <div key={index} className="bg-white p-4 md:p-6 rounded-lg shadow">
                <h3 className="text-sm md:text-xl mb-2 md:mb-3 font-bold">{facility.title}</h3>
                <p className="text-xs md:text-base text-gray-600">{facility.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}