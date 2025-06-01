
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Home, MapPin, Plus, Search } from "lucide-react";

interface LogementsTableProps {
  userRole: 'admin' | 'user';
}

const LogementsTable = ({ userRole }: LogementsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Données vides - à connecter avec le backend
  const logements: any[] = [];

  const getPlatformeColor = (plateforme: string) => {
    return plateforme === 'Airbnb' 
      ? 'bg-pink-100 text-pink-700 border-pink-200'
      : 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const getTauxColor = (taux: number) => {
    if (taux >= 85) return 'text-emerald-600';
    if (taux >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const filteredLogements = logements.filter(logement =>
    logement.nomLogement?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    logement.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <CardTitle className="text-xl font-bold text-slate-900 flex items-center">
            <Home className="h-5 w-5 mr-2" />
            Mes Logements ({filteredLogements.length})
          </CardTitle>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Rechercher un logement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            
            {userRole === 'admin' && (
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter un logement
              </Button>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Logement</TableHead>
                <TableHead>Localisation</TableHead>
                <TableHead>Plateforme</TableHead>
                <TableHead>Réservations</TableHead>
                <TableHead>Revenus Total</TableHead>
                <TableHead>Taux d'Occupation</TableHead>
                <TableHead>Dernière Réservation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogements.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-slate-500">
                    Aucun logement trouvé. Les logements apparaîtront automatiquement lors de l'import des réservations.
                  </TableCell>
                </TableRow>
              ) : (
                filteredLogements.map((logement) => (
                  <TableRow key={logement.id} className="hover:bg-slate-50">
                    <TableCell className="font-medium">{logement.nomLogement}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-slate-400" />
                        {logement.location}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getPlatformeColor(logement.plateforme)}>
                        {logement.plateforme}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-semibold">{logement.nbReservations}</TableCell>
                    <TableCell className="font-semibold">€{logement.revenuTotal?.toLocaleString()}</TableCell>
                    <TableCell>
                      <span className={`font-semibold ${getTauxColor(logement.tauxOccupation)}`}>
                        {logement.tauxOccupation}%
                      </span>
                    </TableCell>
                    <TableCell>{logement.dernierereservation ? new Date(logement.dernierereservation).toLocaleDateString('fr-FR') : '-'}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default LogementsTable;
