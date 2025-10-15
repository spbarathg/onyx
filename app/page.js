'use client'

export default function Home() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen bg-light-bg text-dark-text">
      {/* 1️⃣ HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
        {/* Subtle Moving Background */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(0,0,0,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,0,0,0.15) 0%, transparent 50%)',
            animation: 'drift 20s ease-in-out infinite',
          }}
        />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Logo Text */}
          <div className="mb-8 opacity-0 animate-fade-in">
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-display font-black tracking-[0.08em] text-dark-text relative z-10">
              ONYX
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl font-semibold text-dark-text opacity-0 animate-fade-in-delay-1">
            AI-Powered Solana Memecoin Intelligence
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-mid-gray max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2">
            Precision signals. Zero noise. Real alpha.
          </p>

          {/* Learn More Button */}
          <button
            onClick={() => scrollToSection('about')}
            className="mt-12 px-8 py-4 bg-dark-text text-white font-bold text-lg rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 opacity-0 animate-fade-in-delay-3"
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-mid-gray rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-mid-gray rounded-full" />
          </div>
        </div>
      </section>

      {/* 2️⃣ ABOUT SECTION */}
      <section id="about" className="min-h-screen flex items-center px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Title */}
            <div className="border-l-4 border-dark-text pl-8">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8 text-dark-text">
                ONYX
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-dark-text mb-6">
                Elite Memecoin Intelligence for Solana
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 text-lg md:text-xl text-mid-gray leading-relaxed">
              <p className="font-medium">
                ONYX monitors every Pump.fun launch in real-time, filtering signal from noise with advanced AI.
              </p>
              <p className="font-medium">
                Built for traders who act early — capturing opportunities before they peak.
              </p>
              <p className="font-medium">
                Our algorithms analyze market sentiment, viral potential, and meme dynamics — the factors that actually drive memecoin momentum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ FEATURES SECTION */}
      <section id="features" className="min-h-screen flex items-center px-6 py-24 bg-light-bg">
        <div className="max-w-5xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center text-dark-text">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-dark-text flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-4 text-dark-text">
                High-Conviction Signals
              </h3>
              <p className="text-mid-gray font-medium leading-relaxed">
                Curated alerts for only the highest-potential launches
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-dark-text flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-4 text-dark-text">
                Instant Delivery
              </h3>
              <p className="text-mid-gray font-medium leading-relaxed">
                Real-time alerts with zero lag or spam
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group p-8 rounded-2xl bg-white hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl">
              <div className="w-12 h-12 rounded-full bg-dark-text flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-black mb-4 text-dark-text">
                24/7 Market Intelligence
              </h3>
              <p className="text-mid-gray font-medium leading-relaxed">
                Continuous monitoring and adaptive learning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4️⃣ PAYMENT SECTION */}
      <section id="payment" className="min-h-screen flex items-center justify-center px-6 py-24 bg-white">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-dark-text">
            Get Access
          </h2>
          <p className="text-xl text-mid-gray max-w-xl mx-auto">
            Join elite traders receiving premium memecoin intelligence
          </p>
          
          <a
            href="https://t.me/YourTelegramBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 bg-dark-text text-white font-bold text-xl rounded-full hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            Start Subscription
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-border-gray bg-light-bg">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-mid-gray font-medium">
            © 2025 ONYX. Elite Memecoin Intelligence Platform.
          </p>
        </div>
      </footer>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          25% {
            transform: translateX(-10px) translateY(-10px);
          }
          50% {
            transform: translateX(-20px) translateY(0);
          }
          75% {
            transform: translateX(-10px) translateY(10px);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-fade-in-delay-1 {
          animation: fadeIn 1s ease-out 0.3s forwards;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s forwards;
        }

        .animate-fade-in-delay-3 {
          animation: fadeIn 1s ease-out 0.9s forwards;
        }
      `}</style>
    </main>
  )
}
