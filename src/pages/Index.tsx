
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FloatingMessages from '@/components/FloatingMessages';
import FloatingHearts from '@/components/FloatingHearts';
import EscapingButton from '@/components/EscapingButton';
import BackgroundImage from '@/components/BackgroundImage';

type Stage = 'initial' | 'sorry-animation' | 'not-upset' | 'forgiveness-question' | 'thank-you' | 'gallery';

const Index = () => {
  const [currentStage, setCurrentStage] = useState<Stage>('initial');
  const [showFloatingMessages, setShowFloatingMessages] = useState(false);
  const [showHearts, setShowHearts] = useState(false);
  const [messagesStopped, setMessagesStopped] = useState(false);

  // Placeholder images - users can replace these with Sam's photos
  const backgrounds = {
    initial: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop",
    sorry: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=1080&fit=crop",
    notUpset: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop",
    forgiveness: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1920&h=1080&fit=crop",
    thankYou: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1920&h=1080&fit=crop"
  };

  const sorryMessages = [
    "I'm Sorry 😔", "Please forgive me 🙏", "Maaf kar do na 🥺", "Sorry sorry sorry 😭",
    "I'm really sorry 💔", "Please don't be mad 🙏", "Galti ho gayi 😢", "Sorry yaar 😔",
    "Bahut sorry 🥺", "Please smile 😊", "Don't be upset 💕", "I miss your smile 😊",
    "You're the best 💖", "Sorry from heart ❤️", "Forgive me please 🙏", "I care about you 💕"
  ];

  const thankYouMessages = [
    "Thank you so much hehe 😊", "You're amazing! 💖", "Love you yaar! 💕", "Best friend ever! 🌟",
    "Thank you thank you! 🙏", "You're so sweet 😊", "Aww thank you! 💗", "You made my day! ✨",
    "So grateful! 🥰", "You're wonderful! 🌸", "Thank you beautiful! 💖", "Sweetest person! 💕",
    "You're a gem! 💎", "Thank you angel! 👼", "Best human! 🌟", "Love your heart! ❤️"
  ];

  const handleYesUpset = () => {
    setCurrentStage('sorry-animation');
    setShowFloatingMessages(true);
    setMessagesStopped(false);
  };

  const handleNoUpset = () => {
    setCurrentStage('not-upset');
  };

  const handleStopMessages = () => {
    setShowFloatingMessages(false);
    setMessagesStopped(true);
  };

  const handleForgivenessNo = () => {
    // This is handled by the EscapingButton component
  };

  const handleForgivenessYes = () => {
    setCurrentStage('thank-you');
    setShowFloatingMessages(true);
    setShowHearts(true);
    setMessagesStopped(false);
  };

  const handleThankYouStop = () => {
    setShowFloatingMessages(false);
    setCurrentStage('gallery');
  };

  useEffect(() => {
    // Add gentle background music (commented out for now)
    // const audio = new Audio('/path-to-soft-music.mp3');
    // audio.loop = true;
    // audio.volume = 0.3;
    // audio.play().catch(() => {}); // Handle autoplay restrictions
  }, []);

  const renderStage = () => {
    switch (currentStage) {
      case 'initial':
        return (
          <BackgroundImage imageUrl={backgrounds.initial}>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto animate-gentle-sway">
              <h1 className="text-5xl font-dancing text-gradient mb-8 leading-tight">
                Hey Sam, my friend...
              </h1>
              <p className="text-2xl text-gray-700 mb-12 font-medium">
                Are you upset or angry at me?
              </p>
              <div className="space-y-6 sm:space-y-0 sm:space-x-8 sm:flex sm:justify-center">
                <Button 
                  onClick={handleYesUpset}
                  className="bg-red-400 hover:bg-red-500 text-white px-12 py-4 rounded-full text-xl font-semibold btn-hover-effect transition-all duration-300 shadow-lg"
                >
                  Yes 😔
                </Button>
                <Button 
                  onClick={handleNoUpset}
                  className="bg-green-400 hover:bg-green-500 text-white px-12 py-4 rounded-full text-xl font-semibold btn-hover-effect transition-all duration-300 shadow-lg"
                >
                  No 😊
                </Button>
              </div>
            </div>
          </BackgroundImage>
        );

      case 'sorry-animation':
        return (
          <BackgroundImage imageUrl={backgrounds.sorry}>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
              <h1 className="text-6xl font-dancing text-red-500 mb-8 animate-pulse-heart">
                I'm so sorry...
              </h1>
              {messagesStopped && (
                <p className="text-xl text-gray-700 mb-8">
                  Please forgive me, Sam. You mean so much to me 💕
                </p>
              )}
              {showFloatingMessages && !messagesStopped && (
                <Button 
                  onClick={handleStopMessages}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold mt-8 btn-hover-effect"
                >
                  🛑 Stop Apologies
                </Button>
              )}
            </div>
          </BackgroundImage>
        );

      case 'not-upset':
        return (
          <BackgroundImage imageUrl={backgrounds.notUpset}>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto animate-gentle-sway">
              <h1 className="text-4xl font-caveat text-gradient mb-8 leading-relaxed">
                Toh ghussa kijiye na...
              </h1>
              <p className="text-2xl text-pink-600 mb-12 font-medium">
                Aapka ghussa bhi accha lagta hai 💖
              </p>
              <Button 
                onClick={() => setCurrentStage('forgiveness-question')}
                className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-4 rounded-full text-xl font-semibold btn-hover-effect shadow-lg"
              >
                Continue 💕
              </Button>
            </div>
          </BackgroundImage>
        );

      case 'forgiveness-question':
        return (
          <BackgroundImage imageUrl={backgrounds.forgiveness}>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
              <h1 className="text-4xl font-dancing text-gradient mb-8 leading-relaxed">
                Mujhe maaf kar dijiye na...
              </h1>
              <p className="text-2xl text-purple-600 mb-12 font-medium">
                please? 🥺
              </p>
              <div className="space-y-6 sm:space-y-0 sm:space-x-8 sm:flex sm:justify-center">
                <Button 
                  onClick={handleForgivenessYes}
                  className="bg-green-400 hover:bg-green-500 text-white px-12 py-4 rounded-full text-xl font-semibold btn-hover-effect shadow-lg"
                >
                  Yes ✅
                </Button>
                <EscapingButton 
                  onFinalClick={handleForgivenessYes}
                  className="bg-red-400 hover:bg-red-500 text-white px-12 py-4 rounded-full text-xl font-semibold btn-hover-effect shadow-lg"
                >
                  No ❌
                </EscapingButton>
              </div>
            </div>
          </BackgroundImage>
        );

      case 'thank-you':
        return (
          <BackgroundImage imageUrl={backgrounds.thankYou}>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
              <h1 className="text-5xl font-dancing text-gradient mb-8 animate-pulse-heart">
                Thank You! 💖
              </h1>
              <p className="text-2xl text-green-600 mb-8 font-medium">
                You're the most amazing friend! 🌟
              </p>
              {showFloatingMessages && (
                <Button 
                  onClick={handleThankYouStop}
                  className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold btn-hover-effect shadow-lg"
                >
                  Continue to Gallery 📸
                </Button>
              )}
            </div>
          </BackgroundImage>
        );

      case 'gallery':
        return (
          <div className="min-h-screen bg-gradient-sam p-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-dancing text-gradient mb-12">
                Beautiful Memories with Sam 💕
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[backgrounds.initial, backgrounds.notUpset, backgrounds.forgiveness, backgrounds.thankYou].map((img, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300">
                    <img 
                      src={img} 
                      alt={`Memory ${index + 1}`}
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                    <p className="text-lg font-caveat text-gray-700">
                      Beautiful Memory #{index + 1} 💖
                    </p>
                  </div>
                ))}
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h2 className="text-3xl font-dancing text-gradient mb-6">
                  You're Simply Amazing! ✨
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Thank you for being such an incredible friend. Your friendship means everything to me, 
                  and I'm so grateful for your understanding and forgiveness. Here's to many more 
                  beautiful memories together! 💕🌟💖
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {renderStage()}
      
      <FloatingMessages 
        messages={currentStage === 'thank-you' ? thankYouMessages : sorryMessages}
        isActive={showFloatingMessages}
        onStop={currentStage === 'thank-you' ? handleThankYouStop : handleStopMessages}
        colors={currentStage === 'thank-you' ? ['#22C55E', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'] : undefined}
      />
      
      <FloatingHearts isActive={showHearts} />
    </div>
  );
};

export default Index;
