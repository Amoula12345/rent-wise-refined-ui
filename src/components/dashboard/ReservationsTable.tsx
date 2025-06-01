
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
import { Download, Search, Filter } from "lucide-react";

interface ReservationsTableProps {
  userRole: 'admin' | 'user';
}

const ReservationsTable = ({ userRole }: ReservationsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Données simulées des réservations
  const reservations = [
    {
      id: 1,
      codeConfirmation: "HM4AR2U9C7",
      nomClient: "Marie Dubois",
      logement: "Appartement Centre Ville",
      plateforme: "Airbnb",
      dateArrivee: "2024-01-15",
      dateDepart: "2024-01-18",
      nbNuits: 3,
      montantTotal: 450.00,
      devise: "EUR",
      statut: "Confirmée"
    },
    {
      id: 2,
      codeConfirmation: "BKG789654",
      nomClient: "Thomas Martin",
      logement: "Studio Moderne",
      plateforme: "Booking",
      dateArrivee: "2024-01-20",
      dateDepart: "2024-01-25",
      nbNuits: 5,
      montantTotal: 625.00,
      devise: "EUR",
      statut: "En cours"
    },
    {
      id: 3,
      codeConfirmation: "AIR456123",
      nomClient: "Sophie Laurent",
      logement: "Maison avec Jardin",
      plateforme: "Airbnb",
      dateArrivee: "2024-02-01",
      dateDepart: "2024-02-07",
      nbNuits: 6,
      montantTotal: 780.00,
      devise: "EUR",
      statut: "Confirmée"
    }
  ];

  const getStatutColor = (statut: string) => {
    switch (statut.toLowerCase()) {
      case 'confirmée':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'en cours':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'annulée':
        return 'bg-red-100 text-red-700 border-red-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  const getPlatformeColor = (plateforme: string) => {
    return plateforme === 'Airbnb' 
      ? 'bg-pink-100 text-pink-700 border-pink-200'
      : 'bg-blue-100 text-blue-700 border-blue-200';
  };

  const filteredReservations = reservations.filter(reservation =>
    reservation.nomClient.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.codeConfirmation.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reservation.logement.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <CardTitle className="text-xl font-bold text-slate-900">
            Toutes les Réservations ({filteredReservations.length})
          </CardTitle>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full sm:w-64"
              />
            </div>
            
            {userRole === 'admin' && (
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filtrer
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export CSV
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export PDF
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Code</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Logement</TableHead>
                <TableHead>Plateforme</TableHead>
                <TableHead>Arrivée</TableHead>
                <TableHead>Départ</TableHead>
                <TableHead>Nuits</TableHead>
                <TableHead>Montant</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredReservations.map((reservation) => (
                <TableRow key={reservation.id} className="hover:bg-slate-50">
                  <TableCell className="font-mono text-sm">{reservation.codeConfirmation}</TableCell>
                  <TableCell className="font-medium">{reservation.nomClient}</TableCell>
                  <TableCell>{reservation.logement}</TableCell>
                  <TableCell>
                    <Badge className={getPlatformeColor(reservation.plateforme)}>
                      {reservation.plateforme}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(reservation.dateArrivee).toLocaleDateString('fr-FR')}</TableCell>
                  <TableCell>{new Date(reservation.dateDepart).toLocaleDateString('fr-FR')}</TableCell>
                  <TableCell className="text-center">{reservation.nbNuits}</TableCell>
                  <TableCell className="font-semibold">
                    {reservation.montantTotal.toFixed(2)} {reservation.devise}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatutColor(reservation.statut)}>
                      {reservation.statut}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReservationsTable;
