
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Upload, 
  FileText, 
  Home, 
  BarChart3, 
  Brain,
  Download,
  Users,
  TrendingUp,
  Calendar,
  Euro,
  RefreshCw,
  CheckCircle
} from "lucide-react";
import ReservationsTable from "@/components/dashboard/ReservationsTable";
import LogementsTable from "@/components/dashboard/LogementsTable";
import StatistiquesView from "@/components/dashboard/StatistiquesView";
import ImportFiles from "@/components/dashboard/ImportFiles";
import PredictionIA from "@/components/dashboard/PredictionIA";

const Dashboard = () => {
  const [userRole] = useState<'admin' | 'user'>('admin'); // Simule le rôle utilisateur
  const [isVerified] = useState(true);
  
  const stats = [
    {
      title: "Total Réservations",
      value: "1,247",
      icon: <Calendar className="h-4 w-4" />,
      change: "+12% ce mois",
      color: "text-emerald-600"
    },
    {
      title: "Revenus Totaux",
      value: "€45,678",
      icon: <Euro className="h-4 w-4" />,
      change: "+8% ce mois",
      color: "text-blue-600"
    },
    {
      title: "Logements Actifs",
      value: "23",
      icon: <Home className="h-4 w-4" />,
      change: "+2 nouveaux",
      color: "text-purple-600"
    },
    {
      title: "Taux d'Occupation",
      value: "87%",
      icon: <TrendingUp className="h-4 w-4" />,
      change: "+5% vs mois dernier",
      color: "text-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PropAnalyzer Pro
                </h1>
                <p className="text-xs text-slate-500">Analyse intelligente des réservations</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {isVerified && (
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Compte vérifié
                </Badge>
              )}
              <Badge variant={userRole === 'admin' ? 'default' : 'secondary'}>
                <Users className="w-3 h-3 mr-1" />
                {userRole === 'admin' ? 'Administrateur' : 'Utilisateur'}
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 ${stat.color} bg-gradient-to-br from-current/10 to-current/20 rounded-xl flex items-center justify-center`}>
                    {stat.icon}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="reservations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit lg:grid-cols-5">
            <TabsTrigger value="reservations" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Réservations</span>
            </TabsTrigger>
            <TabsTrigger value="logements" className="flex items-center space-x-2">
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">Logements</span>
            </TabsTrigger>
            <TabsTrigger value="statistiques" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Statistiques</span>
            </TabsTrigger>
            {userRole === 'admin' && (
              <TabsTrigger value="import" className="flex items-center space-x-2">
                <Upload className="h-4 w-4" />
                <span className="hidden sm:inline">Import</span>
              </TabsTrigger>
            )}
            <TabsTrigger value="prediction" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span className="hidden sm:inline">IA</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reservations">
            <ReservationsTable userRole={userRole} />
          </TabsContent>

          <TabsContent value="logements">
            <LogementsTable userRole={userRole} />
          </TabsContent>

          <TabsContent value="statistiques">
            <StatistiquesView />
          </TabsContent>

          {userRole === 'admin' && (
            <TabsContent value="import">
              <ImportFiles />
            </TabsContent>
          )}

          <TabsContent value="prediction">
            <PredictionIA />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
