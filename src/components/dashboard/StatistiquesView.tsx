
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
  Cell,
  LineChart,
  Line
} from "recharts";
import { 
  TrendingUp, 
  Calendar, 
  Euro, 
  Percent,
  Home
} from "lucide-react";

const StatistiquesView = () => {
  // Données simulées pour les graphiques
  const monthlyData = [
    { mois: 'Jan', airbnb: 4500, booking: 3200, total: 7700 },
    { mois: 'Fév', airbnb: 5200, booking: 2800, total: 8000 },
    { mois: 'Mar', airbnb: 4800, booking: 3500, total: 8300 },
    { mois: 'Avr', airbnb: 5800, booking: 4200, total: 10000 },
    { mois: 'Mai', airbnb: 6200, booking: 3900, total: 10100 },
    { mois: 'Jun', airbnb: 7100, booking: 4500, total: 11600 }
  ];

  const platformData = [
    { name: 'Airbnb', value: 58, color: '#FF5A5F' },
    { name: 'Booking', value: 42, color: '#003580' }
  ];

  const occupancyData = [
    { logement: 'App. Centre', taux: 87 },
    { logement: 'Studio Moderne', taux: 72 },
    { logement: 'Maison Jardin', taux: 91 },
    { logement: 'Loft Industriel', taux: 68 },
    { logement: 'Villa Mer', taux: 94 }
  ];

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
                <p className="text-2xl font-bold text-emerald-900">€11,600</p>
                <p className="text-sm text-emerald-600 font-medium">+15% vs mois dernier</p>
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
                <p className="text-2xl font-bold text-blue-900">247</p>
                <p className="text-sm text-blue-600 font-medium">+8% ce mois</p>
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
                <p className="text-2xl font-bold text-purple-900">82%</p>
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
                <p className="text-2xl font-bold text-orange-900">23</p>
                <p className="text-sm text-orange-600 font-medium">+2 ce mois</p>
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
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mois" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [`€${value}`, name === 'airbnb' ? 'Airbnb' : name === 'booking' ? 'Booking' : 'Total']}
                />
                <Bar dataKey="airbnb" fill="#FF5A5F" name="airbnb" />
                <Bar dataKey="booking" fill="#003580" name="booking" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Répartition par plateforme */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Répartition par Plateforme</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Part']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center space-x-6 mt-4">
              {platformData.map((platform, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: platform.color }}
                  ></div>
                  <span className="text-sm font-medium">{platform.name}</span>
                  <Badge variant="outline">{platform.value}%</Badge>
                </div>
              ))}
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
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={occupancyData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis dataKey="logement" type="category" width={120} />
              <Tooltip formatter={(value) => [`${value}%`, 'Taux d\'occupation']} />
              <Bar 
                dataKey="taux" 
                fill="#8884d8"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default StatistiquesView;
