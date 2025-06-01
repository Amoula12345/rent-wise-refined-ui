
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  Download,
  FileSpreadsheet
} from "lucide-react";

const ImportFiles = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    name: string;
    platform: string;
    status: 'success' | 'error';
    recordsCount: number;
    date: string;
  }>>([
    {
      name: "reservations_airbnb_janvier_2024.csv",
      platform: "Airbnb",
      status: "success",
      recordsCount: 45,
      date: "2024-01-15"
    },
    {
      name: "booking_export_decembre_2023.xls",
      platform: "Booking",
      status: "success",
      recordsCount: 32,
      date: "2024-01-10"
    }
  ]);

  const handleFileUpload = (platform: string) => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulation de l'upload
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          
          // Ajouter le fichier à la liste
          const newFile = {
            name: `${platform.toLowerCase()}_export_${new Date().toISOString().slice(0, 10)}.${platform === 'Airbnb' ? 'csv' : 'xls'}`,
            platform,
            status: 'success' as const,
            recordsCount: Math.floor(Math.random() * 50) + 10,
            date: new Date().toISOString().slice(0, 10)
          };
          
          setUploadedFiles(prev => [newFile, ...prev]);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <div className="space-y-6">
      {/* Instructions d'import */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-500">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instructions d'import</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Airbnb (.csv)</h4>
                  <p>Téléchargez vos données depuis votre tableau de bord Airbnb → Réservations → Exporter</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-900 mb-1">Booking.com (.xls)</h4>
                  <p>Accédez à votre extranet Booking → Réservations → Exporter les données</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Zones d'upload */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Airbnb Upload */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-pink-700">
              <FileSpreadsheet className="h-5 w-5 mr-2" />
              Import Airbnb (.csv)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-pink-200 rounded-lg p-8 text-center hover:border-pink-300 transition-colors">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-pink-600" />
              </div>
              <p className="text-slate-600 mb-4">Glissez-déposez votre fichier CSV Airbnb ici</p>
              <Button 
                onClick={() => handleFileUpload('Airbnb')}
                disabled={isUploading}
                className="bg-pink-600 hover:bg-pink-700"
              >
                <Upload className="h-4 w-4 mr-2" />
                Choisir un fichier
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Booking Upload */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <FileSpreadsheet className="h-5 w-5 mr-2" />
              Import Booking (.xls)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-blue-200 rounded-lg p-8 text-center hover:border-blue-300 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-blue-600" />
              </div>
              <p className="text-slate-600 mb-4">Glissez-déposez votre fichier XLS Booking ici</p>
              <Button 
                onClick={() => handleFileUpload('Booking')}
                disabled={isUploading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Upload className="h-4 w-4 mr-2" />
                Choisir un fichier
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Progress Bar */}
      {isUploading && (
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 mb-2">Import en cours...</p>
                <Progress value={uploadProgress} className="w-full" />
              </div>
              <span className="text-sm font-medium text-slate-600">{uploadProgress}%</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Historique des imports */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Historique des Imports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {uploadedFiles.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    file.status === 'success' ? 'bg-emerald-100' : 'bg-red-100'
                  }`}>
                    {file.status === 'success' ? (
                      <CheckCircle className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">{file.name}</p>
                    <div className="flex items-center space-x-2 text-sm text-slate-500">
                      <Badge className={file.platform === 'Airbnb' ? 'bg-pink-100 text-pink-700' : 'bg-blue-100 text-blue-700'}>
                        {file.platform}
                      </Badge>
                      <span>•</span>
                      <span>{file.recordsCount} réservations</span>
                      <span>•</span>
                      <span>{new Date(file.date).toLocaleDateString('fr-FR')}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Télécharger
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImportFiles;
