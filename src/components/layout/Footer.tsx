import { Users, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Gotong Royong</h3>
                <p className="text-sm text-gray-300">Investasi</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Platform koperasi digital yang menggabungkan nilai-nilai gotong royong tradisional 
              dengan teknologi finansial modern untuk investasi yang menguntungkan dan berkelanjutan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Menu Utama</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-secondary transition-colors">Beranda</a></li>
              <li><a href="/projek" className="text-gray-300 hover:text-secondary transition-colors">Daftar Projek</a></li>
              <li><a href="/tentang" className="text-gray-300 hover:text-secondary transition-colors">Tentang Kami</a></li>
              <li><a href="/blog" className="text-gray-300 hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="/kontak" className="text-gray-300 hover:text-secondary transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Member Area */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Area Anggota</h4>
            <ul className="space-y-3">
              <li><a href="/login" className="text-gray-300 hover:text-secondary transition-colors">Masuk</a></li>
              <li><a href="/register" className="text-gray-300 hover:text-secondary transition-colors">Daftar</a></li>
              <li><a href="/dashboard" className="text-gray-300 hover:text-secondary transition-colors">Dashboard</a></li>
              <li><a href="/portofolio" className="text-gray-300 hover:text-secondary transition-colors">Portofolio</a></li>
              <li><a href="/transaksi" className="text-gray-300 hover:text-secondary transition-colors">Riwayat Transaksi</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  Jl. Sudirman No. 123<br />
                  Jakarta Pusat 10220
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <span className="text-gray-300">info@gotongroyonginvestasi.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Gotong Royong Investasi. Hak cipta dilindungi undang-undang.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-secondary transition-colors">
                Kebijakan Privasi
              </a>
              <a href="/terms" className="text-gray-400 hover:text-secondary transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="/legal" className="text-gray-400 hover:text-secondary transition-colors">
                Legalitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;