
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield, 
  Settings,
  UserPlus,
  Download,
  FileText,
  Database
} from "lucide-react";

const AdminInterface = () => {
  return (
    <div className="space-y-6">
      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-blue-700 mb-1">Utilisateurs totaux</p>
                <p className="text-2xl font-bold text-blue-900">0</p>
                <p className="text-sm text-blue-600 font-medium">Aucun utilisateur</p>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-700 mb-1">Comptes vérifiés</p>
                <p className="text-2xl font-bold text-emerald-900">0</p>
                <p className="text-sm text-emerald-600 font-medium">En attente</p>
              </div>
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-purple-700 mb-1">Fichiers importés</p>
                <p className="text-2xl font-bold text-purple-900">0</p>
                <p className="text-sm text-purple-600 font-medium">Aucun import</p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-orange-700 mb-1">Base de données</p>
                <p className="text-2xl font-bold text-orange-900">0 Go</p>
                <p className="text-sm text-orange-600 font-medium">Utilisation</p>
              </div>
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Database className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Admin Actions */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="h-5 w-5 mr-2" />
            Actions Administrateur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button className="h-auto p-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex flex-col items-center space-y-2">
              <UserPlus className="h-6 w-6" />
              <span>Ajouter un utilisateur</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              <Shield className="h-6 w-6" />
              <span>Gérer les permissions</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-purple-200 text-purple-700 hover:bg-purple-50">
              <Download className="h-6 w-6" />
              <span>Export système</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Users Management */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Gestion des Utilisateurs
            </span>
            <Badge variant="outline">0 utilisateurs</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-2">Aucun utilisateur enregistré</h3>
            <p className="text-slate-500 mb-6">Les nouveaux utilisateurs apparaîtront ici après inscription</p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <UserPlus className="mr-2 h-4 w-4" />
              Inviter des utilisateurs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminInterface;
