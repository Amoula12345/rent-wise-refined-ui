
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Eye, 
  FileText, 
  BarChart3,
  Download,
  AlertCircle,
  CheckCircle
} from "lucide-react";

const UserInterface = () => {
  return (
    <div className="space-y-6">
      {/* User Access Notice */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Eye className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Accès Utilisateur</h3>
              <p className="text-slate-600 mb-4">
                Vous avez accès en consultation aux données importées par les administrateurs. 
                Vous pouvez visualiser les statistiques et exporter les rapports.
              </p>
              <div className="flex items-center space-x-4">
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Consultation autorisée
                </Badge>
                <Badge variant="outline" className="border-orange-200 text-orange-700">
                  <AlertCircle className="w-3 h-3 mr-1" />
                  Import restreint
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Actions for Users */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="h-5 w-5 mr-2" />
            Actions Disponibles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-blue-200 text-blue-700 hover:bg-blue-50">
              <BarChart3 className="h-6 w-6" />
              <span>Voir statistiques</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50">
              <FileText className="h-6 w-6" />
              <span>Consulter données</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-purple-200 text-purple-700 hover:bg-purple-50">
              <Download className="h-6 w-6" />
              <span>Export CSV</span>
            </Button>
            
            <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 border-orange-200 text-orange-700 hover:bg-orange-50">
              <Download className="h-6 w-6" />
              <span>Export PDF</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* User Limitations */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-orange-600" />
            Limitations du Compte Utilisateur
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-slate-700">Import de fichiers</span>
              </div>
              <Badge variant="outline" className="border-red-200 text-red-700">
                Non autorisé
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-slate-700">Gestion des utilisateurs</span>
              </div>
              <Badge variant="outline" className="border-red-200 text-red-700">
                Non autorisé
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="text-slate-700">Consultation des données</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                Autorisé
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                </div>
                <span className="text-slate-700">Export des rapports</span>
              </div>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                Autorisé
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserInterface;
