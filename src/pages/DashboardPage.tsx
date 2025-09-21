import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Wallet, 
  TrendingUp, 
  PlusCircle, 
  Eye, 
  Calendar,
  Target,
  CheckCircle,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import MemberHeader from '@/components/layout/MemberHeader';

const DashboardPage = () => {
  const { profile, wallet } = useAuth();

  // Mock data for demonstration
  const myContributions = [
    {
      id: '1',
      project: 'Hidroponik Modern Bogor',
      amount: 5000000,
      status: 'active',
      roi: '+12.5%',
      date: '2024-09-15'
    },
    {
      id: '2', 
      project: 'Kedai Kopi Specialty Bandung',
      amount: 2500000,
      status: 'completed',
      roi: '+15.2%',
      date: '2024-08-20'
    },
    {
      id: '3',
      project: 'Platform E-learning UMKM',
      amount: 3000000,
      status: 'active',
      roi: '+8.3%',
      date: '2024-09-10'
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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-success/10 text-success hover:bg-success/20">Aktif</Badge>;
      case 'completed':
        return <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Selesai</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const totalInvestment = myContributions.reduce((sum, contrib) => sum + contrib.amount, 0);
  const completedInvestments = myContributions.filter(c => c.status === 'completed').length;

  return (
    <div className="min-h-screen bg-background">
      <MemberHeader />
      
      <main className="container-custom py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Selamat datang, {profile?.full_name}!
          </h1>
          <p className="text-muted-foreground">
            Kelola investasi dan pantau perkembangan portofolio Anda
          </p>
        </div>

        {/* Wallet Summary */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Simpanan Sukarela</CardTitle>
              <Wallet className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-secondary">
                {formatCurrency(wallet?.balance_sukarela || 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Tersedia untuk investasi
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Simpanan Wajib</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">
                {formatCurrency(wallet?.balance_wajib || 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Kontribusi bulanan
              </p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Simpanan Pokok</CardTitle>
              <CheckCircle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">
                {formatCurrency(wallet?.balance_pokok || 0)}
              </div>
              <p className="text-xs text-muted-foreground">
                Modal awal keanggotaan
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Investment Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Total Investasi</p>
                      <p className="text-2xl font-bold">{formatCurrency(totalInvestment)}</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Projek Aktif</p>
                      <p className="text-2xl font-bold">{myContributions.filter(c => c.status === 'active').length}</p>
                    </div>
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">ROI Rata-rata</p>
                      <p className="text-2xl font-bold text-success">+11.3%</p>
                    </div>
                    <ArrowUpRight className="w-8 h-8 text-success" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* My Contributions */}
            <Card className="card-elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Portofolio Investasi</CardTitle>
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    Lihat Semua
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myContributions.map((contribution) => (
                    <div key={contribution.id} className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground mb-1">
                          {contribution.project}
                        </h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Investasi: {formatCurrency(contribution.amount)}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(contribution.date).toLocaleDateString('id-ID')}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-right">
                          <div className="text-sm font-medium text-success">
                            {contribution.roi}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Return
                          </div>
                        </div>
                        {getStatusBadge(contribution.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Aksi Cepat</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full btn-primary">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  Top Up Saldo
                </Button>
                <Button variant="outline" className="w-full">
                  <Eye className="w-4 h-4 mr-2" />
                  Lihat Projek Baru
                </Button>
                <Button variant="outline" className="w-full">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Analisis Portofolio
                </Button>
              </CardContent>
            </Card>

            {/* KYC Status */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Status Verifikasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email</span>
                    <CheckCircle className="w-5 h-5 text-success" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">KYC</span>
                    {profile?.kyc_status === 'VERIFIED' ? (
                      <CheckCircle className="w-5 h-5 text-success" />
                    ) : (
                      <Clock className="w-5 h-5 text-warning" />
                    )}
                  </div>
                  
                  {profile?.kyc_status !== 'VERIFIED' && (
                    <div className="pt-3">
                      <Button variant="outline" size="sm" className="w-full">
                        Lengkapi Verifikasi
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Progress */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Target Bulan Ini</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Investasi Target</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    7.5 juta dari target 10 juta
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;