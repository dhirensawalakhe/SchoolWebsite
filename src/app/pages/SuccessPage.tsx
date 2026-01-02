import { Award, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

export default function SuccessPage() {
  const successStories = [
    {
      name: 'Ramesh Kumar',
      year: '2018',
      achievement: 'Successfully employed as a skilled craftsman in a manufacturing unit',
      description: 'After completing his education at Mukbadhir Vidyamandir, Ramesh developed exceptional skills in handicraft. Today, he is self-employed and runs his own small business.',
    },
    {
      name: 'Priya Sharma',
      year: '2019',
      achievement: 'Working as an assistant in a local NGO',
      description: 'Priya has become an inspiration for other students. She now works with an NGO that supports persons with disabilities and helps in community awareness programs.',
    },
    {
      name: 'Anil Patil',
      year: '2020',
      achievement: 'Secured employment in a government program',
      description: 'Through vocational training received at the school, Anil secured a position in a government-sponsored program and is living independently with dignity.',
    },
  ];

  const achievements = [
    { icon: GraduationCap, number: '500+', label: 'Students Educated' },
    { icon: Briefcase, number: '200+', label: 'Successfully Employed' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-6">Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Our alumni are living proof that determination and proper education can overcome any challenge
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <Icon className="mx-auto mb-4 text-blue-600" size={48} />
                  <p className="text-4xl mb-2 text-blue-700">{achievement.number}</p>
                  <p className="text-gray-700">{achievement.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Alumni Success Stories</h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-6">
                  <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="text-blue-600" size={40} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl">{story.name}</h3>
                      <span className="text-gray-500 text-sm">Batch of {story.year}</span>
                    </div>
                    <p className="text-blue-600 mb-4">{story.achievement}</p>
                    <p className="text-gray-700">{story.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition and Awards */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Recognition & Awards</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="text-yellow-600 mb-4" size={40} />
                <h3 className="text-xl mb-2">State Level Recognition</h3>
                <p className="text-gray-700">
                  Our students have won multiple awards at state-level competitions in art and handicraft.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="text-yellow-600 mb-4" size={40} />
                <h3 className="text-xl mb-2">Excellence in Special Education</h3>
                <p className="text-gray-700">
                  Recognized for our innovative teaching methods and dedication to special education.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="text-yellow-600 mb-4" size={40} />
                <h3 className="text-xl mb-2">Community Service Award</h3>
                <p className="text-gray-700">
                  Honored for our contribution to the welfare of persons with disabilities in the region.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Award className="text-yellow-600 mb-4" size={40} />
                <h3 className="text-xl mb-2">Student Achievements</h3>
                <p className="text-gray-700">
                  Our students consistently excel in various competitions and exhibitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">What Parents Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "The dedication and care shown by the teachers at Mukbadhir Vidyamandir has transformed my child's life. We are forever grateful for the education and opportunities provided here."
              </p>
              <p className="text-gray-900">- Parent of former student</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 italic mb-4">
                "This institution gave my child not just education, but confidence and independence. Today, my child is self-reliant and leading a dignified life."
              </p>
              <p className="text-gray-900">- Parent of current student</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Be Part of Our Success Story</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in empowering more children to achieve their dreams and live with dignity
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/admission"
              className="bg-white text-blue-700 px-8 py-3 rounded-lg hover:bg-gray-100 transition"
            >
              Admission Enquiry
            </a>
            <a
              href="/donate"
              className="bg-yellow-500 text-white px-8 py-3 rounded-lg hover:bg-yellow-600 transition"
            >
              Support Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
