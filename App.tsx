import React, { useState } from 'react';
import Background from './components/Background';
import Input from './components/Input';
import Button from './components/Button';
import BentoPanel from './components/BentoPanel';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';
import { AuthMode } from './types';

const App: React.FC = () => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate network request
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const toggleMode = () => {
    setMode(prev => prev === 'login' ? 'signup' : 'login');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 font-sans text-white relative">
      <Background />

      {/* Main Glassmorphic Container */}
      <div className="
        relative z-10 w-full max-w-5xl 
        bg-white/5 backdrop-blur-[20px] 
        border border-white/20 rounded-[30px]
        shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]
        overflow-hidden
        p-2 md:p-3
      ">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:min-h-[600px]">
          
          {/* Left Side: Form Section (Spans 7 columns on desktop) */}
          <div className="md:col-span-7 p-6 md:p-12 flex flex-col justify-center h-full">
            <div className="max-w-md w-full mx-auto space-y-8">
              
              {/* Header */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  {mode === 'login' ? 'Bon retour' : 'Rejoignez-nous'}
                </h1>
                <p className="text-white/40 text-lg">
                  {mode === 'login' 
                    ? 'Entrez vos coordonnées pour accéder à votre espace.' 
                    : 'Commencez votre voyage exclusif aujourd\'hui.'}
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {mode === 'signup' && (
                  <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                     <Input 
                      label="Nom complet" 
                      type="text" 
                      placeholder="Jean Dupont"
                      icon={<User className="w-5 h-5" />}
                    />
                  </div>
                )}
                
                <Input 
                  label="Email professionnel" 
                  type="email" 
                  placeholder="nom@entreprise.com"
                  icon={<Mail className="w-5 h-5" />}
                />
                
                <div className="space-y-2">
                  <Input 
                    label="Mot de passe" 
                    type="password" 
                    placeholder="••••••••"
                    icon={<Lock className="w-5 h-5" />}
                  />
                  {mode === 'login' && (
                    <div className="flex justify-end">
                      <Button variant="ghost" type="button" className="!text-xs !p-0">
                        Mot de passe oublié ?
                      </Button>
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <Button isLoading={isLoading} type="submit">
                    {mode === 'login' ? 'Connexion' : "S'inscrire"} <ArrowRight className="w-4 h-4 inline ml-1" />
                  </Button>
                </div>
              </form>

              {/* Footer Toggle */}
              <div className="text-center pt-4 border-t border-white/5">
                <p className="text-white/40 text-sm">
                  {mode === 'login' ? "Vous n'avez pas de compte ?" : "Vous avez déjà un compte ?"}
                  <button 
                    onClick={toggleMode}
                    className="ml-2 text-burnt-orange hover:text-white transition-colors font-semibold outline-none focus:underline"
                  >
                    {mode === 'login' ? "Créer un compte" : "Se connecter"}
                  </button>
                </p>
              </div>

            </div>
          </div>

          {/* Right Side: Bento Panel (Spans 5 columns on desktop) */}
          <div className="hidden md:block md:col-span-5 h-full">
            <BentoPanel />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;