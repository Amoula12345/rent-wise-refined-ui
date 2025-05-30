
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Users, 
  Target, 
  Award,
  ArrowLeft,
  Sparkles,
  Shield,
  Zap
} from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Marie Dubois",
      role: "CEO & Co-fondatrice",
      description: "Expert en immobilier avec 15 ans d'expérience",
      avatar: "M",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      name: "Thomas Martin", 
      role: "CTO & Co-fondateur",
      description: "Ingénieur IA spécialisé en NLP et machine learning",
      avatar: "T",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      name: "Sophie Laurent",
      role: "Head of Product",
      description: "Designer UX avec expertise en produits IA",
      avatar: "S", 
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const values = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Innovation IA",
      description: "Nous repoussons les limites de l'intelligence artificielle pour simplifier l'immobilier.",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Transparence",
      description: "Nous croyons en la transparence totale pour protéger nos utilisateurs.",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Simplicité",
      description: "Rendre l'immobilier accessible à tous grâce à une technologie simple.",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-emerald-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="bg-white/70 backdrop-blur-xl border-b border-violet-100/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Brain className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                RentWise AI
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
            <Sparkles className="w-4 h-4 mr-2" />
            Notre mission
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Révolutionner l'immobilier
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              avec l'intelligence artificielle
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Chez RentWise AI, nous combinons expertise immobilière et technologies de pointe 
            pour créer une expérience de location révolutionnaire et accessible à tous.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Notre mission</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    Nous croyons que trouver le logement parfait et comprendre son contrat de bail 
                    ne devrait pas être compliqué. C'est pourquoi nous avons créé RentWise AI.
                  </p>
                  <p className="text-lg text-slate-600">
                    Notre plateforme utilise l'intelligence artificielle pour analyser, conseiller 
                    et simplifier chaque étape de votre parcours immobilier.
                  </p>
                </div>
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-br from-violet-400/20 to-fuchsia-400/20 rounded-3xl mx-auto flex items-center justify-center">
                    <Target className="h-24 w-24 text-violet-600" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Nos valeurs</h2>
            <p className="text-xl text-slate-600">Les principes qui guident notre innovation</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Notre équipe</h2>
            <p className="text-xl text-slate-600">Les experts qui rendent tout cela possible</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6 shadow-lg`}>
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                  <p className="text-violet-600 font-medium mb-4">{member.role}</p>
                  <p className="text-slate-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
