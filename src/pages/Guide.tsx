
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  FileText, 
  Search, 
  MessageSquare,
  ArrowLeft,
  CheckCircle,
  Play,
  BookOpen,
  Lightbulb,
  Download
} from "lucide-react";

const Guide = () => {
  const steps = [
    {
      number: "01",
      title: "Créez votre compte",
      description: "Inscrivez-vous gratuitement avec votre email ou Google",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      number: "02", 
      title: "Ajoutez votre document",
      description: "Importez votre contrat de location ou vos réservations Booking/Airbnb",
      icon: <FileText className="h-6 w-6" />,
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      number: "03",
      title: "Laissez l'IA analyser",
      description: "Notre IA examine et trouve les points importants",
      icon: <Search className="h-6 w-6" />,
      gradient: "from-amber-500 to-orange-500"
    },
    {
      number: "04",
      title: "Recevez vos conseils",
      description: "Obtenez des recommandations claires et personnalisées",
      icon: <MessageSquare className="h-6 w-6" />,
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const features = [
    {
      title: "Analyse de contrats",
      description: "Comment notre IA examine votre contrat de location",
      duration: "3 min",
      icon: <FileText className="h-5 w-5" />
    },
    {
      title: "Import Booking/Airbnb",
      description: "Importez facilement vos réservations pour les analyser",
      duration: "5 min", 
      icon: <Download className="h-5 w-5" />
    },
    {
      title: "Assistant intelligent",
      description: "Posez vos questions à notre IA 24/7",
      duration: "2 min",
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  const tips = [
    "Lisez toujours les conditions d'annulation avant de réserver",
    "Vérifiez les frais supplémentaires (ménage, caution, etc.)", 
    "Assurez-vous que les équipements sont bien mentionnés",
    "Prenez des photos de l'état du logement à l'arrivée",
    "Gardez tous les échanges écrits avec le propriétaire"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <nav className="bg-white/70 backdrop-blur-xl border-b border-violet-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                PropAnalyzer Pro
              </span>
            </Link>
            <Link to="/" className="inline-flex items-center text-slate-600 hover:text-violet-600 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-violet-100 to-fuchsia-100 text-violet-700 border-violet-200">
            <BookOpen className="w-4 h-4 mr-2" />
            Guide d'utilisation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Comment utiliser
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              PropAnalyzer Pro
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez comment utiliser simplement notre plateforme IA 
            pour vos projets de location en quelques étapes faciles.
          </p>
        </div>

        {/* Steps Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">4 étapes simples</h2>
            <p className="text-xl text-slate-600">Commencez à utiliser PropAnalyzer Pro en moins de 5 minutes</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 relative">
                <CardContent className="p-8 text-center">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className={`w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {step.number}
                    </div>
                  </div>
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 mt-4 shadow-lg opacity-20`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Tutorials */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tutoriels vidéo</h2>
            <p className="text-xl text-slate-600">Apprenez à utiliser chaque fonctionnalité</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <div className="w-full h-48 bg-gradient-to-br from-violet-100 to-fuchsia-100 rounded-2xl flex items-center justify-center">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        <Play className="h-6 w-6 text-violet-600 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4 bg-black/70 text-white">
                      {feature.duration}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <Button variant="outline" className="w-full">
                    Regarder le tutoriel
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Conseils d'experts</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Points clés à vérifier dans une location</h3>
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-violet-50 to-fuchsia-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Besoin d'aide ?</h3>
                  <p className="text-slate-600 mb-6">
                    Notre équipe support est disponible 24/7 pour répondre à toutes vos questions.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600">
                      Contacter le support
                    </Button>
                    <Button variant="outline" className="w-full">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Chat en direct
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Guide;
