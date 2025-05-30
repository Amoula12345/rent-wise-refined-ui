import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  FileText, 
  Search, 
  Shield, 
  Star, 
  CheckCircle,
  ArrowRight,
  Brain,
  Users,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  Upload
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
      icon: <FileText className="h-8 w-8" />,
      title: "Analyse de Bail IA",
      description: "Notre IA analyse votre contrat de bail en quelques secondes et identifie les clauses importantes.",
      features: ["Détection automatique des clauses", "Analyse des risques", "Recommandations personnalisées"],
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Recherche Intelligente",
      description: "Trouvez le logement parfait grâce à notre moteur de recherche alimenté par l'IA.",
      features: ["Filtres intelligents", "Suggestions personnalisées", "Alertes en temps réel"],
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Import de Documents",
      description: "Importez facilement vos documents PDF, images et fichiers pour une analyse instantanée.",
      features: ["Support PDF, JPG, PNG", "Analyse OCR avancée", "Extraction de données"],
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Locataire",
      content: "PropAnalyzer Pro m'a aidée à éviter un piège dans mon contrat de bail. L'analyse IA est impressionnante !",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Thomas Martin",
      role: "Propriétaire",
      content: "La plateforme me fait gagner un temps précieux dans la gestion de mes biens immobiliers.",
      rating: 5,
      avatar: "T"
    },
    {
      name: "Sophie Laurent",
      role: "Étudiante",
      content: "Interface intuitive et conseils très pertinents. Parfait pour les premiers appartements !",
      rating: 5,
      avatar: "S"
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "50,000+", label: "Utilisateurs actifs", color: "text-violet-600" },
    { icon: <FileText className="h-6 w-6" />, value: "200,000+", label: "Baux analysés", color: "text-fuchsia-600" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "98%", label: "Satisfaction client", color: "text-cyan-600" },
    { icon: <Brain className="h-6 w-6" />, value: "24/7", label: "Support IA", color: "text-emerald-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-violet-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                PropAnalyzer Pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">À propos</Link>
              <Link to="/guide" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">Guide</Link>
              <Link to="/contact" className="text-slate-600 hover:text-violet-600 transition-colors font-medium">Contact</Link>
              <Link to="/auth">
                <Button variant="outline" className="border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 transition-all duration-300">
                  Connexion
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
            <Badge className="mb-6 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200 hover:from-violet-200 hover:to-fuchsia-200 transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 mr-2" />
              Nouvelle fonctionnalité : Import de documents en un clic
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              L'IA professionnelle pour
              <span className="block bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                l'analyse immobilière
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Analysez vos contrats, importez vos documents et obtenez des insights professionnels 
              grâce à notre plateforme d'intelligence artificielle de pointe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <Upload className="mr-2 h-5 w-5" />
                Importer un document
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-slate-300 hover:bg-slate-50 transition-all duration-300 hover:scale-105">
                <Globe className="mr-2 h-5 w-5" />
                Voir la démo
              </Button>
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
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color === 'text-violet-600' ? 'from-violet-100 to-violet-200' : stat.color === 'text-fuchsia-600' ? 'from-fuchsia-100 to-fuchsia-200' : stat.color === 'text-cyan-600' ? 'from-cyan-100 to-cyan-200' : 'from-emerald-100 to-emerald-200'} rounded-2xl flex items-center justify-center ${stat.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
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
              Nos services alimentés par l'IA
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Découvrez comment notre intelligence artificielle peut vous aider dans tous vos projets immobiliers
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

      {/* AI Chat Interface */}
      <section className="py-20 bg-white/60 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Testez notre assistant IA
            </h2>
            <p className="text-xl text-slate-600">
              Posez vos questions sur la location immobilière ou importez vos documents
            </p>
          </div>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-violet-50/80 to-fuchsia-50/80 backdrop-blur-xl hover:shadow-3xl transition-shadow duration-500">
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg max-w-md">
                    <p className="text-slate-700">
                      Bonjour ! Je suis votre assistant IA spécialisé en immobilier. 
                      Vous pouvez me poser des questions ou importer directement vos documents pour analyse.
                    </p>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Textarea
                    placeholder="Tapez votre question ici ou glissez-déposez vos fichiers PDF, JPG, PNG..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1 border-violet-200 focus:border-violet-400 focus:ring-violet-400 bg-white/80 backdrop-blur-sm"
                    rows={3}
                  />
                  <div className="flex flex-col space-y-2">
                    <Button
                      onClick={handleAnalyze}
                      disabled={isAnalyzing || !chatMessage.trim()}
                      className="bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {isAnalyzing ? "Analyse..." : "Envoyer"}
                    </Button>
                    <Button
                      variant="outline"
                      className="border-violet-200 text-violet-600 hover:bg-violet-50 px-6 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Importer
                    </Button>
                  </div>
                </div>
                
                {isAnalyzing && (
                  <div className="flex items-center space-x-2 text-violet-600 animate-pulse">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-violet-600"></div>
                    <span className="text-sm">L'IA analyse votre question...</span>
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
              Rejoignez des milliers d'utilisateurs satisfaits
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
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
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
      <section className="py-20 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à révolutionner votre analyse immobilière ?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Rejoignez des milliers de professionnels qui font confiance à PropAnalyzer Pro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-violet-600 hover:bg-slate-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Planifier une démo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">PropAnalyzer Pro</span>
              </div>
              <p className="text-slate-400 mb-4">
                L'intelligence artificielle professionnelle au service de l'immobilier.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Analyse de bail</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Import de documents</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Assistant IA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Conseils juridiques</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Équipe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presse</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/guide" className="hover:text-white transition-colors">Guide d'utilisation</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CGU</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 PropAnalyzer Pro. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
