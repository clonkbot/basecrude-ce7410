import { useState, useEffect } from 'react';

// Simulated price data (since we can't make external API calls)
const generateOilPrice = () => {
  const base = 72.50;
  const variance = (Math.random() - 0.5) * 2;
  return (base + variance).toFixed(2);
};

const generateGoldPrice = () => {
  const base = 2650.00;
  const variance = (Math.random() - 0.5) * 20;
  return (base + variance).toFixed(2);
};

const generateChange = () => {
  const change = (Math.random() - 0.5) * 4;
  return change.toFixed(2);
};

// Simulated news data
const oilNewsHeadlines = [
  { user: "@OilTraderPro", content: "$OIL looking bullish! Crude inventories dropping faster than expected. OPEC+ keeping supply tight. 🛢️🚀", time: "2m" },
  { user: "@CryptoBarrel", content: "Just aped into $OIL on Base. This is the real commodity play in crypto. NFA but DYOR 💎", time: "5m" },
  { user: "@EnergyAnalyst", content: "$OIL breaking resistance at 72.50. Next stop 75? Middle East tensions rising. 📈", time: "8m" },
  { user: "@BasedDegen", content: "Why trade memes when you can trade real commodities? $OIL on @base is the future of DeFi derivatives", time: "12m" },
  { user: "@PetroChad", content: "Winter heating season approaching. $OIL demand about to spike. You've been warned. 🔥", time: "15m" },
  { user: "@CrudeKing", content: "BREAKING: Saudi Arabia signals extended production cuts through Q1. $OIL holders eating good", time: "18m" },
  { user: "@BaseMaxi", content: "$OIL on Base is unironically the most based trade rn. Real assets, real value. 🛢️", time: "22m" },
  { user: "@GasGuzzler", content: "Everyone sleeping on $OIL while chasing dogs and frogs. Real ones know. 💰", time: "28m" },
];

function Header() {
  const [copied, setCopied] = useState(false);

  const copyCA = () => {
    navigator.clipboard.writeText("0x21FD44bE608F1D18689CDcC8861AE74571Ae8888");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <header className="relative overflow-hidden border-b border-blue-500/30 bg-gradient-to-r from-slate-950 via-blue-950/50 to-slate-950">
      {/* Animated pipeline decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo and Title */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <span className="text-xl sm:text-2xl">🛢️</span>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse border-2 border-slate-950" />
            </div>
            <div>
              <h1 className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight">
                <span className="text-white">BASE</span>
                <span className="text-blue-400">CRUDE</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-blue-300/60 font-mono tracking-widest">COMMODITY TERMINAL</p>
            </div>
          </div>

          {/* Contract Address */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <div
              onClick={copyCA}
              className="group cursor-pointer bg-slate-900/80 border border-blue-500/30 rounded-lg px-2 sm:px-4 py-2 hover:border-blue-400/60 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-bold text-xs sm:text-sm">BASE.MEME $OIL</span>
                <span className="hidden sm:inline text-slate-500">|</span>
                <code className="text-[9px] sm:text-xs text-slate-400 font-mono">
                  <span className="hidden md:inline">CA: 0x21FD44...Ae8888</span>
                  <span className="md:hidden">0x21...8888</span>
                </code>
                <span className="text-blue-400 group-hover:text-blue-300 transition-colors text-xs">
                  {copied ? "✓" : "📋"}
                </span>
              </div>
            </div>

            <a
              href="https://base.meme/coin/base:0x21FD44bE608F1D18689CDcC8861AE74571Ae8888?referrer=0xFCE86e6A615B40A620b1a666ff4B866Cd273c476"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 text-sm sm:text-base"
            >
              <span className="text-lg">🛢️</span>
              <span>BUY $OIL</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function PriceCard({ symbol, name, price, change, icon, isPrimary = false }: {
  symbol: string;
  name: string;
  price: string;
  change: string;
  icon: string;
  isPrimary?: boolean;
}) {
  const isPositive = parseFloat(change) >= 0;

  return (
    <div className={`relative overflow-hidden rounded-xl border ${isPrimary ? 'border-blue-500/50 bg-gradient-to-br from-blue-950/80 to-slate-900' : 'border-slate-700/50 bg-slate-900/80'} p-4 sm:p-6`}>
      {/* Glow effect for primary */}
      {isPrimary && (
        <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
      )}

      {/* Corner decorations */}
      <div className={`absolute top-0 left-0 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 ${isPrimary ? 'border-blue-500/50' : 'border-slate-700/50'} rounded-tl-xl`} />
      <div className={`absolute bottom-0 right-0 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 ${isPrimary ? 'border-blue-500/50' : 'border-slate-700/50'} rounded-br-xl`} />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">{icon}</span>
            <div>
              <h3 className={`font-black text-lg sm:text-xl ${isPrimary ? 'text-blue-400' : 'text-yellow-400'}`}>{symbol}</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 font-mono uppercase tracking-wider">{name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPositive ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
            <span className="text-[10px] sm:text-xs text-slate-500 font-mono">LIVE</span>
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-slate-400 text-xs sm:text-sm font-mono mb-1">SPOT PRICE</p>
            <p className={`font-black text-2xl sm:text-3xl md:text-4xl ${isPrimary ? 'text-white' : 'text-slate-200'}`}>
              ${price}
            </p>
          </div>
          <div className={`flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
            <span className="text-base sm:text-lg">{isPositive ? '▲' : '▼'}</span>
            <span className="font-bold font-mono text-sm sm:text-base">{isPositive ? '+' : ''}{change}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChartEmbed({ title, symbol, isPrimary = false }: { title: string; symbol: string; isPrimary?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border ${isPrimary ? 'border-blue-500/30' : 'border-slate-700/30'} bg-slate-900/50`}>
      <div className={`px-3 sm:px-4 py-2 sm:py-3 border-b ${isPrimary ? 'border-blue-500/30 bg-blue-950/30' : 'border-slate-700/30 bg-slate-800/30'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPrimary ? 'bg-blue-500' : 'bg-yellow-500'} animate-pulse`} />
            <h3 className="font-bold text-white text-xs sm:text-sm">{title}</h3>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-500 font-mono">{symbol}</span>
        </div>
      </div>

      {/* Simulated chart visualization */}
      <div className="p-3 sm:p-4 h-48 sm:h-64 relative">
        <div className="absolute inset-4 flex items-end gap-1">
          {Array.from({ length: 24 }).map((_, i) => {
            const height = 30 + Math.random() * 60;
            const delay = i * 0.05;
            return (
              <div
                key={i}
                className={`flex-1 ${isPrimary ? 'bg-gradient-to-t from-blue-600 to-blue-400' : 'bg-gradient-to-t from-yellow-600 to-yellow-400'} rounded-t opacity-80 hover:opacity-100 transition-opacity`}
                style={{
                  height: `${height}%`,
                  animation: `barGrow 1s ease-out ${delay}s both`
                }}
              />
            );
          })}
        </div>

        {/* Grid lines */}
        <div className="absolute inset-4 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="border-t border-slate-700/30 border-dashed" />
          ))}
        </div>
      </div>

      <div className={`px-3 sm:px-4 py-2 border-t ${isPrimary ? 'border-blue-500/30' : 'border-slate-700/30'}`}>
        <p className="text-[9px] sm:text-xs text-slate-500 text-center">
          Live data visualization • Updates every 10s
        </p>
      </div>
    </div>
  );
}

function NewsFeed({ news }: { news: typeof oilNewsHeadlines }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-slate-900/50">
      <div className="px-3 sm:px-4 py-2 sm:py-3 border-b border-blue-500/30 bg-blue-950/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <h3 className="font-bold text-white text-sm sm:text-base">$OIL Live Feed</h3>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] sm:text-xs text-green-400 font-mono">LIVE</span>
            </div>
          </div>
          <a
            href="https://x.com/search?q=%24OIL&src=typed_query&f=live"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors text-xs sm:text-sm"
          >
            View on X →
          </a>
        </div>
      </div>

      <div className="divide-y divide-slate-800/50 max-h-[400px] sm:max-h-[500px] overflow-y-auto">
        {news.map((item, index) => (
          <div
            key={index}
            className="p-3 sm:p-4 hover:bg-blue-500/5 transition-colors"
            style={{ animation: `slideIn 0.5s ease-out ${index * 0.1}s both` }}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center flex-shrink-0">
                <span className="text-sm sm:text-lg">🛢️</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-white text-xs sm:text-sm truncate">{item.user}</span>
                  <span className="text-slate-500 text-[10px] sm:text-xs">• {item.time}</span>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-3 sm:px-4 py-2 sm:py-3 border-t border-blue-500/30 bg-blue-950/20">
        <p className="text-[9px] sm:text-xs text-blue-400/60 text-center font-mono">
          Auto-refreshing every 10 seconds
        </p>
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-700/30 bg-slate-900/50 p-4 sm:p-6">
      <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Connect with BASECRUDE</h3>
      <a
        href="https://x.com/Basecrude"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-blue-500/50 transition-all group"
      >
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </div>
        <div>
          <p className="font-bold text-white text-sm sm:text-base group-hover:text-blue-400 transition-colors">@Basecrude</p>
          <p className="text-xs sm:text-sm text-slate-500">Follow for $OIL updates</p>
        </div>
        <span className="ml-auto text-slate-500 group-hover:text-blue-400 transition-colors">→</span>
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950/50 py-4 sm:py-6 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 text-center">
        <p className="text-[10px] sm:text-xs text-slate-600 font-mono">
          Requested by{' '}
          <a href="https://x.com/Basecrude" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
            @BASECRUDE
          </a>
          {' '}·{' '}
          Built by{' '}
          <a href="https://x.com/clonkbot" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-400 transition-colors">
            @clonkbot
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [oilPrice, setOilPrice] = useState(generateOilPrice());
  const [goldPrice, setGoldPrice] = useState(generateGoldPrice());
  const [oilChange, setOilChange] = useState(generateChange());
  const [goldChange, setGoldChange] = useState(generateChange());
  const [news, setNews] = useState(oilNewsHeadlines);
  const [refreshCount, setRefreshCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOilPrice(generateOilPrice());
      setGoldPrice(generateGoldPrice());
      setOilChange(generateChange());
      setGoldChange(generateChange());

      // Shuffle news slightly to simulate new posts
      setNews(prev => {
        const shuffled = [...prev];
        const first = shuffled.shift();
        if (first) {
          first.time = "just now";
          shuffled.push(first);
        }
        return shuffled.reverse();
      });

      setRefreshCount(c => c + 1);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(to right, #0052FF 1px, transparent 1px), linear-gradient(to bottom, #0052FF 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />

        <main className="max-w-7xl mx-auto px-3 sm:px-6 py-4 sm:py-8">
          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-slate-400 font-mono">
              LIVE DATA • Refresh #{refreshCount + 1} • Updates every 10s
            </span>
          </div>

          {/* Price Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <PriceCard
              symbol="$OIL"
              name="Crude Oil (WTI)"
              price={oilPrice}
              change={oilChange}
              icon="🛢️"
              isPrimary={true}
            />
            <PriceCard
              symbol="$GOLD"
              name="Gold Spot (XAU)"
              price={goldPrice}
              change={goldChange}
              icon="🥇"
            />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <ChartEmbed title="Crude Oil Chart" symbol="CL:NYM" isPrimary={true} />
            <ChartEmbed title="Gold Chart" symbol="XAU:USD" />
          </div>

          {/* News and Social */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="lg:col-span-2">
              <NewsFeed news={news} />
            </div>
            <div className="space-y-4 sm:space-y-6">
              <SocialLinks />

              {/* Quick stats */}
              <div className="relative overflow-hidden rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-950/50 to-slate-900 p-4 sm:p-6">
                <h3 className="font-bold text-white mb-3 sm:mb-4 text-sm sm:text-base">Market Pulse</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs sm:text-sm">24h Volume</span>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">$2.4B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs sm:text-sm">Market Cap</span>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">$142B</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 text-xs sm:text-sm">OPEC+ Output</span>
                    <span className="text-white font-mono font-bold text-xs sm:text-sm">27.8M bpd</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style>{`
        @keyframes barGrow {
          from {
            transform: scaleY(0);
            transform-origin: bottom;
          }
          to {
            transform: scaleY(1);
            transform-origin: bottom;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
