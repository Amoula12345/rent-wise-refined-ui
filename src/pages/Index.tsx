
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Upload, 
  Star, 
  CheckCircle,
  ArrowRight,
  Brain,
  Users,
  TrendingUp,
  Sparkles,
  BarChart3,
  Home,
  FileSpreadsheet,
  Send,
  Bot,
  X,
  Zap,
  Target,
  Calendar,
  Euro,
  Activity
} from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [animatedRevenue, setAnimatedRevenue] = useState(0);
  const [animatedBookings, setAnimatedBookings] = useState(0);
  const [liveAnalysis, setLiveAnalysis] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message: "Bonjour ! Je suis votre assistant ReservaAnalytics. Comment puis-je vous aider avec l'analyse de vos réservations Airbnb et Booking ?"
    }
  ]);

  // Animation des revenus en temps réel
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedRevenue(prev => prev + Math.floor(Math.random() * 50) + 20);
      setAnimatedBookings(prev => prev + Math.floor(Math.random() * 3) + 1);
      setLiveAnalysis(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    const newHistory = [...chatHistory, { type: "user", message: chatMessage }];
    
    let botResponse = "";
    const msg = chatMessage.toLowerCase();
    
    if (msg.includes("import") || msg.includes("csv") || msg.includes("xls")) {
      botResponse = "Pour importer vos données : 1) Exportez vos réservations depuis Airbnb (format CSV) et Booking.com (format XLS). 2) Cliquez sur 'Importer vos données' dans le tableau de bord. 3) Sélectionnez vos fichiers et laissez notre IA faire l'analyse !";
    } else if (msg.includes("prix") || msg.includes("tarif") || msg.includes("coût")) {
      botResponse = "ReservaAnalytics est gratuit pour commencer ! Vous pouvez analyser jusqu'à 100 réservations par mois. Pour des volumes plus importants, nos forfaits payants démarrent à 29€/mois.";
    } else if (msg.includes("ia") || msg.includes("prédiction") || msg.includes("intelligence")) {
      botResponse = "Notre IA analyse vos données historiques pour : • Prédire les périodes creuses • Suggérer des ajustements de prix • Identifier les tendances saisonnières • Optimiser votre taux d'occupation";
    } else if (msg.includes("airbnb") || msg.includes("booking")) {
      botResponse = "Nous supportons l'import direct depuis : • Airbnb (fichiers CSV des réservations) • Booking.com (fichiers XLS des réservations) • Formats standardisés pour autres plateformes";
    } else if (msg.includes("aide") || msg.includes("help") || msg.includes("support")) {
      botResponse = "Je peux vous aider avec : • Import de données Airbnb/Booking • Utilisation des fonctionnalités • Interprétation des statistiques • Questions sur la plateforme. Que souhaitez-vous savoir ?";
    } else {
      botResponse = "Je comprends votre question. Pour une aide personnalisée, je vous recommande de : 1) Consulter notre guide détaillé 2) Regarder nos tutoriels vidéo 3) Contacter notre support si besoin. Que puis-je clarifier pour vous ?";
    }

    setChatHistory([...newHistory, { type: "bot", message: botResponse }]);
    setChatMessage("");
  };

  const services = [
    {
      icon: <Upload className="h-8 w-8" />,
      title: "Import Intelligent",
      description: "Connectez Airbnb et Booking.com en quelques clics pour une analyse automatique.",
      features: ["Import CSV/XLS", "Synchronisation auto", "Validation données"],
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Tableaux de Bord",
      description: "Visualisez vos performances en temps réel avec des graphiques intelligents.",
      features: ["Analytics visuels", "Rapports détaillés", "Export PDF/Excel"],
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "IA Prédictive",
      description: "Optimisez vos tarifs et anticipez les tendances avec notre IA avancée.",
      features: ["Prédictions revenus", "Optimisation prix", "Tendances marché"],
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire Airbnb Paris",
      content: "Mes revenus ont augmenté de 28% grâce aux recommandations IA. Interface parfaite !",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Thomas Martin",
      role: "Gestionnaire 15 logements",
      content: "Centralisation parfaite de mes données Airbnb et Booking. Gain de temps énorme !",
      rating: 5,
      avatar: "T"
    },
    {
      name: "Sophie Laurent",
      role: "Investisseur immobilier",
      content: "Les prédictions IA m'aident à prendre les bonnes décisions d'investissement.",
      rating: 5,
      avatar: "S"
    }
  ];

  const stats = [
    { icon: <FileSpreadsheet className="h-6 w-6" />, value: "15,800+", label: "Fichiers analysés", color: "text-blue-600" },
    { icon: <Home className="h-6 w-6" />, value: "4,200+", label: "Logements optimisés", color: "text-emerald-600" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "98%", label: "Précision IA", color: "text-purple-600" },
    { icon: <Users className="h-6 w-6" />, value: "2,800+", label: "Utilisateurs actifs", color: "text-orange-600" }
  ];

  const interactiveDemo = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Simulation Revenus",
      description: "Testez l'impact sur vos revenus",
      action: "Simuler",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Analyse Saisonnalité", 
      description: "Découvrez vos meilleures périodes",
      action: "Analyser",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Euro className="h-6 w-6" />,
      title: "Optimisation Tarifs",
      description: "Prix parfaits selon la demande", 
      action: "Optimiser",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">ReservaAnalytics</span>
              <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs animate-pulse">2025 ✨</Badge>
            </div>

            {/* Stats live dans la nav */}
            <div className="hidden lg:flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Activity className={`h-4 w-4 ${liveAnalysis ? 'text-green-500' : 'text-blue-500'} transition-colors`} />
                <span className="text-slate-600">Analyses: </span>
                <span className="font-bold text-blue-600">{animatedBookings}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Euro className="h-4 w-4 text-emerald-500" />
                <span className="text-slate-600">Revenus optimisés: </span>
                <span className="font-bold text-emerald-600">{animatedRevenue.toLocaleString()}€</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">À propos</Link>
              <Link to="/guide" className="text-slate-600 hover:text-blue-600 transition-colors">Guide</Link>
              <Link to="/auth">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Connexion
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Amélioré */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%236366f1" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 animate-pulse">
              <Sparkles className="w-4 h-4 mr-2" />
              Nouvelle IA 2025 • Précision 98% • Temps réel
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="inline-block animate-fade-in">Révolutionnez vos</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent animate-fade-in">
                revenus locatifs
              </span>
              <span className="block text-2xl md:text-3xl text-slate-600 mt-2 animate-fade-in">
                avec l'IA prédictive
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto animate-fade-in">
              Connectez Airbnb et Booking.com, analysez vos performances en temps réel 
              et optimisez automatiquement vos tarifs avec notre IA de dernière génération.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Analyser mes données
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg hover:bg-blue-50 border-2">
                  Essai interactif gratuit
                </Button>
              </Link>
            </div>

            {/* Demo Interactive Cards */}
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto animate-fade-in">
              {interactiveDemo.map((demo, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${demo.color} rounded-xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {demo.icon}
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{demo.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{demo.description}</p>
                    <Button size="sm" className={`bg-gradient-to-r ${demo.color} text-white group-hover:shadow-lg transition-all`}>
                      {demo.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Performance IA en temps réel</h2>
            <p className="text-xl text-slate-600">Des résultats qui transforment votre business</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform cursor-default">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${stat.color} bg-slate-50 group-hover:shadow-lg transition-shadow`}>
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
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Fonctionnalités IA avancées
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour optimiser vos réservations locatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:scale-105 cursor-pointer">
                <CardContent className="p-8">
                  <div className={`text-white mb-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
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

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nos clients témoignent
            </h2>
            <p className="text-xl text-slate-600">
              Découvrez comment ReservaAnalytics transforme leur activité
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="white" fill-opacity="0.1"%3E%3Cpath d="M20 20c0-11.046-8.954-20-20-20v20h20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à maximiser vos revenus ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez 2,800+ propriétaires qui optimisent leurs revenus avec l'IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                Commencer l'analyse gratuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/guide">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Découvrir les fonctionnalités
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-bold">ReservaAnalytics</span>
              </div>
              <p className="text-slate-400">
                L'IA révolutionnaire pour optimiser vos revenus locatifs.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Fonctionnalités IA</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Import Airbnb/Booking</li>
                <li>Analyse prédictive</li>
                <li>Optimisation tarifs</li>
                <li>Rapports temps réel</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li>Confidentialité</li>
                <li>CGU</li>
                <li>API</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/guide" className="hover:text-white transition-colors">Guide utilisateur</Link></li>
                <li>Documentation</li>
                <li>FAQ</li>
                <li>Support 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 ReservaAnalytics. Tous droits réservés. Propulsé par l'IA.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsChatOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all animate-pulse"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col border">
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant IA ReservaAnalytics</h3>
                  <p className="text-xs text-blue-100">En ligne • Temps réel</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsChatOpen(false)}
                className="text-white hover:bg-white/10 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatHistory.map((chat, index) => (
                <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl ${
                    chat.type === 'user' 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                      : 'bg-slate-100 text-slate-800'
                  }`}>
                    <p className="text-sm">{chat.message}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question sur l'IA..."
                  className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
