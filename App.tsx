import React, { useState } from "react";
import { Tractor, Fish, Gift, Copy, Check, Plane } from "lucide-react";
import { Brand } from "./types";
import BrandCard from "./components/BrandCard";
import logoAgro from "./assets/logo-agro.png";
import logoFishing from "./assets/logo-fishing.png";
import logoMotors from "./assets/logo-motors.png";
import logoBRK from "./assets/logo-simples.svg";

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = "BRKVIP30";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(couponCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      // Fallback for some mobile browsers or non-secure contexts
      const textArea = document.createElement("textarea");
      textArea.value = couponCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const brands: Brand[] = [
    {
      id: "agro",
      name: "BRK Agro",
      description: "Camisas com proteção solar para o campo.",
      url: `https://www.brkagro.com.br/discount/${couponCode}`,
      icon: Tractor,
      gradient: "from-green-500 to-emerald-900",
      imgLoja: logoAgro,
    },
    {
      id: "motors",
      name: "BRK Motors",
      description: "Roupas e equipamentos para quem vive a estrada.",
      url: `https://www.brkmotors.com.br/discount/${couponCode}`,
      icon: Plane,
      gradient: "from-red-500 to-red-900",
      imgLoja: logoMotors,
    },
    {
      id: "fishing",
      name: "BRK Fishing",
      description: "Camisas e acessórios para apaixonados por pesca.",
      url: `https://www.brkfishing.com.br/discount/${couponCode}`,
      icon: Fish,
      gradient: "from-blue-500 to-cyan-900",
      imgLoja: logoFishing,
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans flex flex-col relative overflow-hidden selection:bg-zinc-700 selection:text-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-zinc-800/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-zinc-900/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="w-full py-6 md:py-8 flex justify-center items-center relative z-10">
        <img className="invert w-60" src={logoBRK} alt="" />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-4 relative z-10 w-full max-w-5xl mx-auto px-4">
        {/* Text Header (Conversion Copy) */}
        <div className="text-center mb-6 md:mb-10 space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center p-2 md:p-3 bg-gradient-to-br from-yellow-500/20 to-yellow-600/5 rounded-full mb-1 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
            <Gift className="w-6 h-6 md:w-8 md:h-8 text-yellow-500" />
          </div>
          <h2 className="text-2xl md:text-5xl font-bold text-white leading-tight">
            Você ganhou um <br className="md:hidden" />
            <span className="text-yellow-500">desconto especial!</span>
          </h2>
          <p className="text-zinc-400 text-xs md:text-lg font-light max-w-lg mx-auto leading-relaxed px-4">
            Copie o código e escolha onde quer aproveitar seu presente BRK.
          </p>
        </div>

        {/* Cards Container - Forced Row on Mobile */}
        <div className="w-full mb-8 md:mb-12">
          <div className="flex flex-row gap-2 md:gap-6 justify-between items-stretch w-full">
            {brands.map((brand) => (
              <BrandCard key={brand.id} brand={brand} />
            ))}
          </div>
        </div>

        {/* Coupon Section (New) */}
        <div className="w-full max-w-md mx-auto relative z-20">
          <div className="bg-white rounded-lg md:rounded-xl p-1.5 md:p-2 flex items-center shadow-[0_0_30px_rgba(255,255,255,0.15)] ring-1 ring-white/50">
            <div className="flex-grow text-center border-r border-zinc-200 border-dashed pr-2">
              <span className="block text-[10px] md:text-xs text-zinc-400 uppercase font-medium tracking-wide mb-0.5">
                Seu Cupom
              </span>
              <span className="text-zinc-900 font-black text-xl md:text-3xl tracking-widest leading-none">
                {couponCode}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className={`
                ml-2 px-4 md:px-8 py-2 md:py-4 rounded md:rounded-lg font-bold text-xs md:text-sm 
                transition-all duration-300 active:scale-95 flex items-center gap-2
                ${
                  copied
                    ? "bg-green-500 text-white hover:bg-green-600"
                    : "bg-zinc-900 text-white hover:bg-zinc-800"
                }
              `}
              aria-label="Copiar cupom"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span className="hidden md:inline">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>

          {/* Feedback Text */}
          <div
            className={`text-center mt-3 transition-all duration-300 transform ${
              copied ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 text-green-400 text-xs md:text-sm font-medium bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
              <Check className="w-3 h-3" />
              Código copiado com sucesso!
            </span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-zinc-600 text-[10px] md:text-sm relative z-10">
        <p>BRK – Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
