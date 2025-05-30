
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Mail, 
  Phone,
  MapPin,
  ArrowLeft,
  Send,
  MessageSquare,
  Clock,
  Users,
  Headphones
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simuler l'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Message envoyé:", formData);
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      content: "support@rentwise-ai.com",
      description: "Réponse sous 24h",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone", 
      content: "+33 1 23 45 67 89",
      description: "Lun-Ven 9h-18h",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      content: "123 Rue de la Tech, 75001 Paris",
      description: "Siège social",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const supportOptions = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Chat en direct",
      description: "Assistance immédiate avec notre équipe",
      available: "Disponible maintenant",
      action: "Démarrer le chat",
      gradient: "from-violet-500 to-fuchsia-500"
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Support téléphonique", 
      description: "Appelez-nous pour une aide personnalisée",
      available: "Lun-Ven 9h-18h",
      action: "Appeler maintenant",
      gradient: "from-cyan-500 to-emerald-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Communauté",
      description: "Rejoignez notre communauté Discord",
      available: "24/7",
      action: "Rejoindre Discord",
      gradient: "from-emerald-500 to-teal-500"
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
            <MessageSquare className="w-4 h-4 mr-2" />
            Nous contacter
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Une question ?
            <span className="block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Nous sommes là pour vous aider
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Notre équipe d'experts est disponible 24/7 pour répondre à toutes vos questions 
            et vous accompagner dans vos projets immobiliers.
          </p>
        </div>

        {/* Support Options */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choisissez votre mode de contact</h2>
            <p className="text-xl text-slate-600">Plusieurs options pour vous accompagner</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {supportOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{option.title}</h3>
                  <p className="text-slate-600 mb-4">{option.description}</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-emerald-600 mb-6">
                    <Clock className="h-4 w-4" />
                    <span>{option.available}</span>
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${option.gradient} hover:opacity-90 transition-opacity`}>
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Votre nom"
                      required
                      className="border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="votre@email.com"
                      required
                      className="border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Sujet</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    placeholder="De quoi souhaitez-vous parler ?"
                    required
                    className="border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Décrivez votre demande en détail..."
                    rows={6}
                    required
                    className="border-slate-200 focus:border-violet-400 focus:ring-violet-400"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-4 w-4" />
                      <span>Envoyer le message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Nos coordonnées</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">{info.title}</h3>
                        <p className="text-violet-600 font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-slate-600">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Quick Links */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-50/80 to-fuchsia-50/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Questions fréquentes</h3>
                <div className="space-y-3">
                  <a href="#" className="block text-violet-600 hover:text-fuchsia-600 transition-colors">
                    → Comment fonctionne l'analyse IA ?
                  </a>
                  <a href="#" className="block text-violet-600 hover:text-fuchsia-600 transition-colors">
                    → Mes données sont-elles sécurisées ?
                  </a>
                  <a href="#" className="block text-violet-600 hover:text-fuchsia-600 transition-colors">
                    → Quels formats de fichiers acceptez-vous ?
                  </a>
                  <a href="#" className="block text-violet-600 hover:text-fuchsia-600 transition-colors">
                    → Comment annuler mon abonnement ?
                  </a>
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Voir toutes les FAQ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
