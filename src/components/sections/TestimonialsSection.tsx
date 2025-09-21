import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      role: "Pemilik UMKM",
      location: "Jakarta",
      rating: 5,
      comment: "Melalui Gotong Royong Investasi, usaha warung makan saya berkembang pesat. ROI yang didapat juga sesuai dengan yang dijanjikan. Sangat recommended!",
      avatar: "BS"
    },
    {
      name: "Siti Nurhaliza",
      role: "Guru",
      location: "Bandung",
      rating: 5,
      comment: "Sebagai anggota koperasi, saya merasa aman berinvestasi di sini. Transparansi yang tinggi dan komunitas yang solid membuat saya nyaman.",
      avatar: "SN"
    },
    {
      name: "Ahmad Wijaya",
      role: "Pengusaha Muda",
      location: "Surabaya",
      rating: 5,
      comment: "Platform yang sangat membantu untuk mendiversifikasi investasi. Projek-projek yang ada sangat berkualitas dan menguntungkan.",
      avatar: "AW"
    },
    {
      name: "Maria Indah",
      role: "Karyawan Swasta",
      location: "Yogyakarta",
      rating: 5,
      comment: "Investasi pertama saya di bidang agribisnis memberikan hasil yang memuaskan. Prosesnya mudah dan customer service sangat responsif.",
      avatar: "MI"
    },
    {
      name: "Dedi Kurniawan",
      role: "Freelancer",
      location: "Medan",
      rating: 5,
      comment: "Gotong royong digital yang sesungguhnya! Saling membantu dan sama-sama untung. Fitur dashboard juga sangat informatif.",
      avatar: "DK"
    },
    {
      name: "Rina Sari",
      role: "Ibu Rumah Tangga",
      location: "Semarang",
      rating: 5,
      comment: "Mulai dengan investasi kecil-kecilan, sekarang sudah berani ambil projek yang lebih besar. Terima kasih atas edukasi finansialnya!",
      avatar: "RS"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-warning fill-warning" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Kata Mereka Tentang Kami
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kepercayaan dan kepuasan anggota adalah prioritas utama kami
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="card-elevated">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                {/* Comment */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.comment}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 lg:p-12 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Siap Bergabung dengan Komunitas Kami?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Mulai perjalanan investasi Anda bersama ribuan anggota lainnya dan 
              rasakan pengalaman gotong royong di era digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Daftar Gratis Sekarang
              </button>
              <button className="btn-outline text-lg px-8 py-4">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;