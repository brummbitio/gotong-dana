import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-cooperative.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container-custom py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Investasi Bersama,
              <br />
              <span className="text-secondary">Berkembang Bersama</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Bergabunglah dengan koperasi digital yang menggabungkan nilai-nilai gotong royong 
              tradisional dengan teknologi modern untuk investasi yang menguntungkan.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-blue-200">Anggota Aktif</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">50+</div>
                <div className="text-sm text-blue-200">Projek Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary">15%</div>
                <div className="text-sm text-blue-200">ROI Rata-rata</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-secondary text-lg px-8 py-4">
                Gabung Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Lihat Projek
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Gotong Royong Investasi Community"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-surface rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-success">+12.5%</div>
                  <div className="text-sm text-muted-foreground">ROI Bulan Ini</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-surface rounded-xl p-4 shadow-xl">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary">Aman</div>
                  <div className="text-sm text-muted-foreground">Terdaftar OJK</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;