import { useState } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  theme: string;
}

interface QuestionPanelProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  disabled: boolean;
}

export default function QuestionPanel({ question, onAnswer, disabled }: QuestionPanelProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);

  const handleOptionClick = (index: number) => {
    if (disabled) return;
    
    setSelectedOption(index);
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
    
    setTimeout(() => {
      setSelectedOption(null);
    }, 2000);
  };

  const getOptionStyle = (index: number) => {
    if (selectedOption === null) {
      if (hoveredOption === index) {
        return 'bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-500 shadow-2xl transform scale-105 -translate-y-1';
      }
      return 'bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 border-gray-200 hover:border-teal-400 hover:shadow-xl transform hover:scale-105 hover:-translate-y-1';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 border-emerald-500 shadow-2xl scale-105 animate-pulse';
    }
    
    if (index === selectedOption && index !== question.correctAnswer) {
      return 'bg-gradient-to-br from-rose-500 via-red-500 to-pink-500 border-red-600 shadow-2xl scale-95';
    }
    
    return 'bg-gray-50 border-gray-200 opacity-40';
  };

  const getOptionTextStyle = (index: number) => {
    if (selectedOption !== null && (index === question.correctAnswer || index === selectedOption)) {
      return 'text-white font-bold';
    }
    if (hoveredOption === index && selectedOption === null) {
      return 'text-teal-700 font-bold';
    }
    return 'text-gray-800 font-semibold';
  };

  return (
    <div className="absolute top-24 left-0 right-0 z-20 flex justify-center items-start">
      <div className="max-w-4xl w-full mx-auto px-8">
        <div className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 backdrop-blur-lg rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 border-4 border-white/60 ring-4 ring-teal-400/30">
          <div className="mb-8 text-center">
            <div className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text mb-2">
              <i className="ri-question-line text-4xl"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 leading-relaxed drop-shadow-sm">
              {question.question}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                onMouseEnter={() => setHoveredOption(index)}
                onMouseLeave={() => setHoveredOption(null)}
                disabled={disabled}
                className={`${getOptionStyle(index)} border-3 rounded-2xl p-7 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                {/* Hover ışık efekti */}
                {hoveredOption === index && selectedOption === null && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                )}
                
                <div className="flex items-center gap-5 relative z-10">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl font-bold text-2xl transition-all duration-300 ${
                    selectedOption !== null && (index === question.correctAnswer || index === selectedOption)
                      ? 'bg-white/30 text-white shadow-lg scale-110'
                      : hoveredOption === index
                      ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg scale-110'
                      : 'bg-gradient-to-br from-teal-100 to-emerald-100 text-teal-700 group-hover:scale-110'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className={`${getOptionTextStyle(index)} text-xl flex-1 text-left transition-all duration-300`}>
                    {option}
                  </span>
                  {selectedOption !== null && index === question.correctAnswer && (
                    <div className="animate-bounce">
                      <i className="ri-check-line text-4xl text-white drop-shadow-lg"></i>
                    </div>
                  )}
                  {selectedOption === index && index !== question.correctAnswer && (
                    <div className="animate-pulse">
                      <i className="ri-close-line text-4xl text-white drop-shadow-lg"></i>
                    </div>
                  )}
                  {hoveredOption === index && selectedOption === null && (
                    <div className="transition-all duration-300">
                      <i className="ri-arrow-right-circle-line text-3xl text-teal-600"></i>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
