
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import { 
  Brain, 
  RefreshCw, 
  TrendingDown,
  TrendingUp,
  AlertTriangle,
  Calendar
} from "lucide-react";

const PredictionIA = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Données vides - à connecter avec le backend
  const predictionData: any[] = [];
  const periodesCalmes: any[] = [];
  const periodesFortes: any[] = [];

  const handleRegenerateIA = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setLastUpdate(new Date());
    }, 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header avec bouton de régénération */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-l-purple-500">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Brain className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Intelligence Artificielle</h3>
                <p className="text-sm text-slate-600">
                  Analyse prédictive basée sur l'historique de vos réservations
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Dernière mise à jour: {lastUpdate.toLocaleDateString('fr-FR')} à {lastUpdate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            
            <Button
              onClick={handleRegenerateIA}
              disabled={isGenerating}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
              {isGenerating ? 'Analyse en cours...' : 'Relancer la prédiction'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Graphique principal de prédiction */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="h-5 w-5 mr-2" />
            Prédiction du Taux d'Occupation (10 prochaines semaines)
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isGenerating ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                <p className="text-slate-600">L'IA analyse vos données...</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64">
              <p className="text-slate-500">
                Aucune donnée disponible pour la prédiction. Importez des réservations pour commencer l'analyse IA.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Alertes et recommandations */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Périodes calmes prédites */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-orange-700">
              <TrendingDown className="h-5 w-5 mr-2" />
              Périodes Calmes Prédites
            </CardTitle>
          </CardHeader>
          <CardContent>
            {periodesCalmes.length === 0 ? (
              <div className="text-center py-8">
                <AlertTriangle className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Aucune prédiction disponible</p>
              </div>
            ) : (
              <div className="space-y-3">
                {periodesCalmes.map((periode, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-slate-900">{periode.semaine}</p>
                        <p className="text-sm text-slate-600">Occupation prédite: {periode.prediction}%</p>
                      </div>
                    </div>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                      Période calme
                    </Badge>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">💡 Recommandations</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Ajustez vos tarifs pour attirer plus de réservations</li>
                <li>• Planifiez des travaux de maintenance</li>
                <li>• Lancez des promotions spéciales</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Périodes fortes prédites */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center text-emerald-700">
              <TrendingUp className="h-5 w-5 mr-2" />
              Périodes Fortes Prédites
            </CardTitle>
          </CardHeader>
          <CardContent>
            {periodesFortes.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">Aucune prédiction disponible</p>
              </div>
            ) : (
              <div className="space-y-3">
                {periodesFortes.map((periode, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                      <div>
                        <p className="font-medium text-slate-900">{periode.semaine}</p>
                        <p className="text-sm text-slate-600">Occupation prédite: {periode.prediction}%</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                      Forte demande
                    </Badge>
                  </div>
                ))}
              </div>
            )}
            <div className="mt-4 p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">📈 Optimisations</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Augmentez vos tarifs</li>
                <li>• Préparez vos logements à l'avance</li>
                <li>• Surveillez la concurrence</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Métriques de l'IA */}
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Précision de l'IA</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-400 mb-2">0%</div>
              <p className="text-sm text-slate-600">Précision des prédictions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-400 mb-2">0</div>
              <p className="text-sm text-slate-600">Réservations analysées</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-400 mb-2">0</div>
              <p className="text-sm text-slate-600">Mois d'historique</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionIA;
