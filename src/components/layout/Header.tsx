import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Users } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Gotong Royong</h1>
              <p className="text-xs text-muted-foreground">Investasi</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Beranda
            </a>
            <a href="/projek" className="text-foreground hover:text-primary transition-colors">
              Projek
            </a>
            <a href="/tentang" className="text-foreground hover:text-primary transition-colors">
              Tentang Kami
            </a>
            <a href="/kontak" className="text-foreground hover:text-primary transition-colors">
              Kontak
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Masuk
            </Button>
            <Button className="btn-primary">
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              <a href="/" className="block py-2 text-foreground hover:text-primary transition-colors">
                Beranda
              </a>
              <a href="/projek" className="block py-2 text-foreground hover:text-primary transition-colors">
                Projek
              </a>
              <a href="/tentang" className="block py-2 text-foreground hover:text-primary transition-colors">
                Tentang Kami
              </a>
              <a href="/kontak" className="block py-2 text-foreground hover:text-primary transition-colors">
                Kontak
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="justify-start">
                  Masuk
                </Button>
                <Button className="btn-primary justify-start">
                  Daftar Sekarang
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;