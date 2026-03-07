/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';
import { GoogleGenAI } from "@google/genai";
import { 
  Wifi, 
  Zap, 
  Headset, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  User,
  Cpu,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  Quote,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowLeft,
  FileText,
  Download,
  LogOut,
  Calendar,
  CreditCard,
  X,
  Copy,
  Search
} from 'lucide-react';

const WHATSAPP_URL = "https://wa.me/5553984782570?text=Olá! Gostaria de contratar um plano da Pietra's Internet.";

const Navbar = ({ onOpenClientArea }: { onOpenClientArea: () => void }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 glass">
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center shadow-[0_0_15px_rgba(255,0,122,0.5)]">
        <Wifi className="text-white w-6 h-6" />
      </div>
      <span className="font-display font-extrabold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-pink">
        PIETRA'S INTERNET
      </span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
      <a href="#home" className="hover:text-brand-pink transition-colors">Início</a>
      <a href="#disponibilidade" className="hover:text-brand-pink transition-colors">Disponibilidade</a>
      <a href="#planos" className="hover:text-brand-pink transition-colors">Planos</a>
      <a href="#beneficios" className="hover:text-brand-pink transition-colors">Benefícios</a>
      <a href="#contato" className="hover:text-brand-pink transition-colors">Contato</a>
    </div>
    <div className="flex items-center gap-3">
      <a 
        href="https://www.brasilbandalarga.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden lg:flex px-5 py-2 rounded-full bg-brand-purple/20 hover:bg-brand-purple/30 border border-brand-purple/30 text-xs font-bold text-brand-purple transition-all items-center gap-2"
      >
        <Zap className="w-3 h-3" />
        Teste de Velocidade
      </a>
      <button 
        onClick={onOpenClientArea}
        className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-semibold transition-all"
      >
        Área do Cliente
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-pink/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
    
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-bold uppercase tracking-widest mb-6">
          <Star className="w-3 h-3 fill-brand-pink" />
          A Nova Era da Conexão
        </div>
        <h1 className="font-display text-6xl md:text-8xl font-black leading-[0.9] mb-6 tracking-tighter">
          PIETRA'S <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-pink via-brand-purple to-brand-gold">
            INTERNET
          </span>
        </h1>
        <p className="text-xl text-white/60 mb-8 max-w-lg leading-relaxed">
          Velocidade, estabilidade e conexão sem limites. Experimente o futuro da navegação com a tecnologia que entende você.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg shadow-[0_10px_30px_rgba(255,0,122,0.4)] hover:scale-105 transition-transform flex items-center justify-center gap-2"
          >
            Contratar Agora
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="#disponibilidade"
            className="px-8 py-4 rounded-2xl glass text-white font-bold text-lg hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5 text-brand-pink" />
            Verificar Cobertura
          </a>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <a 
            href="https://www.brasilbandalarga.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/40 hover:text-brand-purple transition-colors text-sm font-bold uppercase tracking-widest"
          >
            <Zap className="w-4 h-4" />
            Teste sua velocidade contratada
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 w-full aspect-square rounded-full border border-white/10 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-pink/10 to-transparent rounded-full animate-spin-slow" />
          <img 
            src="https://picsum.photos/seed/cyber-woman/800/800" 
            alt="Futuristic Connectivity" 
            className="w-full h-full object-cover rounded-full border-4 border-brand-pink/30 shadow-[0_0_50px_rgba(255,0,122,0.3)]"
            referrerPolicy="no-referrer"
          />
          {/* Floating Icons */}
          <div className="absolute top-0 right-10 w-16 h-16 glass rounded-2xl flex items-center justify-center animate-bounce">
            <Zap className="text-brand-gold w-8 h-8" />
          </div>
          <div className="absolute bottom-10 left-0 w-20 h-20 glass rounded-full flex items-center justify-center animate-pulse">
            <Globe className="text-brand-pink w-10 h-10" />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const PlanCard = ({ title, speed, price, benefits, featured = false, tiers }: any) => {
  const [activeTier, setActiveTier] = React.useState(0);
  
  const currentSpeed = tiers ? tiers[activeTier].speed : speed;
  const currentPrice = tiers ? tiers[activeTier].price : price;

  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de contratar o plano ${title} de ${currentSpeed} MEGA por R$ ${currentPrice}/mês.`);
  const dynamicWhatsappUrl = `https://wa.me/5553984782570?text=${whatsappMessage}`;

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-8 rounded-[2.5rem] flex flex-col h-full transition-all duration-500 relative overflow-hidden ${
        featured 
          ? 'bg-gradient-to-b from-brand-pink/20 to-brand-purple/20 border-2 border-brand-pink/50 shadow-[0_20px_50px_rgba(255,0,122,0.2)]' 
          : 'glass border-white/10 hover:border-brand-pink/30'
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white/60 font-bold uppercase tracking-widest text-sm">{title}</h3>
        {tiers && (
          <div className="flex gap-1">
            {tiers.map((_: any, idx: number) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all ${activeTier === idx ? 'bg-brand-pink w-4' : 'bg-white/20'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="relative mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpeed}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex items-baseline"
          >
            <span className="font-display text-5xl font-black text-white">{currentSpeed}</span>
            {!currentSpeed.includes('GIGA') && <span className="text-brand-pink font-bold ml-2">MEGA</span>}
          </motion.div>
        </AnimatePresence>

        {tiers && (
          <div className="absolute inset-y-0 -right-4 flex items-center">
            <button 
              onClick={() => setActiveTier((activeTier + 1) % tiers.length)}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/40 hover:text-brand-pink transition-all"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/5">
        <span className="text-white/50 text-sm">A partir de</span>
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentPrice}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-baseline gap-1"
          >
            <span className="text-2xl font-bold text-brand-gold">R$</span>
            <span className="text-4xl font-black text-white">{currentPrice}</span>
            <span className="text-white/50 text-sm">/mês</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <ul className="space-y-4 mb-10 flex-grow">
        {benefits.map((benefit: string, i: number) => (
          <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
            <CheckCircle2 className="w-5 h-5 text-brand-pink flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
      <a 
        href={dynamicWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full py-4 rounded-2xl font-bold transition-all text-center ${
        featured 
          ? 'bg-brand-pink text-white shadow-[0_0_20px_rgba(255,0,122,0.5)] hover:shadow-[0_0_30px_rgba(255,0,122,0.8)]' 
          : 'bg-white/10 text-white hover:bg-brand-pink'
      }`}>
        Assinar Plano
      </a>
    </motion.div>
  );
};

const AvailabilityChecker = () => {
  const [cep, setCep] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<string | null>(null);
  const [groundingChunks, setGroundingChunks] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  const checkAvailability = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cep || cep.length < 8) {
      setError('Por favor, insira um CEP válido.');
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);
    setGroundingChunks([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Identifique o endereço completo (especialmente o nome da rua) para o CEP ${cep} no Brasil. 
        Confirme de forma clara e entusiasmada que a Pietra's Internet possui disponibilidade total de fibra óptica de alta velocidade nesta rua. 
        Sua resposta DEVE começar com uma frase confirmando o endereço, por exemplo: "Ótimas notícias! Identificamos que o seu endereço na **[Nome da Rua]** já conta com a cobertura ultraveloz da Pietra's Internet."
        Liste também outros provedores locais e forneça links do Google Maps para lojas de provedores próximos. 
        Destaque que a Pietra's Internet é a melhor opção para este endereço.`,
        config: {
          tools: [{ googleSearch: {} }, { googleMaps: {} }],
        },
      });

      setResult(response.text || "Não foi possível obter informações para este CEP.");
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        setGroundingChunks(chunks);
      }
    } catch (err: any) {
      console.error('Erro ao verificar disponibilidade:', err);
      setError('Ocorreu um erro ao verificar a disponibilidade. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="disponibilidade" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2.5rem] border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-[80px] -z-10" />
          
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-purple/10 border border-brand-purple/20 text-brand-purple text-xs font-bold uppercase tracking-widest mb-4">
              <MapPin className="w-3 h-3" />
              Cobertura
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4">Verificar Disponibilidade</h2>
            <p className="text-white/60">Insira seu CEP para descobrir se a nossa fibra já chegou na sua rua.</p>
          </div>

          <form onSubmit={checkAvailability} className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <input 
                type="text" 
                placeholder="Digite seu CEP (ex: 96010-000)" 
                value={cep}
                onChange={(e) => setCep(e.target.value.replace(/\D/g, '').slice(0, 8))}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-pink/50 transition-all pl-12"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 w-5 h-5" />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-2xl bg-brand-pink text-white font-bold hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Verificar
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center mb-6">
              {error}
            </div>
          )}

          {result && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-display text-lg font-bold">Disponibilidade Confirmada!</p>
                  <p className="text-sm opacity-70">A Pietra's Internet já chegou no seu endereço. Prepare-se para a ultravelocidade!</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 prose prose-invert max-w-none">
                <div className="markdown-body">
                  <Markdown>{result}</Markdown>
                </div>
              </div>

              <div className="flex justify-center pt-4">
                <a 
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 rounded-2xl bg-brand-pink text-white font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_10px_30px_rgba(255,0,122,0.3)]"
                >
                  Contratar Agora neste Endereço
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              {groundingChunks.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-white/50 uppercase tracking-widest flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    Fontes e Locais Próximos
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {groundingChunks.map((chunk, idx) => {
                      const url = chunk.web?.uri || chunk.maps?.uri;
                      const title = chunk.web?.title || chunk.maps?.title || 'Ver no mapa';
                      if (!url) return null;
                      return (
                        <a 
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-pink/10 flex items-center justify-center group-hover:bg-brand-pink/20 transition-colors">
                            {chunk.maps ? <MapPin className="w-4 h-4 text-brand-pink" /> : <Globe className="w-4 h-4 text-brand-pink" />}
                          </div>
                          <span className="text-sm text-white/70 group-hover:text-white transition-colors truncate">{title}</span>
                          <ArrowRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-brand-pink transition-colors" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

const Plans = () => {
  const plans = [
    {
      title: "TIM",
      speed: "500",
      price: "99,99",
      benefits: ["Wi-Fi 6 de última geração", "Globoplay + Looke incluso", "Aya Idiomas + Audiobooks", "Bancah + Games Club"],
      tiers: [
        { speed: "500", price: "99,99" },
        { speed: "700", price: "109,99" }
      ]
    },
    {
      title: "NIO",
      speed: "500",
      price: "100,00",
      benefits: ["Preço fixo até Jan/2028", "Globoplay por 12 meses", "Wi-Fi 6 de última geração", "Internet mais confiável do Brasil"],
      featured: true,
      tiers: [
        { speed: "500", price: "100,00" },
        { speed: "700", price: "130,00" },
        { speed: "1000", price: "160,00" }
      ]
    },
    {
      title: "CLARO",
      speed: "500",
      price: "99,90",
      benefits: ["Wi-Fi grátis incluso", "Claro Gaming disponível", "App Claro TV+ incluso", "Estabilidade de Fibra"],
      tiers: [
        { speed: "500", price: "99,90" },
        { speed: "750", price: "129,90" },
        { speed: "1000", price: "199,90" }
      ]
    }
  ];

  return (
    <section id="planos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Planos de Internet</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Escolha a potência ideal para sua casa ou empresa. Conexão estável com o melhor custo-benefício da região.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <PlanCard key={i} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="p-8 rounded-3xl glass border-white/5 hover:border-brand-purple/30 transition-all group"
  >
    <div className="w-14 h-14 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:bg-brand-purple/20 transition-colors">
      <Icon className="text-brand-purple w-8 h-8" />
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const WhyChooseUs = () => (
  <section id="beneficios" className="py-24 bg-white/[0.02]">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="font-display text-4xl md:text-5xl font-black mb-6">
            Por que escolher a <br />
            <span className="text-brand-pink">PIETRA'S INTERNET?</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Não entregamos apenas megas, entregamos experiências. Nossa rede foi desenhada para quem não pode parar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 rounded-3xl glass text-center">
            <div className="text-3xl font-black text-brand-gold mb-1">99.9%</div>
            <div className="text-xs text-white/50 uppercase tracking-widest">Uptime</div>
          </div>
          <div className="p-6 rounded-3xl glass text-center">
            <div className="text-3xl font-black text-brand-pink mb-1">100%</div>
            <div className="text-xs text-white/50 uppercase tracking-widest">Fibra Óptica</div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <BenefitCard 
          icon={Zap} 
          title="Alta performance" 
          description="Navegue, jogue e trabalhe com a máxima velocidade disponível no mercado."
        />
        <BenefitCard 
          icon={Headset} 
          title="Atendimento humanizado" 
          description="Nossa equipe está pronta para te ouvir e resolver qualquer questão com carinho."
        />
        <BenefitCard 
          icon={Cpu} 
          title="Tecnologia de ponta" 
          description="Equipamentos de última geração para garantir o melhor sinal em cada cômodo."
        />
        <BenefitCard 
          icon={ShieldCheck} 
          title="Conexão ultra estável" 
          description="Diga adeus às quedas. Nossa rede é resiliente e preparada para picos de uso."
        />
      </div>
    </div>
  </section>
);

const TestimonialCard = ({ name, role, content, image }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="p-8 rounded-[2rem] glass border-white/5 relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
      <Quote className="w-12 h-12 text-brand-pink" />
    </div>
    <div className="flex items-center gap-4 mb-6">
      <div className="w-14 h-14 rounded-full border-2 border-brand-pink/30 p-1">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover rounded-full"
          referrerPolicy="no-referrer"
        />
      </div>
      <div>
        <h4 className="font-bold text-white">{name}</h4>
        <p className="text-xs text-brand-pink font-semibold uppercase tracking-wider">{role}</p>
      </div>
    </div>
    <p className="text-white/70 italic leading-relaxed">"{content}"</p>
    <div className="mt-6 flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-brand-gold text-brand-gold" />
      ))}
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Silva",
      role: "Designer Freelancer",
      content: "A velocidade é surreal! Consigo subir arquivos pesados em segundos. Finalmente uma internet que acompanha meu ritmo de trabalho.",
      image: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Ricardo Oliveira",
      role: "Gamer Profissional",
      content: "Ping baixíssimo e estabilidade total. Jogo campeonatos sem me preocupar com quedas. A Pietra's Internet é outro nível.",
      image: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "Carla Mendes",
      role: "Empresária",
      content: "O atendimento humanizado fez toda a diferença. Instalação rápida e suporte que realmente resolve. Recomendo para todos!",
      image: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-pink/10 rounded-full blur-[100px]" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">O que dizem nossos clientes</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A satisfação de quem já vive a experiência Pietra's Internet.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full p-6 rounded-2xl glass border-white/5 flex items-center justify-between text-left transition-all ${isOpen ? 'border-brand-pink/30 bg-white/5' : 'hover:bg-white/5'}`}
      >
        <span className="font-bold text-white pr-4">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-pink w-5 h-5" /> : <ChevronDown className="text-white/40 w-5 h-5" />}
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="p-6 text-white/60 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Como funciona a instalação?",
      answer: "Nossa instalação é rápida e eficiente. Após a contratação, nossa equipe técnica agenda uma visita em até 48 horas para realizar toda a configuração da fibra óptica em sua residência."
    },
    {
      question: "Os planos possuem fidelidade?",
      answer: "Oferecemos opções com e sem fidelidade. Consulte as condições específicas de cada plano no momento da contratação para escolher a que melhor se adapta às suas necessidades."
    },
    {
      question: "O Wi-Fi está incluso no valor mensal?",
      answer: "Sim! Todos os nossos planos incluem roteadores de última geração com tecnologia Wi-Fi Turbo para garantir cobertura total em sua casa sem custos adicionais de aluguel."
    },
    {
      question: "Como funciona o suporte 24 horas?",
      answer: "Nosso suporte funciona todos os dias da semana, incluindo feriados. Você pode entrar em contato via WhatsApp ou telefone para resolver qualquer dúvida técnica ou financeira."
    },
    {
      question: "A velocidade contratada é garantida?",
      answer: "Sim, entregamos 100% da velocidade contratada via cabo. No Wi-Fi, a velocidade pode variar de acordo com a distância e obstáculos, mas utilizamos tecnologia de ponta para minimizar perdas."
    }
  ];

  return (
    <section className="py-24 bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black mb-4">Perguntas Frequentes</h2>
          <p className="text-white/60">
            Tire suas dúvidas sobre nossos serviços e tecnologia.
          </p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

const LoginPage = ({ onBack, onLogin }: { onBack: () => void, onLogin: () => void }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    onLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md glass p-10 rounded-[2.5rem] border-white/10 relative z-10"
      >
        <button 
          onClick={onBack}
          className="absolute top-8 left-8 text-white/40 hover:text-brand-pink transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </button>

        <div className="text-center mt-8 mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(255,0,122,0.4)]">
            <Wifi className="text-white w-8 h-8" />
          </div>
          <h2 className="font-display text-3xl font-black mb-2 tracking-tight">Área do Cliente</h2>
          <p className="text-white/50 text-sm">Acesse sua conta para gerenciar seus planos e faturas.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">E-mail ou CPF</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
              <input 
                type="text" 
                required
                placeholder="exemplo@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink/50 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-white/40 uppercase tracking-widest ml-2">Senha</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20" />
              <input 
                type={showPassword ? "text" : "password"} 
                required
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-pink/50 transition-colors"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/50 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button type="button" className="text-xs font-bold text-brand-pink hover:text-brand-pink/80 transition-colors uppercase tracking-widest">
              Esqueceu a senha?
            </button>
          </div>

          <button 
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-brand-pink to-brand-purple text-white font-bold text-lg shadow-[0_10px_30px_rgba(255,0,122,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            Entrar na Conta
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-sm">Ainda não é cliente?</p>
          <a 
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-brand-gold font-bold hover:underline"
          >
            Contrate agora pelo WhatsApp
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const DashboardPage = ({ onLogout }: { onLogout: () => void }) => {
  const [showPixModal, setShowPixModal] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const pixKey = "cesaritau10@gmail.com";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const invoices = [
    { id: 'INV-004', month: 'Março 2026', amount: '120,00', status: 'open', dueDate: '15/03/2026' },
    { id: 'INV-003', month: 'Fevereiro 2026', amount: '120,00', status: 'paid', dueDate: '15/02/2026' },
    { id: 'INV-002', month: 'Janeiro 2026', amount: '120,00', status: 'paid', dueDate: '15/01/2026' },
    { id: 'INV-001', month: 'Dezembro 2025', amount: '120,00', status: 'paid', dueDate: '15/12/2025' },
  ];

  const openInvoices = invoices.filter(inv => inv.status === 'open');
  const paidInvoices = invoices.filter(inv => inv.status === 'paid');

  return (
    <div className="min-h-screen p-6 md:p-12 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/5 rounded-full blur-[120px]" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-pink to-brand-purple flex items-center justify-center shadow-[0_0_15px_rgba(255,0,122,0.4)]">
              <Wifi className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display text-2xl font-black text-white tracking-tight">Olá, Cliente Pietra!</h1>
              <p className="text-white/50 text-sm">Bem-vindo à sua central de faturas.</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 text-white/60 hover:text-brand-pink hover:border-brand-pink/30 transition-all font-bold text-sm uppercase tracking-widest"
          >
            <LogOut className="w-4 h-4" />
            Sair
          </button>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Open Invoices */}
            <section>
              <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                Fatura em Aberto
              </h2>
              {openInvoices.map((inv) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={inv.id}
                  className="glass p-8 rounded-3xl border-brand-gold/20 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl -mr-16 -mt-16" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center">
                        <FileText className="text-brand-gold w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{inv.month}</h3>
                        <p className="text-white/40 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          Vencimento: {inv.dueDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <p className="text-xs text-white/40 font-bold uppercase tracking-widest mb-1">Valor</p>
                        <p className="text-2xl font-black text-white">R$ {inv.amount}</p>
                      </div>
                      <button 
                        onClick={() => setShowPixModal(true)}
                        className="px-6 py-3 rounded-xl bg-brand-gold text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                      >
                        Pagar Agora
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </section>

            {/* Paid Invoices */}
            <section>
              <h2 className="text-xs font-black text-white/40 uppercase tracking-[0.2em] mb-6">Histórico de Faturas Pagas</h2>
              <div className="space-y-4">
                {paidInvoices.map((inv) => (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={inv.id}
                    className="glass p-6 rounded-2xl border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <CheckCircle2 className="text-emerald-500 w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{inv.month}</h4>
                        <p className="text-white/30 text-xs">Paga em {inv.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <p className="font-bold text-white/80">R$ {inv.amount}</p>
                      <button className="p-2 rounded-lg bg-white/5 text-white/40 hover:text-brand-pink hover:bg-brand-pink/10 transition-all">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-[2rem] border-brand-pink/20">
              <h3 className="text-sm font-black text-white/40 uppercase tracking-widest mb-6">Meu Plano</h3>
              <div className="mb-6">
                <p className="text-brand-pink font-black text-3xl mb-1">NIO</p>
                <p className="text-white/60 text-sm">600 MEGA Fibra Óptica</p>
              </div>
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Status</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Ativo
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-white/40">Próxima Fatura</span>
                  <span className="text-white/80 font-bold">15/03/2026</span>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2rem] border-white/5">
              <h3 className="text-sm font-black text-white/40 uppercase tracking-widest mb-6">Precisa de Ajuda?</h3>
              <p className="text-white/50 text-sm mb-6 leading-relaxed">
                Problemas com sua conexão ou faturas? Fale com nosso suporte agora mesmo.
              </p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-pink hover:border-brand-pink transition-all"
              >
                <Headset className="w-4 h-4" />
                Suporte Técnico
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* PIX Modal */}
      {showPixModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowPixModal(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md glass p-8 rounded-[2.5rem] border-brand-gold/30 relative z-10 text-center"
          >
            <button 
              onClick={() => setShowPixModal(false)}
              className="absolute top-6 right-6 text-white/20 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="w-20 h-20 rounded-3xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
              <CreditCard className="text-brand-gold w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white mb-2">Pagamento via PIX</h3>
            <p className="text-white/50 text-sm mb-8">Utilize a chave PIX abaixo para realizar o pagamento da sua fatura.</p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 relative group">
              <p className="text-xs text-white/30 font-bold uppercase tracking-widest mb-2">Chave PIX (E-mail)</p>
              <p className="text-xl font-mono font-bold text-brand-gold break-all">{pixKey}</p>
              
              <button 
                onClick={handleCopyPix}
                className="mt-4 flex items-center gap-2 mx-auto px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm font-bold"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    Copiado!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copiar Chave
                  </>
                )}
              </button>
            </div>

            <div className="space-y-4">
              <p className="text-xs text-white/30 leading-relaxed">
                Após o pagamento, a compensação ocorre em até 30 minutos. Guarde seu comprovante.
              </p>
              <button 
                onClick={() => setShowPixModal(false)}
                className="w-full py-4 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 transition-all"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const Footer = () => (
  <footer id="contato" className="pt-24 pb-12 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-96 bg-brand-pink/10 rounded-[100%] blur-[100px] -z-10" />
    
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-brand-pink flex items-center justify-center">
              <Wifi className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-extrabold text-xl tracking-tighter">
              PIETRA'S INTERNET
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Conectando sonhos e aproximando pessoas através da tecnologia mais avançada do planeta.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-white">Links</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-brand-pink transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Privacidade</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-white">Suporte</h4>
            <ul className="space-y-2 text-white/50 text-sm">
              <li><a href="#" className="hover:text-brand-pink transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Central de Ajuda</a></li>
              <li><a href="https://www.brasilbandalarga.com.br/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors flex items-center gap-1">Teste de Velocidade <Zap className="w-3 h-3" /></a></li>
              <li><a href="#" className="hover:text-brand-pink transition-colors">Ouvidoria</a></li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6 glass p-8 rounded-[2rem] border-white/10">
          <h4 className="font-bold text-white flex items-center gap-2">
            <ArrowRight className="text-brand-pink w-5 h-5" />
            Informações de Contato
          </h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-brand-pink w-5 h-5 mt-1" />
              <div>
                <p className="text-xs text-white/40 uppercase font-bold">Endereço</p>
                <p className="text-white/70 text-sm">Rua das Conexões, 1000 - Centro</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="text-brand-pink w-5 h-5 mt-1" />
              <div>
                <p className="text-xs text-white/40 uppercase font-bold">Telefone</p>
                <p className="text-white/70 text-sm">53 984782570</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <User className="text-brand-pink w-5 h-5 mt-1" />
              <div>
                <p className="text-xs text-white/40 uppercase font-bold">Contato</p>
                <p className="text-white/70 text-sm">CesarCardoso</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-xs font-medium uppercase tracking-widest">
        <p>© 2026 PIETRA'S INTERNET. Todos os direitos reservados.</p>
        <div className="flex gap-6">
          <a 
            href="https://www.instagram.com/pietrasinternet?igsh=d2k4dGh3eThicXJj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">X</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'login' | 'dashboard'>('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  if (currentPage === 'login') {
    return (
      <div className="font-sans selection:bg-brand-pink selection:text-white">
        <LoginPage 
          onBack={() => setCurrentPage('home')} 
          onLogin={() => setCurrentPage('dashboard')}
        />
        
        {/* Global Background Glow */}
        <div className="fixed inset-0 -z-20 bg-[#050505]" />
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-[150px]" />
        </div>
      </div>
    );
  }

  if (currentPage === 'dashboard') {
    return (
      <div className="font-sans selection:bg-brand-pink selection:text-white">
        <DashboardPage onLogout={() => setCurrentPage('home')} />
        
        {/* Global Background Glow */}
        <div className="fixed inset-0 -z-20 bg-[#050505]" />
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-[150px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans selection:bg-brand-pink selection:text-white">
      <Navbar onOpenClientArea={() => setCurrentPage('login')} />
      <main>
        <Hero />
        <AvailabilityChecker />
        <Plans />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      
      {/* Global Background Glow */}
      <div className="fixed inset-0 -z-20 bg-[#050505]" />
      <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-pink/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-purple/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
