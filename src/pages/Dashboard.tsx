
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Home, 
  FileText, 
  Upload, 
  Brain,
  Settings,
  LogOut,
  User,
  Shield
} from "lucide-react";

import ReservationsTable from "@/components/dashboard/ReservationsTable";
import LogementsTable from "@/components/dashboard/LogementsTable";
import StatistiquesView from "@/components/dashboard/StatistiquesView";
import ImportFiles from "@/components/dashboard/ImportFiles";
import PredictionIA from "@/components/dashboard/PredictionIA";
import AdminInterface from "@/components/dashboard/AdminInterface";
import UserInterface from "@/components/dashboard/UserInterface";

const Dashboard = () => {
  // Simulation du rôle utilisateur - à remplacer par votre système d'auth
  const [userRole, setUserRole] = useState<'admin' | 'user'>('admin');
  const [userName] = useState("Utilisateur Test");
  const [isVerified] = useState(true);

  const handleRoleSwitch = () => {
    setUserRole(userRole === 'admin' ? 'user' : 'admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-blue-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  ReservaAnalytics
                </span>
              </Link>
              <Badge className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700 border-emerald-200">
                Tableau de bord
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {userName.charAt(0)}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-slate-900">{userName}</p>
                  <div className="flex items-center space-x-2">
                    <Badge className={`text-xs ${userRole === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                      {userRole === 'admin' ? (
                        <>
                          <Shield className="w-3 h-3 mr-1" />
                          Admin
                        </>
                      ) : (
                        <>
                          <User className="w-3 h-3 mr-1" />
                          User
                        </>
                      )}
                    </Badge>
                    {isVerified && (
                      <Badge className="text-xs bg-emerald-100 text-emerald-700">
                        ✅ Vérifié
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
              
              <Button
                variant="outline" 
                size="sm"
                onClick={handleRoleSwitch}
                className="border-slate-200 text-slate-600 hover:bg-slate-50"
              >
                Changer rôle
              </Button>
              
              <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:bg-slate-50">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
              
              <Link to="/auth">
                <Button variant="outline" size="sm" className="border-red-200 text-red-600 hover:bg-red-50">
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Tableau de bord {userRole === 'admin' ? 'Administrateur' : 'Utilisateur'}
          </h1>
          <p className="text-slate-600">
            {userRole === 'admin' 
              ? 'Gérez vos données, utilisateurs et analyses complètes' 
              : 'Consultez les données et statistiques en lecture seule'
            }
          </p>
        </div>

        <Tabs defaultValue={userRole === 'admin' ? 'admin' : 'statistiques'} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 bg-white/80 backdrop-blur-sm">
            {userRole === 'admin' && (
              <TabsTrigger value="admin" className="data-[state=active]:bg-purple-100 data-[state=active]:text-purple-700">
                <Shield className="h-4 w-4 mr-2" />
                Admin
              </TabsTrigger>
            )}
            
            <TabsTrigger value="statistiques" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700">
              <BarChart3 className="h-4 w-4 mr-2" />
              Statistiques
            </TabsTrigger>
            
            <TabsTrigger value="reservations" className="data-[state=active]:bg-emerald-100 data-[state=active]:text-emerald-700">
              <FileText className="h-4 w-4 mr-2" />
              Réservations
            </TabsTrigger>
            
            <TabsTrigger value="logements" className="data-[state=active]:bg-orange-100 data-[state=active]:text-orange-700">
              <Home className="h-4 w-4 mr-2" />
              Logements
            </TabsTrigger>
            
            {userRole === 'admin' && (
              <TabsTrigger value="import" className="data-[state=active]:bg-pink-100 data-[state=active]:text-pink-700">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </TabsTrigger>
            )}
            
            <TabsTrigger value="prediction" className="data-[state=active]:bg-violet-100 data-[state=active]:text-violet-700">
              <Brain className="h-4 w-4 mr-2" />
              IA
            </TabsTrigger>
          </TabsList>

          {userRole === 'admin' && (
            <TabsContent value="admin">
              <AdminInterface />
            </TabsContent>
          )}

          <TabsContent value="statistiques">
            {userRole === 'user' && <UserInterface />}
            <StatistiquesView />
          </TabsContent>

          <TabsContent value="reservations">
            <ReservationsTable userRole={userRole} />
          </TabsContent>

          <TabsContent value="logements">
            <LogementsTable userRole={userRole} />
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
      </main>
    </div>
  );
};

export default Dashboard;
