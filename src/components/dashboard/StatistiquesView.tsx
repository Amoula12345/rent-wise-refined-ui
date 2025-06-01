
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { 
  TrendingUp, 
  Calendar, 
  Euro, 
  Percent,
  Home
} from "lucide-react";

const StatistiquesView = () => {
  // Données vides - à connecter avec le backend
  const monthlyData: any[] = [];
  const platformData: any[] = [];
  const occupancyData: any[] = [];

  const COLORS = ['#FF5A5F', '#003580'];

  return (
    <div className="space-y-6">
      {/* KPIs principaux */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-700 mb-1">Revenus ce mois</p>
                <p className="text-2xl font-bold text-emerald-900">€0</p>
                <p className="text-sm text-emerald-600 font-medium">Aucune donnée</p>
              </div>
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Euro className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700 mb-1">Réservations</p>
                <p className="text-2xl font-bold text-blue-900">0</p>
                <p className="text-sm text-blue-600 font-medium">Aucune donnée</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700 mb-1">Taux moyen</p>
                <p className="text-2xl font-bold text-purple-900">0%</p>
                <p className="text-sm text-purple-600 font-medium">Occupation</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Percent className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700 mb-1">Logements actifs</p>
                <p className="text-2xl font-bold text-orange-900">0</p>
                <p className="text-sm text-orange-600 font-medium">Aucune donnée</p>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Graphiques */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Revenus par mois */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <TrendingUp className="h-5 w-5 mr-2" />
              Évolution des Revenus (6 derniers mois)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64">
              <p className="text-slate-500">Aucune donnée disponible. Importez des réservations pour voir les graphiques.</p>
            </div>
          </CardContent>
        </Card>

        {/* Répartition par plateforme */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Répartition par Plateforme</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-64">
              <p className="text-slate-500">Aucune donnée disponible. Importez des réservations pour voir les graphiques.</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Taux d'occupation par logement */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Taux d'Occupation par Logement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64">
            <p className="text-slate-500">Aucune donnée disponible. Importez des réservations pour voir les graphiques.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatistiquesView;
