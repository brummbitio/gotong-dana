import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Calendar, Target, TrendingUp, MapPin } from "lucide-react";
import projectsImage from "@/assets/projects-illustration.jpg";

const ProjectHighlight = () => {
  // Mock project data
  const featuredProjects = [
    {
      id: 1,
      title: "Hidroponik Modern Bogor",
      category: "AGRIBISNIS",
      shortDescription: "Pengembangan sistem hidroponik skala komersial dengan teknologi IoT untuk meningkatkan produktivitas sayuran organik.",
      targetAmount: 250000000,
      currentAmount: 180000000,
      progress: 72,
      deadline: "2024-12-15",
      roi: "15-20%",
      period: "18 Bulan",
      riskLevel: "RENDAH",
      location: "Bogor, Jawa Barat",
      image: projectsImage
    },
    {
      id: 2,
      title: "Aplikasi Fintech Syariah",
      category: "TEKNOLOGI",
      shortDescription: "Platform digital untuk layanan keuangan syariah yang mudah diakses oleh UMKM di seluruh Indonesia.",
      targetAmount: 500000000,
      currentAmount: 320000000,
      progress: 64,
      deadline: "2024-11-30",
      roi: "20-25%",
      period: "24 Bulan",
      riskLevel: "MENENGAH",
      location: "Jakarta, DKI Jakarta",
      image: projectsImage
    },
    {
      id: 3,
      title: "Kedai Kopi Specialty Bandung",
      category: "FNB",
      shortDescription: "Pembukaan kedai kopi dengan konsep specialty coffee yang menggunakan biji kopi lokal berkualitas premium.",
      targetAmount: 150000000,
      currentAmount: 95000000,
      progress: 63,
      deadline: "2024-10-20",
      roi: "12-18%",
      period: "12 Bulan",
      riskLevel: "RENDAH",
      location: "Bandung, Jawa Barat",
      image: projectsImage
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'RENDAH': return 'text-success bg-success/10';
      case 'MENENGAH': return 'text-warning bg-warning/10';
      case 'TINGGI': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AGRIBISNIS': return 'text-secondary bg-secondary/10';
      case 'TEKNOLOGI': return 'text-primary bg-primary/10';
      case 'FNB': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Projek Pilihan
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Temukan peluang investasi terbaik yang telah diverifikasi dan siap untuk didanai bersama
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="card-project">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskColor(project.riskLevel)}`}>
                    {project.riskLevel}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {project.location}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.shortDescription}
                </p>
                
                {/* Funding Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Terkumpul</span>
                    <span className="font-semibold">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="font-semibold text-secondary">
                      {formatCurrency(project.currentAmount)}
                    </span>
                    <span className="text-muted-foreground">
                      dari {formatCurrency(project.targetAmount)}
                    </span>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-2 gap-4 py-3 border-t border-border">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 mr-2 text-success" />
                    <div>
                      <div className="text-muted-foreground">ROI</div>
                      <div className="font-semibold">{project.roi}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    <div>
                      <div className="text-muted-foreground">Periode</div>
                      <div className="font-semibold">{project.period}</div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full btn-primary">
                  Lihat Detail
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-outline">
            Lihat Semua Projek
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlight;