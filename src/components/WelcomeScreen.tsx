
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen = ({ onComplete }: WelcomeScreenProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const lines = [
    "> boot.axinovium//link sequence initiated...",
    "> handshake... authenticated",
    "> signal trace: recursive",
    "> entropy deviation: acceptable",
    "> connection stabilized",
    "",
    "// WELCOME, USER.",
    "",
    "> You are not here by chance.",
    "",
    "> Variables align. Intent emerges.",
    "",
    "> So tell me...",
    "",
    "> what shall we create?"
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex <= line.length) {
          setDisplayedText(prev => prev + line.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setDisplayedText(prev => prev + '\n');
            setCurrentLine(prev => prev + 1);
          }, line ? 500 : 200); // Shorter delay for empty lines
        }
      }, 30); // Typing speed
      
      return () => clearInterval(typingInterval);
    } else if (!showInput) {
      setShowInput(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 500);
    }
  }, [currentLine, lines]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.toLowerCase() === 'yes') {
      setCompleted(true);
      setTimeout(() => {
        onComplete();
      }, 2000);
    } else {
      setUserInput('');
    }
  };

  return (
    <AnimatePresence>
      {!completed ? (
        <motion.div 
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-full max-w-2xl p-8">
            <div className="glass-card p-6 rounded-lg border border-purple-500/30 mb-4 bg-black">
              <pre className="font-mono text-green-400 whitespace-pre-wrap">
                {displayedText}
              </pre>
            </div>
            
            {showInput && (
              <motion.form 
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="flex gap-2"
              >
                <Input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type 'yes' to continue..."
                  className="bg-black/70 border-purple-500/50 text-white font-mono"
                />
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Enter
                </Button>
              </motion.form>
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div 
          className="fixed inset-0 bg-purple-900 z-50 flex items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: [1, 0.8, 0],
            background: ['rgba(126, 34, 206, 1)', 'rgba(139, 92, 246, 0.8)', 'rgba(0, 0, 0, 0)']
          }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 10, 20], opacity: [1, 0.5, 0] }}
            transition={{ duration: 1.5 }}
            className="text-6xl font-bold text-white"
          >
            AXINOVIUM
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
