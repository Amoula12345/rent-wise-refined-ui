
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Mail, 
  Lock, 
  User, 
  ArrowLeft,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  AlertCircle,
  KeyRound
} from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isResetPassword, setIsResetPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (isResetPassword) {
      // Simuler envoi email de reset
      setTimeout(() => {
        setResetEmailSent(true);
        setIsLoading(false);
      }, 2000);
    } else if (showVerification) {
      // Simuler vérification du code
      setTimeout(() => {
        setIsVerified(true);
        setShowVerification(false);
        setIsLoading(false);
      }, 2000);
    } else if (!isLogin) {
      // Simuler inscription - demander vérification
      setTimeout(() => {
        setShowVerification(true);
        setIsLoading(false);
      }, 2000);
    } else {
      // Simuler connexion
      setTimeout(() => {
        setIsLoading(false);
        console.log("Connexion réussie");
      }, 2000);
    }
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsVerified(true);
      setShowVerification(false);
      setIsLoading(false);
    }, 2000);
  };

  const getTitle = () => {
    if (isResetPassword) return "Réinitialiser le mot de passe";
    if (showVerification) return "Vérification email";
    return isLogin ? "Connexion" : "Inscription";
  };

  const getDescription = () => {
    if (isResetPassword) return "Entrez votre email pour recevoir un lien de réinitialisation";
    if (showVerification) return "Vérifiez votre email et entrez le code reçu";
    return isLogin 
      ? "Connectez-vous pour accéder à votre tableau de bord" 
      : "Créez votre compte pour analyser vos réservations Airbnb & Booking";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center text-slate-600 hover:text-blue-600 transition-colors mb-6 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour à l'accueil
          </Link>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <BarChart3 className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ReservaAnalytics
              </h1>
              <p className="text-xs text-slate-500">Analyse intelligente avec IA</p>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            {getTitle()}
          </h2>
          <p className="text-slate-600">
            {getDescription()}
          </p>

          {isVerified && (
            <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-center space-x-2 text-emerald-700">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Compte vérifié avec succès !</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access to Dashboard */}
        <div className="mb-6">
          <Link 
            to="/dashboard" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
          >
            <BarChart3 className="h-4 w-4" />
            <span>Accéder au Tableau de Bord</span>
          </Link>
        </div>

        {/* Auth Card */}
        <Card className="backdrop-blur-xl bg-white/90 border-0 shadow-2xl shadow-blue-500/10">
          <CardHeader className="space-y-4">
            <CardTitle className="text-center text-xl text-slate-800 flex items-center justify-center space-x-2">
              {isResetPassword && <KeyRound className="h-5 w-5" />}
              {showVerification && <Mail className="h-5 w-5" />}
              {!isResetPassword && !showVerification && <Shield className="h-5 w-5" />}
              <span>{getTitle()}</span>
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Reset Password Success */}
            {resetEmailSent && (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Mail className="h-8 w-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Email envoyé !</h3>
                  <p className="text-slate-600 mb-4">
                    Vérifiez votre boîte email et cliquez sur le lien pour réinitialiser votre mot de passe.
                  </p>
                  <Button 
                    onClick={() => {
                      setIsResetPassword(false);
                      setResetEmailSent(false);
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Retour à la connexion
                  </Button>
                </div>
              </div>
            )}

            {/* Verification Form */}
            {showVerification && !resetEmailSent && (
              <form onSubmit={handleVerificationSubmit} className="space-y-4">
                <div className="text-center space-y-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">Vérifiez votre email</h3>
                    <p className="text-slate-600">
                      Un code de vérification a été envoyé à <strong>{email}</strong>
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="code" className="text-slate-700 font-medium">
                    Code de vérification (8 caractères)
                  </Label>
                  <Input
                    id="code"
                    type="text"
                    placeholder="AB123CD4"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="h-12 text-center text-lg tracking-widest border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                    maxLength={8}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isLoading || verificationCode.length !== 8}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Vérification...</span>
                    </div>
                  ) : (
                    "Vérifier le code"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setShowVerification(false);
                    setIsLogin(false);
                  }}
                >
                  Modifier l'email
                </Button>
              </form>
            )}

            {/* Main Auth Forms */}
            {!showVerification && !resetEmailSent && (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name field for signup */}
                {!isLogin && !isResetPassword && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">
                      Nom complet *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="name"
                        type="text"
                        placeholder="Votre nom complet"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Email field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Adresse email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                      required
                    />
                  </div>
                </div>

                {/* Password field */}
                {!isResetPassword && (
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-slate-700 font-medium">
                      Mot de passe *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {!isLogin && (
                      <p className="text-xs text-slate-500">
                        Minimum 8 caractères avec majuscules, minuscules et chiffres
                      </p>
                    )}
                  </div>
                )}

                {/* Confirm Password field for signup */}
                {!isLogin && !isResetPassword && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-slate-700 font-medium">
                      Confirmer le mot de passe *
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-400"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                    {password !== confirmPassword && confirmPassword && (
                      <p className="text-xs text-red-600 flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>Les mots de passe ne correspondent pas</span>
                      </p>
                    )}
                  </div>
                )}

                {/* Forgot Password Link */}
                {isLogin && !isResetPassword && (
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={() => setIsResetPassword(true)}
                      className="text-sm text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Mot de passe oublié ?
                    </button>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  disabled={isLoading || (!isResetPassword && !isLogin && password !== confirmPassword)}
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>
                        {isResetPassword ? "Envoi..." : !isLogin ? "Création..." : "Connexion..."}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Shield className="h-4 w-4" />
                      <span>
                        {isResetPassword ? "Envoyer le lien" : !isLogin ? "Créer mon compte" : "Se connecter"}
                      </span>
                    </div>
                  )}
                </Button>
              </form>
            )}

            {/* Switch between forms */}
            {!showVerification && !resetEmailSent && (
              <div className="text-center pt-4 border-t border-slate-100">
                {isResetPassword ? (
                  <p className="text-slate-600">
                    Vous vous souvenez ?
                    <button
                      onClick={() => setIsResetPassword(false)}
                      className="ml-2 text-blue-600 hover:text-purple-600 font-medium transition-colors"
                    >
                      Retour à la connexion
                    </button>
                  </p>
                ) : (
                  <p className="text-slate-600">
                    {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
                    <button
                      onClick={() => setIsLogin(!isLogin)}
                      className="ml-2 text-blue-600 hover:text-purple-600 font-medium transition-colors"
                    >
                      {isLogin ? "S'inscrire" : "Se connecter"}
                    </button>
                  </p>
                )}
              </div>
            )}

            {/* Security notice */}
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-2 text-blue-700 mb-2">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-medium">Connexion sécurisée SSL</span>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="outline" className="border-blue-200 text-blue-700 text-xs">
                  Données chiffrées
                </Badge>
                <Badge variant="outline" className="border-blue-200 text-blue-700 text-xs">
                  Vérification email
                </Badge>
                <Badge variant="outline" className="border-blue-200 text-blue-700 text-xs">
                  Reset sécurisé
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
