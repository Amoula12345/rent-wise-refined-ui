
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  BarChart3, 
  FileText, 
  Upload, 
  MessageSquare,
  ArrowLeft,
  CheckCircle,
  Play,
  BookOpen,
  Lightbulb,
  Download,
  FileSpreadsheet,
  Home,
  Brain
} from "lucide-react";

const Guide = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const steps = [
    {
      number: "01",
      title: "Créez votre compte",
      description: "Inscrivez-vous avec votre email et obtenez la vérification",
      icon: <MessageSquare className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "Téléchargez vos données",
      description: "Exportez vos fichiers CSV depuis Airbnb et XLS depuis Booking.com",
      icon: <Download className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      number: "03",
      title: "Importez dans la plateforme",
      description: "Uploadez vos fichiers pour analyse automatique",
      icon: <Upload className="h-6 w-6" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      number: "04",
      title: "Analysez avec l'IA",
      description: "Consultez statistiques, graphiques et prédictions intelligentes",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  const tutorials = [
    {
      title: "Comment exporter depuis Airbnb",
      description: "Guide détaillé pour télécharger votre fichier CSV des réservations",
      duration: "4 min",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=225&fit=crop",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      category: "Airbnb",
      videoUrl: "https://www.youtube.com/embed/7H5pWCqVtYI"
    },
    {
      title: "Export des données Booking.com",
      description: "Procédure pour récupérer vos réservations au format XLS",
      duration: "5 min", 
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      icon: <FileSpreadsheet className="h-5 w-5" />,
      category: "Booking",
      videoUrl: "https://www.youtube.com/embed/YQHsXMglC9A"
    },
    {
      title: "Import et analyse des fichiers",
      description: "Comment uploader et traiter vos données dans la plateforme",
      duration: "6 min",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
      icon: <Upload className="h-5 w-5" />,
      category: "Import",
      videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk"
    },
    {
      title: "Comprendre les statistiques",
      description: "Lecture des graphiques, revenus et taux d'occupation",
      duration: "7 min",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=225&fit=crop",
      icon: <BarChart3 className="h-5 w-5" />,
      category: "Analyse",
      videoUrl: "https://www.youtube.com/embed/3Li_95A7mL8"
    },
    {
      title: "Gestion des logements",
      description: "Organisation et suivi de vos propriétés multi-plateformes",
      duration: "5 min",
      thumbnail: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&h=225&fit=crop",
      icon: <Home className="h-5 w-5" />,
      category: "Gestion",
      videoUrl: "https://www.youtube.com/embed/TI0vasuR6XM"
    },
    {
      title: "Prédictions IA avancées",
      description: "Utiliser l'intelligence artificielle pour optimiser vos revenus",
      duration: "8 min",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
      icon: <Brain className="h-5 w-5" />,
      category: "IA",
      videoUrl: "https://www.youtube.com/embed/aircAruvnKk"
    }
  ];

  const tips = [
    "Exportez vos données mensuellement pour un suivi régulier",
    "Vérifiez la cohérence des données avant import (noms de logements)",
    "Utilisez les prédictions IA pour ajuster vos tarifs saisonniers", 
    "Surveillez votre taux d'occupation par plateforme",
    "Exportez vos rapports en PDF pour vos déclarations fiscales"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <nav className="bg-white/70 backdrop-blur-xl border-b border-blue-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                ReservaAnalytics
              </span>
            </Link>
            <Link to="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-gradient-to-r from-blue-100 to-pink-100 text-blue-700 border-blue-200">
            <BookOpen className="w-4 h-4 mr-2" />
            Guide d'utilisation
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Maîtrisez votre analyse
            <span className="block bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
              Airbnb & Booking
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Apprenez à importer, analyser et optimiser vos réservations 
            avec notre plateforme IA en quelques étapes simples.
          </p>
        </div>

        {/* Steps Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">4 étapes pour commencer</h2>
            <p className="text-xl text-slate-600">De l'inscription à l'analyse IA en moins de 10 minutes</p>
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

        {/* Video Tutorials avec Dialog */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Tutoriels vidéo détaillés</h2>
            <p className="text-xl text-slate-600">Guides pas-à-pas pour maîtriser chaque fonctionnalité</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-6">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-blue-600 ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                      {tutorial.duration}
                    </Badge>
                    <Badge className="absolute top-3 left-3 bg-blue-600 text-white">
                      {tutorial.category}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      {tutorial.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{tutorial.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-4">{tutorial.description}</p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700"
                        onClick={() => setSelectedVideo(tutorial.videoUrl)}
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Regarder le tutoriel
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl w-full">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-slate-900 flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                            {tutorial.icon}
                          </div>
                          <span>{tutorial.title}</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="aspect-video w-full">
                        <iframe
                          src={tutorial.videoUrl}
                          className="w-full h-full rounded-lg"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={tutorial.title}
                        />
                      </div>
                      <div className="bg-slate-50 rounded-lg p-4">
                        <p className="text-slate-600 mb-2"><strong>Description:</strong> {tutorial.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <span>Durée: {tutorial.duration}</span>
                          <span>Catégorie: {tutorial.category}</span>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Conseils d'experts</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Bonnes pratiques pour vos analyses</h3>
                  <ul className="space-y-3">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Besoin d'aide ?</h3>
                  <p className="text-slate-600 mb-6">
                    Notre équipe support est disponible pour vous accompagner dans l'utilisation de la plateforme.
                  </p>
                  <div className="space-y-3">
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-to-r from-pink-600 to-blue-600">
                        Contacter le support
                      </Button>
                    </Link>
                    <Link to="/dashboard">
                      <Button variant="outline" className="w-full border-blue-200 text-blue-600 hover:bg-blue-50">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Accéder au tableau de bord
                      </Button>
                    </Link>
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
