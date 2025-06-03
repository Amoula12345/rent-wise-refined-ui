
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  MessageSquare, 
  Upload, 
  Shield, 
  Star, 
  CheckCircle,
  ArrowRight,
  Brain,
  Users,
  TrendingUp,
  Sparkles,
  BarChart3,
  Home,
  Play,
  FileSpreadsheet,
  Send,
  Bot,
  X
} from "lucide-react";

const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      type: "bot",
      message: "Bonjour ! Je suis votre assistant ReservaAnalytics. Comment puis-je vous aider avec l'analyse de vos réservations Airbnb et Booking ?"
    }
  ]);

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;

    // Add user message
    const newHistory = [...chatHistory, { type: "user", message: chatMessage }];
    
    // Simple bot responses based on keywords
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
      title: "Import Airbnb & Booking",
      description: "Importez directement vos fichiers CSV Airbnb et XLS Booking.com pour une analyse automatique.",
      features: ["Import CSV/XLS", "Traitement automatique", "Validation des données"],
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Analyse Intelligente",
      description: "Visualisez vos performances avec des graphiques et statistiques détaillées.",
      features: ["Tableaux de bord", "Graphiques interactifs", "Export PDF/CSV"],
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Prédiction IA",
      description: "Anticipez vos revenus et optimisez vos tarifs grâce à l'intelligence artificielle.",
      features: ["Prédictions revenus", "Optimisation tarifs", "Analyse tendances"],
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Propriétaire Airbnb",
      content: "L'analyse IA m'a permis d'augmenter mes revenus de 25% en optimisant mes tarifs.",
      rating: 5,
      avatar: "M"
    },
    {
      name: "Thomas Martin",
      role: "Gestionnaire Booking",
      content: "Interface claire et import rapide. Parfait pour gérer mes 12 logements.",
      rating: 5,
      avatar: "T"
    },
    {
      name: "Sophie Laurent",
      role: "Hôte Multi-plateformes",
      content: "Enfin une solution qui centralise mes données avec de vraies prédictions !",
      rating: 5,
      avatar: "S"
    }
  ];

  const stats = [
    { icon: <FileSpreadsheet className="h-6 w-6" />, value: "10,000+", label: "Fichiers analysés", color: "text-blue-600" },
    { icon: <Home className="h-6 w-6" />, value: "2,500+", label: "Logements gérés", color: "text-emerald-600" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "95%", label: "Précision IA", color: "text-purple-600" },
    { icon: <Users className="h-6 w-6" />, value: "24/7", label: "Support", color: "text-orange-600" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">
                ReservaAnalytics
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-slate-600 hover:text-blue-600 transition-colors">À propos</Link>
              <Link to="/guide" className="text-slate-600 hover:text-blue-600 transition-colors">Guide</Link>
              <Link to="/contact" className="text-slate-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Link to="/auth">
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  Connexion
                </Button>
              </Link>
              <Link to="/auth">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Commencer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-blue-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Analyse IA pour Airbnb & Booking
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Optimisez vos revenus
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                locatifs avec l'IA
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Importez vos données Airbnb et Booking.com, analysez vos performances 
              et obtenez des prédictions intelligentes pour maximiser vos revenus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg"
                >
                  <Upload className="mr-2 h-5 w-5" />
                  Commencer gratuitement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/guide">
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  Voir la démo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.color} bg-slate-50`}>
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
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour analyser et optimiser vos réservations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className={`text-white mb-6 w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
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
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-shadow duration-300">
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à optimiser vos revenus ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers de propriétaires qui utilisent ReservaAnalytics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg"
              >
                Commencer gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/guide">
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg"
              >
                Voir les tutoriels
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
                L'analyse intelligente pour vos réservations locatives.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Fonctionnalités</h3>
              <ul className="space-y-2 text-slate-400">
                <li>Import Airbnb/Booking</li>
                <li>Analyse des données</li>
                <li>Prédiction IA</li>
                <li>Export rapports</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li>Confidentialité</li>
                <li>CGU</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/guide" className="hover:text-white transition-colors">Guide</Link></li>
                <li>Documentation</li>
                <li>FAQ</li>
                <li>Support 24/7</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 ReservaAnalytics. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsChatOpen(true)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      </div>

      {/* Chatbot Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
          <div className="bg-white rounded-2xl shadow-2xl w-96 h-[500px] flex flex-col border">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-2xl">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant ReservaAnalytics</h3>
                  <p className="text-xs text-blue-100">En ligne</p>
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

            {/* Chat Messages */}
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

            {/* Input */}
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Posez votre question..."
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
