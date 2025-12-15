import { useState, useEffect } from 'react';
import GameCanvas from './components/GameCanvas';
import QuestionPanel from './components/QuestionPanel';
import GameHeader from './components/GameHeader';
import GameOver from './components/GameOver';
import { questions } from '../../mocks/questions';

export default function GamePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameState, setGameState] = useState<'playing' | 'gameover'>('playing');
  const [backgroundTheme, setBackgroundTheme] = useState<'neutral' | 'positive' | 'negative'>('neutral');
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);

  useEffect(() => {
    if (lives <= 0) {
      setGameState('gameover');
    }
  }, [lives]);

  const handleAnswer = (isCorrect: boolean) => {
    setAnsweredCorrectly(isCorrect);
    
    if (isCorrect) {
      setScore(score + 10);
      setBackgroundTheme('positive');
    } else {
      setScore(Math.max(0, score - 5));
      setLives(lives - 1);
      setBackgroundTheme('negative');
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1 && lives > (isCorrect ? 0 : 1)) {
        setCurrentQuestion(currentQuestion + 1);
        setBackgroundTheme('neutral');
        setAnsweredCorrectly(null);
      } else if (lives > (isCorrect ? 0 : 1)) {
        setGameState('gameover');
      }
    }, 2000);
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(3);
    setGameState('playing');
    setBackgroundTheme('neutral');
    setAnsweredCorrectly(null);
  };

  if (gameState === 'gameover') {
    return <GameOver score={score} totalQuestions={questions.length} onRestart={restartGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Arka Plan Dekorasyon */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-44 h-44 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Oyun İçeriği */}
      <div className="relative z-10">
        <GameHeader
          score={score}
          lives={lives}
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />
        
        <div className="container mx-auto px-4 pt-32 pb-20">
          <QuestionPanel
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
            disabled={answeredCorrectly !== null}
          />
        </div>
      </div>

      {/* Animasyonlar */}
      <GameCanvas 
        theme={backgroundTheme} 
        questionTheme={questions[currentQuestion].theme}
        answeredCorrectly={answeredCorrectly}
      />
    </div>
  );
}
