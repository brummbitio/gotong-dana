import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, TrendingUp, Award, Heart, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Aman & Terpercaya",
      description: "Platform kami terdaftar dan diawasi oleh otoritas keuangan dengan sistem keamanan berlapis."
    },
    {
      icon: Users,
      title: "Komunitas Solid",
      description: "Bergabung dengan ribuan anggota yang saling mendukung dalam mencapai tujuan finansial bersama."
    },
    {
      icon: TrendingUp,
      title: "Investasi Menguntungkan",
      description: "Dapatkan return investasi yang kompetitif melalui projek-projek yang telah diverifikasi dengan ketat."
    },
    {
      icon: Award,
      title: "Transparan",
      description: "Semua informasi keuangan dan progress projek dapat diakses secara real-time oleh seluruh anggota."
    },
    {
      icon: Heart,
      title: "Gotong Royong",
      description: "Mengusung nilai-nilai kekeluargaan dan saling membantu dalam setiap aktivitas koperasi."
    },
    {
      icon: Globe,
      title: "Teknologi Modern",
      description: "Platform digital yang mudah digunakan dengan fitur-fitur canggih untuk kemudahan bertransaksi."
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Mengapa Memilih Gotong Royong Investasi?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kami menggabungkan kearifan lokal gotong royong dengan teknologi finansial modern 
            untuk menciptakan ekosistem investasi yang menguntungkan dan berkelanjutan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-elevated group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 gradient-hero rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Pencapaian Kami
            </h3>
            <p className="text-blue-100 text-lg">
              Kepercayaan anggota adalah prestasi terbesar kami
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-blue-100">Anggota Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">Rp 2.5M</div>
              <div className="text-blue-100">Total Investasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-blue-100">Projek Sukses</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-secondary mb-2">98%</div>
              <div className="text-blue-100">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;