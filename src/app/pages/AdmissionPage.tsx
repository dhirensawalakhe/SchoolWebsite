import { FileText, CheckCircle, Home, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import girls_hostel from '../../assets/girls_hostel.jpeg';
import boys_hostel from '../../assets/boys_hostel.jpeg';

export default function AdmissionPage() {
  const documents = [
    'Aadhaar Card',
    'Birth Certificate',
    'Medical Certificate',
    'Recent Photographs',
    'Previous School Records (if applicable)',
  ];

  const facilities = [
    'Education for hearing-impaired students',
    'Boarding and lodging',
    'Nutritious and hygienic meals',
    'Educational materials',
    'Hearing aids',
    'Medical care and support',
  ];

  return (
    <div>
      {/* Hero Section - Centered on Mobile, Right-Aligned on Laptop */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center text-center lg:items-end lg:text-right">
          <h1 className="text-5xl mb-6">Admission Information</h1>
          <p className="text-xl max-w-3xl">
            Join us in providing quality education to hearing-impaired children
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Admission Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-700 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Eligibility Assessment</h3>
                    <p className="text-gray-700">
                      Initial assessment to determine if the student meets our eligibility criteria for hearing-impaired education.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-700 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Document Submission</h3>
                    <p className="text-gray-700">
                      Submit all required documents along with the completed application form.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-700 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Interview & Assessment</h3>
                    <p className="text-gray-700">
                      Personal interview with parents/guardians and assessment of the student's current abilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <span className="text-blue-700 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">Admission Confirmation</h3>
                    <p className="text-gray-700">
                      Upon approval, complete the admission formalities and join the school.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Note:</strong> Admission is subject to availability and eligibility criteria. We prioritize students who can benefit most from our specialized education programs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Required Documents</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow flex items-start gap-3">
                  <FileText className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">{doc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                All documents should be original or attested copies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Provided */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12"> Free Facilities Provided</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-start gap-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-700">{facility}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Facilities - Set to 2 Columns on Mobile */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Free Hostel Facilities</h2>
          <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto">
            {/* Boys Hostel Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
              <div className="flex justify-center pt-8 px-4">
                <img
                  src={boys_hostel}
                  alt="Boys Hostel"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover border-2 md:border-4 border-black"
                />
              </div>
              <div className="p-4 md:p-8 text-center md:text-left w-full">
                <div className="bg-blue-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Home className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg md:text-2xl mb-4 font-bold">Boys Hostel</h3>
                <ul className="space-y-2 text-xs md:text-base text-gray-700">
                  <li>• Safe accommodation</li>
                  <li>• Superintendent</li>
                  <li>• Nutritious meals</li>
                  <li>• Study facilities</li>
                  <li>• 24/7 supervision</li>
                </ul>
              </div>
            </div>

            {/* Girls Hostel Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
              <div className="flex justify-center pt-8 px-4">
                <img
                  src={girls_hostel}
                  alt="Girls Hostel"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover border-2 md:border-4 border-black"
                />
              </div>
              <div className="p-4 md:p-8 text-center md:text-left w-full">
                <div className="bg-pink-100 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <Home className="text-pink-600" size={24} />
                </div>
                <h3 className="text-lg md:text-2xl mb-4 font-bold">Girls Hostel</h3>
                <ul className="space-y-2 text-xs md:text-base text-gray-700">
                  <li>• Safe accommodation</li>
                  <li>• Dedicated staff</li>
                  <li>• Nutritious meals</li>
                  <li>• Study facilities</li>
                  <li>• 24/7 supervision</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admission */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="mx-auto mb-6" size={64} />
          <h2 className="text-4xl mb-6 font-bold">Ready to Enroll?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for more information about the admission process and to schedule a visit
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+918806165151"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto"
            >
              Call: +91 8806165151
            </a>
            <a
              href="/contact"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition w-full sm:w-auto"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}