import { Heart, DollarSign, Users, Building } from 'lucide-react';

export default function DonatePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <Heart className="mx-auto mb-6" size={64} />
          <h1 className="text-5xl mb-6">Support Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Your support helps us empower hearing-impaired children to lead dignified and independent lives
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Why Your Support Matters</h2>
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg text-gray-700">
              <p className="mb-4">
                For over 54 years, Mukbadhir Vidyamandir has been dedicated to providing quality education and care to hearing-impaired children. We rely on the generosity of individuals and organizations to continue our mission.
              </p>
              <p className="mb-4">
                Your donation helps us provide free education, boarding, meals, hearing aids, educational materials, and specialized care to students who come from economically challenged backgrounds.
              </p>
              <p className="mb-4">
                Every contribution, no matter how small, makes a significant difference in a child's life and helps them build a better future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">How You Can Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mx-auto mb-4 text-blue-600 text-5xl">₹</div>
              <h3 className="text-xl mb-3">Monetary Donation</h3>
              <p className="text-gray-700">
                Direct financial support for education, meals, and facilities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Users className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl mb-3">Sponsor a Child</h3>
              <p className="text-gray-700">
                Full or partial sponsorship for a student's education and care
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Building className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl mb-3">Infrastructure</h3>
              <p className="text-gray-700">
                Contribute towards building improvements and equipment
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Heart className="mx-auto mb-4 text-blue-600" size={48} />
              <h3 className="text-xl mb-3">In-Kind Donation</h3>
              <p className="text-gray-700">
                Donate educational materials, equipment, or supplies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Form
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl mb-8 text-center">Make a Donation</h2>
            
            <div className="mb-8">
              <h3 className="text-xl mb-4">Select Donation Amount</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {[500, 1000, 2500, 5000].map((amount) => (
                  <button
                    key={amount}
                    className="p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Enter custom amount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">PAN Number (for 80G tax exemption)</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your PAN"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg"
              >
                Proceed to Payment
              </button>
            </div>

            <p className="text-center text-gray-600 text-sm mt-6">
              * All donations are tax-exempt under 80G of Income Tax Act
            </p>
          </div>
        </div>
      </section> */}

      {/* Bank Details */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl text-center mb-8">Bank Transfer Details</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-6 text-center">
                You can also make donations directly to our bank account:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="mb-2"><strong>Account Name:</strong></p>
                  <p>Shri Sant Bhanudas Maharaj Sanstha</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Bank Name:</strong></p>
                  <p>To be updated</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Account Number:</strong></p>
                  <p>To be updated</p>
                </div>
                <div>
                  <p className="mb-2"><strong>IFSC Code:</strong></p>
                  <p>To be updated</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> After making a donation, please send us the transaction details at our email address for a receipt and tax exemption certificate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-blue-600">₹500</span>
              </div>
              <h3 className="text-xl mb-2">Provides</h3>
              <p className="text-gray-700">Educational materials for one student for a month</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-blue-600">₹4000</span>
              </div>
              <h3 className="text-xl mb-2">Provides</h3>
              <p className="text-gray-700">Meals and boarding for one student for a month</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl text-blue-600">₹10000</span>
              </div>
              <h3 className="text-xl mb-2">Provides</h3>
              <p className="text-gray-700">Complete support for one student for a month</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6">Every Contribution Counts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us in our mission to provide quality education and care to hearing-impaired children
          </p>
          <p className="text-lg">
            For more information, contact us at: <a href="tel:+918806165151" className="underline">+91 8806165151</a>
          </p>
        </div>
      </section>
    </div>
  );
}
