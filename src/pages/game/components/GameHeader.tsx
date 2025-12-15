interface GameHeaderProps {
  score: number;
  lives: number;
  currentQuestion: number;
  totalQuestions: number;
}

export default function GameHeader({ score, lives, currentQuestion, totalQuestions }: GameHeaderProps) {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-teal-400 to-teal-500 rounded-xl shadow-lg">
                <i className="ri-heart-pulse-line text-2xl text-white"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Canlar</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(3)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-heart-3-fill text-xl ${
                        i < lives ? 'text-rose-500' : 'text-gray-300'
                      }`}
                    ></i>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl shadow-lg">
                <i className="ri-trophy-line text-2xl text-white"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Puan</p>
                <p className="text-xl font-bold text-gray-800">{score}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl shadow-lg">
              <i className="ri-question-line text-2xl text-white"></i>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-500">Soru</p>
              <p className="text-xl font-bold text-gray-800">
                {currentQuestion} / {totalQuestions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
