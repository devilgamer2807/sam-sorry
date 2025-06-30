
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

  // Sam's photos for backgrounds and gallery
  const samPhotos = {
    initial: "/lovable-uploads/99545697-0603-4534-a30e-41928b90afc4.png", // Purple sparkly top
    sorry: "/lovable-uploads/4f43acb3-26c0-4d3f-9b13-2182f9797e69.png", // White polo shirt
    notUpset: "/lovable-uploads/c5fcde22-93fc-4ac5-bffd-bfac4b3e3f54.png", // Dark floral top
    forgiveness: "/lovable-uploads/a837ba2a-7e92-46bd-aff0-6c171ee96cf7.png", // Casual white top
    thankYou: "/lovable-uploads/c1adc657-1c48-4159-8fec-5d249e9f1198.png", // Outdoor rooftop photo
    gallery: [
      "/lovable-uploads/99545697-0603-4534-a30e-41928b90afc4.png",
      "/lovable-uploads/4f43acb3-26c0-4d3f-9b13-2182f9797e69.png",
      "/lovable-uploads/c5fcde22-93fc-4ac5-bffd-bfac4b3e3f54.png",
      "/lovable-uploads/d9bed0c6-773b-4d07-af0e-c06a4ccb0730.png", // Black and white with hearts
      "/lovable-uploads/a837ba2a-7e92-46bd-aff0-6c171ee96cf7.png",
      "/lovable-uploads/6c294c89-cf50-444a-93dc-2d9aff1fdae8.png", // Black and white portrait
      "/lovable-uploads/c1adc657-1c48-4159-8fec-5d249e9f1198.png",
      "/lovable-uploads/ad12de82-b74b-4688-8753-dfec1eaf62dd.png", // Dark setting with hand gesture
      "/lovable-uploads/483ae6c9-2b91-423f-b05a-52c1ffd20174.png", // Black top smiling
      "/lovable-uploads/abbc57cf-5430-4e54-9b3a-376b5737bd56.png", // Purple striped sweater
      "/lovable-uploads/23df8315-cc16-43ed-8bd1-c4896773eff7.png", // New blue dress
      "/lovable-uploads/fe665ac5-2f6b-45af-804a-423afbaba359.png", // New yellow outfit
      "/lovable-uploads/a9edce17-feaa-4932-a4d0-c7be2378c714.png", // New white outfit with graffiti
      "/lovable-uploads/6f2b8d7f-a385-443b-b037-31f26f1504c6.png", // New yellow formal outfit
      "/lovable-uploads/a085c794-77e3-4aaf-ba6d-f047147716d6.png", // New black casual outfit
      "/lovable-uploads/a5d054ba-f6fd-4461-b6f3-cdca3867a885.png", // New checkered dress
      "/lovable-uploads/20f4a55c-bb68-40a2-97ef-d06a6a5f4dde.png", // New purple sweater
      "/lovable-uploads/86997a5b-f36e-43b4-ad69-cde39f05dede.png" // New black and white artistic
    ]
  };

  const sorryMessages = [
    "I'm Sorry 😔", "Please forgive me 🙏", "Maaf kar do na 🥺", "Sorry sorry sorry 😭",
    "I'm really sorry 💔", "Please don't be mad 🙏", "Galti ho gayi 😢", "Sorry yaar 😔",
    "Bahut sorry 🥺", "Please smile 😊", "Don't be upset 💕",
    "You're the best 💖", "Sorry from heart ❤️", "Forgive me please 🙏"
  ];

  // Generate 150 "bas bas jayda mushkariye mat haha!" messages
  const bashBashMessages = Array(150).fill("bas bas jayda mushkariye mat haha!");

  const thankYouMessages = [
    "Thank you so much hehe 😊", "You're amazing! 💖", "Love you yaar",
    "Thank you thank you! 🙏", "Aww thank you! 💗",
    "So grateful! 🥰", "You're wonderful! 🌸", "Thank you beautiful! 💖", "Sweetest person",
    "You're a gem! 💎",
    ...bashBashMessages
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

  const handleContinueAfterSorry = () => {
    setCurrentStage('forgiveness-question');
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
          <BackgroundImage imageUrl={samPhotos.initial}>
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
          <BackgroundImage imageUrl={samPhotos.sorry}>
            <div className="text-center bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto">
              <h1 className="text-6xl font-dancing text-red-500 mb-8 animate-pulse-heart">
                I'm so sorry...
              </h1>
              {messagesStopped && (
                <>
                  <p className="text-xl text-gray-700 mb-8">
                    Please forgive me, Sam.
                  </p>
                  <Button 
                    onClick={handleContinueAfterSorry}
                    className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-12 py-4 rounded-full text-xl font-semibold btn-hover-effect shadow-lg"
                  >
                    Continue 💕
                  </Button>
                </>
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
          <BackgroundImage imageUrl={samPhotos.notUpset}>
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
          <BackgroundImage imageUrl={samPhotos.forgiveness}>
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
          <BackgroundImage imageUrl={samPhotos.thankYou}>
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
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-5xl font-dancing text-gradient mb-12">
                Beautiful Memories with Sam 💕
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {samPhotos.gallery.map((img, index) => (
                  <div key={index} className="bg-white rounded-2xl p-4 shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                    <img 
                      src={img} 
                      alt={`Beautiful memory with Sam ${index + 1}`}
                      className="w-full h-80 object-cover rounded-xl mb-4"
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
