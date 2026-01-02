import { MapPin, Users, BookOpen, User } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import anantaImg from '../../assets/ananta.jpeg';
import babanImg from '../../assets/baban.jpeg';
import hadakeImg from '../../assets/hadake.jpeg';
import hemantImg from '../../assets/hemant.jpeg';
import patekarImg from '../../assets/patekar.jpeg';
import shamImg from '../../assets/sham.jpeg';
import vaibhavImg from '../../assets/vaibhav.jpeg';
import vigneImg from '../../assets/vigne.jpeg';

export default function SchoolInfoPage() {
  const staff = [
    { name: 'Mr. Anil Krushnaji Vighne', position: 'Headmaster', image: vigneImg },
    { name: 'Mr. Baban Dattarav Raut', position: 'Special Educator', image: babanImg },
    { name: 'Mr. Hemant Babanrao Giradkar', position: 'Special Educator', image: hemantImg },
    { name: 'Mr. Vaibhav Vitthalrao Bodakhe', position: 'Special Educator', image: vaibhavImg },
    { name: 'Mr. Vidyanand Vishweshwar Hadke', position: 'Craft Teacher', image: hadakeImg },
    { name: 'Mr. Shamkishor D. Rahangdale', position: 'Hostel Superintendent', image: shamImg },
    { name: 'Mr. Ananta B. Itkikar', position: 'Care taker', image: anantaImg },
    { name: 'Mr. Dnyaneshwar Namdev Patekar', position: 'Support Staff', image: patekarImg },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-6">School Information</h1>
          <p className="text-xl max-w-3xl">
            Learn more about our facilities, curriculum, and dedicated team
          </p>
        </div>
      </section>

      {/* Basic Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl mb-2">Student Capacity</h3>
              <p className="text-3xl text-blue-700">50 Students</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl mb-2">Classes Offered</h3>
              <p className="text-xl text-gray-700">Pre-Primary to 4th Standard</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MapPin className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl mb-2">Location</h3>
              <p className="text-gray-700">Wardhmaneri, Tal. Arvi, Dist. Wardha</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl mb-8">Curriculum & Teaching Methodology</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                Our curriculum is specifically designed to cater to the unique needs of hearing-impaired students, incorporating:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Special education methods tailored for hearing-impaired children</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Activity-based learning to enhance comprehension and retention</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Individualized attention to address each student's specific needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Integration of sign language and visual learning tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Focus on life skills and practical education</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Our Dedicated Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {staff.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 p-1 bg-black">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <ImageWithFallback src={member.image as string} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="text-lg mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Location</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-xl mb-4 text-center">
                <MapPin className="inline mr-2" size={24} />
                Mukbadhir Vidyamandir, Wardhmaneri, Tal. Arvi, Dist. Wardha
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.123456789!2d78.123456!3d20.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="School Location"
                ></iframe>
              </div>
              <div className="mt-4 text-center">
                <a
                  href="https://maps.app.goo.gl/GoS99Sf3SKU8gvaV6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
