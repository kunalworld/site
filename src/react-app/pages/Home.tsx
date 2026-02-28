import { useState, useEffect } from "react";
import {
  TrendingUp,
  Target,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  ChevronDown,
  BarChart3,
  Coins,
  Trophy,
  CheckCircle2,
  Shield,
  Zap,
} from "lucide-react";

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.classList.add("dark");
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.02]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-background/50 border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="#" className="font-['Space_Grotesk'] text-xl font-bold tracking-tight">
            <span className="text-primary">Kunal</span>
            <span className="text-foreground">World</span>
            <span className="text-muted-foreground text-sm">.in</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("funded")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Get Funded
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
            <TrendingUp className="w-4 h-4 text-amber-500" />
            <span className="text-sm text-amber-500 font-medium">3+ Years in Global Markets</span>
          </div>

          <h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
              Kunal
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Forex & Commodities Trader. Mentor. Helping new traders pass funded account
            challenges and achieve consistent profitability.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
              <span className="text-amber-500 font-semibold">XAU/USD</span> Gold
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
              <span className="text-gray-400 font-semibold">XAG/USD</span> Silver
            </span>
            <span className="px-4 py-2 rounded-full bg-card border border-border text-sm">
              <span className="text-primary font-semibold">EUR/USD</span> Forex
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-all hover:gap-3 shadow-lg shadow-amber-500/20"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-8 py-4 border border-border rounded-full font-medium hover:bg-card transition-colors"
            >
              Get Mentorship
            </button>
          </div>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="absolute bottom-12 animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-500 font-medium text-sm uppercase tracking-widest">
                About Me
              </span>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mt-4 mb-6">
                Mastering the
                <br />
                <span className="text-amber-500">Global Markets</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 3 years of hands-on experience in the global forex and commodities
                markets, I've developed a deep understanding of price action, market psychology,
                and risk management strategies that consistently deliver results.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I specialize in trading major forex pairs like EUR/USD, GBP/USD, and USD/JPY,
                along with precious metals — Gold (XAU/USD) and Silver (XAG/USD). My approach
                combines technical analysis with fundamental insights to identify high-probability
                trade setups.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a mentor, I'm passionate about helping aspiring traders avoid common pitfalls
                and accelerate their journey to consistent profitability.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-500/20 via-card to-amber-600/10 p-1">
                <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-xl shadow-amber-500/30">
                      <span className="font-['Space_Grotesk'] text-5xl font-bold text-white">
                        K
                      </span>
                    </div>
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold mb-2">
                      Kunal
                    </h3>
                    <p className="text-muted-foreground">Trader & Mentor</p>
                    <div className="mt-4 flex justify-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-medium">
                        3+ Years
                      </span>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        Forex
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-600/15 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-medium text-sm uppercase tracking-widest">
              What I Offer
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mt-4">
              Trading Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <SkillCard
              icon={<BarChart3 className="w-8 h-8" />}
              title="Forex Trading"
              description="Expert analysis of major currency pairs including EUR/USD, GBP/USD, USD/JPY with proven strategies for consistent returns."
              gradient="from-cyan-500 to-blue-600"
            />
            <SkillCard
              icon={<Coins className="w-8 h-8" />}
              title="Gold & Silver"
              description="Specialized in precious metals trading — XAU/USD and XAG/USD — leveraging market volatility for profitable opportunities."
              gradient="from-amber-400 to-amber-600"
            />
            <SkillCard
              icon={<Trophy className="w-8 h-8" />}
              title="Challenge Mentorship"
              description="Specialized guidance to help you pass funded account challenges with proper risk management and proven strategies."
              gradient="from-emerald-500 to-teal-600"
            />
          </div>
        </div>
      </section>

      {/* Funded Challenge Section */}
      <section id="funded" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <Trophy className="w-4 h-4 text-emerald-500" />
                <span className="text-sm text-emerald-500 font-medium">Funded Account Specialist</span>
              </div>
              <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-6">
                Pass Your Funded
                <br />
                <span className="text-emerald-500">Challenge</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Dreaming of trading with a funded account? I specialize in helping new traders
                pass prop firm challenges like FTMO, My Forex Funds, and other evaluation programs.
                With my proven strategies and mentorship, you'll have the skills and confidence
                to succeed.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Risk Management Mastery</h4>
                    <p className="text-sm text-muted-foreground">Learn to protect your capital and stay within challenge rules</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Drawdown Control</h4>
                    <p className="text-sm text-muted-foreground">Strategies to avoid breaching daily and maximum drawdown limits</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Profit Target Strategies</h4>
                    <p className="text-sm text-muted-foreground">Systematic approach to hit your profit targets consistently</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-card to-emerald-600/5 border border-emerald-500/20">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-xl shadow-emerald-500/30">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] text-2xl font-bold mb-2">Get Funded</h3>
                  <p className="text-muted-foreground">Your path to prop firm success</p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-card/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Phase 1 Challenge</span>
                      <span className="text-xs text-emerald-500 font-medium">8-10% Target</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-card/50 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Phase 2 Verification</span>
                      <span className="text-xs text-emerald-500 font-medium">5% Target</span>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
                    </div>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      <span className="font-medium text-emerald-500">Funded Account Achieved!</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-600/15 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-32 px-6 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-medium text-sm uppercase tracking-widest">
              Markets I Trade
            </span>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mt-4">
              My Focus Areas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MarketCard symbol="XAU/USD" name="Gold" color="amber" />
            <MarketCard symbol="XAG/USD" name="Silver" color="gray" />
            <MarketCard symbol="EUR/USD" name="Euro/Dollar" color="blue" />
            <MarketCard symbol="GBP/USD" name="Pound/Dollar" color="purple" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-amber-500 font-medium text-sm uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mt-4 mb-6">
            Ready to Get Funded?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Whether you're preparing for your first funded challenge or looking to improve
            your trading consistency, I'm here to guide you every step of the way.
            Let's turn your trading dreams into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href="mailto:hello@kunalworld.in"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-colors shadow-lg shadow-amber-500/20"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KunalWorld.in — All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with <span className="text-primary">♥</span> by Kunal
          </p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
      <div
        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <h3 className="font-['Space_Grotesk'] text-xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-amber-500 hover:bg-amber-500/5 transition-all"
    >
      {icon}
    </a>
  );
}

function MarketCard({ symbol, name, color }: { symbol: string; name: string; color: string }) {
  const colorMap: Record<string, string> = {
    amber: "from-amber-400 to-amber-600 text-amber-500 bg-amber-500/10",
    gray: "from-gray-400 to-gray-500 text-gray-400 bg-gray-500/10",
    blue: "from-blue-400 to-blue-600 text-blue-500 bg-blue-500/10",
    purple: "from-purple-400 to-purple-600 text-purple-500 bg-purple-500/10",
  };

  const colors = colorMap[color] || colorMap.blue;
  const [gradient, textColor] = colors.split(" ");

  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-amber-500/30 transition-all text-center">
      <div
        className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center group-hover:scale-110 transition-transform`}
      >
        <Target className="w-7 h-7 text-white" />
      </div>
      <h3 className={`font-['Space_Grotesk'] text-lg font-bold mb-1 ${textColor}`}>
        {symbol}
      </h3>
      <p className="text-sm text-muted-foreground">{name}</p>
    </div>
  );
}
