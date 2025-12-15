
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 flex items-center justify-center">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/67e0349b26e5d910b0f2d1c3e9718742.jpeg" 
                alt="Hijyen Macerası Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Hijyen Macerası
          </h1>

          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Eğlenceli sorularla hijyen kurallarını öğren ve sağlıklı yaşam alışkanlıkları kazan!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button
              onClick={() => navigate('/game')}
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-2xl py-6 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-circle-line mr-3"></i>
              Oyuna Başla
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-32">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl">
                <i className="ri-question-line text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">10 Soru</h3>
              <p className="text-gray-600 leading-relaxed">Hijyen konusunda bilgini test et</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-rose-400 to-red-500 rounded-2xl">
                <i className="ri-heart-3-line text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">3 Can</h3>
              <p className="text-gray-600 leading-relaxed">Dikkatli ol, canlarını koru</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl">
                <i className="ri-trophy-line text-4xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Puan Kazan</h3>
              <p className="text-gray-600 leading-relaxed">Doğru cevaplarla yüksek skor yap</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center max-w-5xl mx-auto">
            <div className="w-full h-40 flex items-center justify-center p-4">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/1b54d5e3e3679f2c673e8c648eb8802b.png" 
                alt="Milli Eğitim Bakanlığı" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-full h-40 flex items-center justify-center p-4">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/d95510119b0990bfb675058c43ba72c0.png" 
                alt="Kurum Logosu" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-full h-40 flex items-center justify-center p-4">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/19180769e02e14b84b17a3d6e35ab0b5.png" 
                alt="Kurum Logosu" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="w-full h-40 flex items-center justify-center p-4">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/67e0349b26e5d910b0f2d1c3e9718742.jpeg" 
                alt="Kurum Logosu" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-teal-400 to-emerald-500 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white text-sm">
            © 2025 Hijyen Macerası • Sağlıklı yaşam için eğlenceli öğrenme
          </p>
        </div>
      </div>
    </div>
  );
}
