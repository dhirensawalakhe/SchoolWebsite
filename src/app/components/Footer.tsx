import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './logo';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <Logo variant="white" size="md" />
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering hearing-impaired children with quality education and life skills for over 54 years.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-sm text-gray-400">Since 1970</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/school-info', label: 'School Information' },
                { to: '/admission', label: 'Admission' },
                { to: '/gallery', label: 'Gallery' },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-gray-400 hover:text-cyan-400 transition flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl mb-6 bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-cyan-500/20 transition">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Wardhmaneri, Tal. Arvi,<br />
                  Dist. Wardha, Maharashtra
                </p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-cyan-500/20 transition">
                  <Phone size={18} className="text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">+91 8806165151</p>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-cyan-500/20 transition">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <p className="text-gray-400 text-sm">deafndumbwardhmneri@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Connect With Us</h3>
            <p className="text-gray-400 mb-6 text-sm">
              Follow us on social media to stay updated with our latest news and events.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, color: 'from-blue-500 to-blue-600' },
                { icon: Twitter, color: 'from-cyan-500 to-blue-500' },
                { icon: Instagram, color: 'from-pink-500 to-purple-500' },
              ].map((social, index) => (
                <button
                  key={index}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} rounded-xl blur-md opacity-0 group-hover:opacity-70 transition-opacity`}></div>
                  <div className={`relative bg-gradient-to-br ${social.color} p-3 rounded-xl hover:scale-110 transition-transform`}>
                    <social.icon size={20} className="text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {new Date().getFullYear()} Mukbadhir Vidyamandir. All rights reserved.
              </p>
              {/* Added Credit Line */}
              <p className="flex items-center gap-1.5 text-lg text-gray-400 fontsize-sm">
                Designed by 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
                  Dhiren Sawalakhe
                </span>
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-xs text-gray-500">
              <span className="bg-white/5 px-3 py-1 rounded-full">License: 0316</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">UDISE: 27080110404</span>
              <span className="bg-white/5 px-3 py-1 rounded-full">Est. 10 Jan 1982</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}