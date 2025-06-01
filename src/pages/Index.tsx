
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  FileText, 
  Upload, 
  Shield, 
  Star, 
  CheckCircle,
  ArrowRight,
  Brain,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  BarChart3,
  Home,
  Play,
  Download,
  FileSpreadsheet
} from "lucide-react";

const Index = () => {
  const [chatMessage, setChatMessage] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  const services = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Import Airbnb & Booking",
      description: "Importez directement vos fichiers CSV Airbnb et XLS Booking.com pour une analyse automatique complète.",
      features: ["Format CSV Airbnb", "Format XLS Booking", "Import automatique"],
      gradient: "from-pink-500 to-blue-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analyse des Données",
      description: "Visualisez vos réservations, revenus, taux d'occupation avec des graphiques interactifs.",
      features: ["Tableaux dynamiques", "Statistiques détaillées", "Graphiques Recharts"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Prédiction IA",
      description: "Notre IA analyse vos historiques pour prédire les périodes creuses et optimiser vos revenus.",
      features: ["Prédiction périodes calmes", "Analyse historique", "Recommandations"],
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire Airbnb",
      content: "L'import automatique et l'analyse IA m'ont permis d'optimiser mes revenus de 30% !",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Thomas Martin",
      role: "Gestionnaire Booking",
      content: "Interface simple, import rapide des données. Parfait pour gérer mes 15 logements.",
      rating: 5,
      avatar: "T"
    },
    {
      name: "Sophie Laurent",
      role: "Hôte Multi-plateformes",
      content: "Enfin une solution qui centralise Airbnb et Booking avec de vraies prédictions !",
      rating: 5,
      avatar: "S"
    }
  ];

  const stats = [
    { icon: <FileSpreadsheet className="h-6 w-6" />, value: "50,000+", label: "Fichiers analysés", color: "text-pink-600" },
    { icon: <Home className="h-6 w-6" />, value: "10,000+", label: "Logements gérés", color: "text-blue-600" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Précision IA", color: "text-emerald-600" },
    { icon: <Users className="h-6 w-6" />, value: "24/7", label: "Support technique", color: "text-violet-600" }
  ];

  const tutorialVideos = [
    {
      title: "Import de fichiers Airbnb",
      description: "Apprenez à télécharger et importer vos données CSV depuis Airbnb",
      duration: "3:45",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
      category: "Import"
    },
    {
      title: "Import de fichiers Booking.com",
      description: "Guide complet pour importer vos réservations XLS Booking",
      duration: "4:20",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      category: "Import"
    },
    {
      title: "Comprendre les statistiques",
      description: "Analysez vos revenus, taux d'occupation et performances",
      duration: "5:15",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      category: "Analyse"
    },
    {
      title: "Utiliser la prédiction IA",
      description: "Maximisez vos revenus avec les prédictions intelligentes",
      duration: "6:30",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
      category: "IA"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-blue-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                ReservaAnalytics
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">À propos</Link>
              <Link to="/guide" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Guide</Link>
              <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">Contact</Link>
              <Link to="/auth">
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                  Connexion
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-pink-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-pink-200 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Import direct Airbnb & Booking avec IA
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Analysez vos réservations
              <span className="block bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Airbnb & Booking
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Importez facilement vos fichiers CSV Airbnb et XLS Booking.com, visualisez vos données
              et obtenez des prédictions IA pour optimiser vos revenus locatifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Upload className="mr-2 h-5 w-5" />
                Importer vos données
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/dashboard">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:scale-105">
                  <BarChart3 className="mr-2 h-5 w-5" />
                  Voir le tableau de bord
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color === 'text-pink-600' ? 'from-pink-100 to-pink-200' : stat.color === 'text-blue-600' ? 'from-blue-100 to-blue-200' : stat.color === 'text-emerald-600' ? 'from-emerald-100 to-emerald-200' : 'from-violet-100 to-violet-200'} rounded-2xl flex items-center justify-center ${stat.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-50/50 to-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour analyser et optimiser vos réservations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className={`text-white mb-6 group-hover:scale-110 transition-transform duration-300 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <CheckCircle className="h-4 w-4 text-emerald-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tutoriels vidéo */}
      <section className="py-20 bg-white/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Tutoriels vidéo
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Apprenez à utiliser la plateforme étape par étape
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tutorialVideos.map((video, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:scale-105">
                <CardContent className="p-4">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <Play className="h-5 w-5 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-2 right-2 bg-black/70 text-white text-xs">
                      {video.duration}
                    </Badge>
                    <Badge className="absolute top-2 left-2 bg-blue-600 text-white text-xs">
                      {video.category}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-sm text-slate-600 line-clamp-2">{video.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Assistant IA Demo */}
      <section className="py-20 bg-gradient-to-b from-slate-50/50 to-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Testez notre IA de prédiction
            </h2>
            <p className="text-xl text-slate-600">
              Découvrez comment notre intelligence artificielle analyse vos données
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50/80 to-pink-50/80 backdrop-blur-xl hover:shadow-3xl transition-shadow duration-500">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-md">
                    <p className="text-slate-700">
                      Bonjour ! Je suis votre assistant IA spécialisé dans l'analyse de réservations. 
                      Importez vos fichiers Airbnb/Booking pour obtenir des prédictions personnalisées.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Textarea
                    placeholder="Posez vos questions sur l'analyse de vos réservations..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1 border-blue-200 focus:border-blue-400 focus:ring-blue-400 bg-white/80 backdrop-blur-sm"
                    rows={3}
                  />
                  <div className="flex flex-col space-y-2">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || !chatMessage.trim()}
                      className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {isAnalyzing ? "Analyse..." : "Analyser"}
                    </Button>
                    <Link to="/dashboard">
                      <Button
                        variant="outline"
                        className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Import
                      </Button>
                    </Link>
                  </div>
                </div>
                
                {isAnalyzing && (
                  <div className="flex items-center space-x-2 text-blue-600 animate-pulse">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                    <span className="text-sm">L'IA analyse vos données...</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ce que disent nos utilisateurs
            </h2>
            <p className="text-xl text-slate-600">
              Des propriétaires satisfaits qui optimisent leurs revenus
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{testimonial.name}</div>
                      <div className="text-sm text-slate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 via-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à optimiser vos revenus locatifs ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de propriétaires qui analysent leurs réservations avec notre IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-slate-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/guide">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Voir les tutoriels
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">ReservaAnalytics</span>
              </div>
              <p className="text-slate-400 mb-4">
                L'analyse intelligente de vos réservations Airbnb et Booking.com.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Fonctionnalités</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Import Airbnb/Booking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Analyse des données</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prédiction IA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Export CSV/PDF</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/guide" className="hover:text-white transition-colors">Tutoriels</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support 24/7</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ReservaAnalytics. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
