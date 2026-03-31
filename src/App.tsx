/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Info, 
  Search, 
  ArrowLeft, 
  CheckCircle2, 
  Heart, 
  Target, 
  Zap, 
  Brain, 
  Shield, 
  Compass, 
  Star, 
  Users,
  Share,
  Copy,
  Check,
  ArrowRight,
  Share2,
  Save,
  Trash2,
  Edit3,
  BookOpen,
  Coffee,
  Globe,
  TrendingUp,
  TrendingDown,
  History
} from 'lucide-react';
import { ENNEAGRAM_TYPES, QUIZ_QUESTIONS } from './constants';
import { Type, SavedResult } from './types';
import EnneagramVisualization from './components/EnneagramVisualization';

const TypeIcon = ({ number, className, size = 24 }: { number: number; className?: string; size?: number }) => {
  const props = { className, size };
  switch (number) {
    case 1: return <CheckCircle2 {...props} />;
    case 2: return <Heart {...props} />;
    case 3: return <Star {...props} />;
    case 4: return <Zap {...props} />;
    case 5: return <Brain {...props} />;
    case 6: return <Shield {...props} />;
    case 7: return <Compass {...props} />;
    case 8: return <Target {...props} />;
    case 9: return <Users {...props} />;
    default: return <Info {...props} />;
  }
};

const EnneagramTriangle = ({ typeNumber }: { typeNumber: number }) => {
  const isTriangleType = [3, 6, 9].includes(typeNumber);
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,5 95,85 5,85" fill="none" stroke="#5A5A40" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="50" cy="5" r={typeNumber === 9 ? 8 : 4} fill={typeNumber === 9 ? "#5A5A40" : "#e5e5e5"} />
        <circle cx="95" cy="85" r={typeNumber === 3 ? 8 : 4} fill={typeNumber === 3 ? "#5A5A40" : "#e5e5e5"} />
        <circle cx="5" cy="85" r={typeNumber === 6 ? 8 : 4} fill={typeNumber === 6 ? "#5A5A40" : "#e5e5e5"} />
      </svg>
      {isTriangleType && (
        <div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-[#5A5A40]">
          {typeNumber}
        </div>
      )}
    </div>
  );
};

const getTypeNameByNumber = (num: number) => {
  return ENNEAGRAM_TYPES.find(t => t.number === num)?.name || '';
};

export default function App() {
  const [view, setView] = useState<'home' | 'quiz' | 'explorer' | 'detail' | 'favorites' | 'journey'>('home');
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [selectedWing, setSelectedWing] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizScores, setQuizScores] = useState<Record<number, number>>({});
  const [quizHistory, setQuizHistory] = useState<Record<number, number>[]>([]);
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem('enneagram_favorites');
    return saved ? JSON.parse(saved) : [];
  });
  const [savedResults, setSavedResults] = useState<SavedResult[]>(() => {
    const saved = localStorage.getItem('enneagram_results');
    return saved ? JSON.parse(saved) : [];
  });
  const [copied, setCopied] = useState(false);
  const [noteText, setNoteText] = useState('');

  const saveResult = (typeNumber: number, wingNumber: number | null) => {
    const newResult: SavedResult = {
      id: Math.random().toString(36).substr(2, 9),
      typeNumber,
      wingNumber,
      date: new Date().toISOString(),
      notes: noteText
    };
    const newResults = [newResult, ...savedResults];
    setSavedResults(newResults);
    localStorage.setItem('enneagram_results', JSON.stringify(newResults));
    setNoteText('');
    setView('journey');
  };

  const deleteResult = (id: string) => {
    const newResults = savedResults.filter(r => r.id !== id);
    setSavedResults(newResults);
    localStorage.setItem('enneagram_results', JSON.stringify(newResults));
  };

  const updateResultNote = (id: string, note: string) => {
    const newResults = savedResults.map(r => r.id === id ? { ...r, notes: note } : r);
    setSavedResults(newResults);
    localStorage.setItem('enneagram_results', JSON.stringify(newResults));
  };

  const toggleFavorite = (typeNumber: number) => {
    setFavorites(prev => {
      const newFavs = prev.includes(typeNumber) 
        ? prev.filter(n => n !== typeNumber)
        : [...prev, typeNumber];
      localStorage.setItem('enneagram_favorites', JSON.stringify(newFavs));
      return newFavs;
    });
  };

  const handleShare = async () => {
    if (!selectedType) return;
    
    const wingText = selectedWing ? ` with a ${selectedWing} wing` : '';
    const shareData = {
      title: `I'm a Type ${selectedType.number}${wingText}: ${selectedType.name}`,
      text: `I just discovered my Enneagram type: ${selectedType.name}${wingText} (${selectedType.tagline}). Discover yours too!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  const handleQuizAnswer = (type: number | null) => {
    setQuizHistory([...quizHistory, quizScores]);
    const newScores = { ...quizScores };
    if (type !== null) {
      newScores[type] = (newScores[type] || 0) + 1;
    }
    setQuizScores(newScores);

    if (quizStep < QUIZ_QUESTIONS.length - 1) {
      setQuizStep(quizStep + 1);
    } else {
      // Find the type with the highest score
      const finalScores = newScores;
      const topTypeNumber = Object.entries(finalScores).length > 0 
        ? Object.entries(finalScores).reduce((a, b) => (a[1] > b[1] ? a : b))[0]
        : "9"; // Default to 9 if no answers were "Yes"
      const typeNum = parseInt(topTypeNumber);
      const resultType = ENNEAGRAM_TYPES.find(t => t.number === typeNum);
      
      if (resultType) {
        // Calculate wing
        const possibleWings = resultType.wings.map(w => w.number);
        const wingScores = possibleWings.map(w => ({ number: w, score: finalScores[w] || 0 }));
        const topWing = wingScores.reduce((a, b) => (a.score >= b.score ? a : b));
        
        setSelectedType(resultType);
        setSelectedWing(topWing.number);
        setView('detail');
      }
    }
  };

  const handleQuizBack = () => {
    if (quizStep > 0) {
      const prevScores = quizHistory[quizHistory.length - 1];
      setQuizScores(prevScores);
      setQuizHistory(quizHistory.slice(0, -1));
      setQuizStep(quizStep - 1);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizScores({});
    setQuizHistory([]);
    setSelectedWing(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f0] text-[#1a1a1a] font-serif selection:bg-[#5A5A40] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-[#1a1a1a]/10 z-50 px-6 py-4 flex justify-between items-center">
        <button 
          onClick={() => setView('home')}
          className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          ENNEAGRAM <span className="italic font-light">Explorer</span>
        </button>
        <div className="flex gap-6 text-sm uppercase tracking-widest font-sans font-semibold">
          <button onClick={() => setView('explorer')} className="hover:text-[#5A5A40] transition-colors">Explorer</button>
          <button onClick={() => setView('favorites')} className="hover:text-[#5A5A40] transition-colors flex items-center gap-1">
            <Heart size={14} className={favorites.length > 0 ? "fill-rose-500 text-rose-500" : ""} />
            Favorites
          </button>
          <button onClick={() => setView('journey')} className="hover:text-[#5A5A40] transition-colors flex items-center gap-1">
            <History size={14} />
            My Journey
          </button>
          <button onClick={() => { setView('quiz'); resetQuiz(); }} className="hover:text-[#5A5A40] transition-colors">Find Your Type</button>
        </div>
      </nav>

      <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <section className="text-center space-y-6 py-12">
                <motion.h1 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative z-10 text-7xl md:text-9xl font-light leading-none tracking-tighter"
                >
                  WHO ARE <br /> <span className="italic serif text-[#5A5A40]">YOU?</span>
                </motion.h1>
                <p className="relative z-10 max-w-xl mx-auto text-lg text-[#1a1a1a]/60 font-sans leading-relaxed">
                  The Enneagram is a powerful map of the human psyche. Discover your unique path to growth and transformation through nine distinct patterns of thinking, feeling, and acting.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                  <button 
                    onClick={() => { setView('quiz'); resetQuiz(); }}
                    className="group bg-[#1a1a1a] text-white px-10 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#5A5A40] transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                  >
                    Find Your Type <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button 
                    onClick={() => setView('explorer')}
                    className="bg-white text-[#1a1a1a] border border-[#1a1a1a]/10 px-10 py-5 rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#f5f5f0] transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                  >
                    Explore Types <Search size={18} />
                  </button>
                </div>
              </section>

              <section className="space-y-12 py-12">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-medium italic">The Nine Personalities</h2>
                  <p className="font-sans text-[#1a1a1a]/60 max-w-2xl mx-auto">
                    Each Enneagram type has its own unique way of seeing the world. Explore the core motivations, fears, and growth paths of all nine types below.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ENNEAGRAM_TYPES.map((type) => (
                    <motion.div 
                      key={type.number}
                      whileHover={{ y: -8, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                      onClick={() => { setSelectedType(type); setView('detail'); }}
                      className="group cursor-pointer bg-white p-8 rounded-[32px] border border-[#1a1a1a]/5 hover:border-[#5A5A40]/20 transition-all shadow-sm flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-[#f5f5f0] flex items-center justify-center text-[#5A5A40] group-hover:bg-[#5A5A40] group-hover:text-white transition-colors">
                          <TypeIcon number={type.number} size={24} />
                        </div>
                        <span className="text-4xl font-light opacity-10 group-hover:opacity-20 transition-opacity">0{type.number}</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 group-hover:text-[#5A5A40] transition-colors">{type.name}</h3>
                      <p className="text-sm text-[#1a1a1a]/80 font-serif mb-2">{type.description.split('.')[0] + '.'}</p>
                      <p className="text-xs text-[#1a1a1a]/40 font-sans mb-6 flex-grow">{type.tagline}</p>
                      
                      <div className="flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        View Details <ChevronRight size={14} />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {view === 'quiz' && (
            <motion.div 
              key="quiz"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5 shadow-2xl space-y-12 relative overflow-hidden">
                {/* Progress Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#f5f5f0]">
                  <motion.div 
                    className="h-full bg-[#5A5A40]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((quizStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-[#5A5A40]">Question {quizStep + 1} of {QUIZ_QUESTIONS.length}</h2>
                    <p className="text-xs font-sans text-[#1a1a1a]/40 font-bold uppercase tracking-widest">Self-Discovery Journey</p>
                  </div>
                  {quizStep > 0 && (
                    <button 
                      onClick={handleQuizBack}
                      className="text-xs font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/40 hover:text-[#1a1a1a] transition-colors flex items-center gap-2"
                    >
                      <ArrowLeft size={14} /> Back
                    </button>
                  )}
                </div>

                <div className="space-y-8">
                  <h3 className="text-4xl font-medium italic leading-tight text-[#1a1a1a]">
                    {QUIZ_QUESTIONS[quizStep].text}
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-4">
                    <button 
                      onClick={() => handleQuizAnswer(QUIZ_QUESTIONS[quizStep].type)}
                      className="group p-8 rounded-3xl border-2 border-[#1a1a1a]/5 hover:border-[#5A5A40] hover:bg-[#5A5A40] transition-all flex justify-between items-center"
                    >
                      <span className="text-2xl font-medium group-hover:text-white transition-colors">Yes, this is me</span>
                      <div className="w-10 h-10 rounded-full bg-[#f5f5f0] group-hover:bg-white/20 flex items-center justify-center transition-colors">
                        <ArrowRight size={20} className="group-hover:text-white transition-colors" />
                      </div>
                    </button>
                    <button 
                      onClick={() => handleQuizAnswer(null)}
                      className="group p-8 rounded-3xl border-2 border-[#1a1a1a]/5 hover:border-[#1a1a1a] transition-all flex justify-between items-center"
                    >
                      <span className="text-2xl font-medium group-hover:text-[#1a1a1a] text-[#1a1a1a]/40 transition-colors">No, not really</span>
                      <div className="w-10 h-10 rounded-full bg-[#f5f5f0] group-hover:bg-[#1a1a1a]/10 flex items-center justify-center transition-colors">
                        <ArrowRight size={20} className="text-[#1a1a1a]/20 group-hover:text-[#1a1a1a] transition-colors" />
                      </div>
                    </button>
                  </div>
                </div>

                <div className="pt-8 border-t border-[#1a1a1a]/5 flex justify-center">
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/30">
                    Be honest with yourself. There are no wrong answers.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'journey' && (
            <motion.div 
              key="journey"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-medium italic">My Enneagram Journey</h2>
                <p className="font-sans text-[#1a1a1a]/60 max-w-xl mx-auto">
                  A record of your discoveries, growth, and personal reflections.
                </p>
              </div>

              {savedResults.length === 0 ? (
                <div className="bg-white p-20 rounded-[48px] border border-[#1a1a1a]/5 text-center space-y-6">
                  <div className="w-20 h-20 bg-[#f5f5f0] rounded-full flex items-center justify-center mx-auto">
                    <BookOpen size={32} className="text-[#1a1a1a]/20" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium">Your journey begins here</h3>
                    <p className="font-sans text-[#1a1a1a]/40">Take the test or explore types to save your first result.</p>
                  </div>
                  <button 
                    onClick={() => { setView('quiz'); resetQuiz(); }}
                    className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#5A5A40] transition-colors"
                  >
                    Take the Test
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {savedResults.map(result => {
                    const type = ENNEAGRAM_TYPES.find(t => t.number === result.typeNumber);
                    if (!type) return null;
                    return (
                      <motion.div
                        key={result.id}
                        layout
                        className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 shadow-sm hover:shadow-md transition-all group"
                      >
                        <div className="flex flex-col md:flex-row gap-8">
                          <div className="md:w-1/3 space-y-6">
                            <div className="flex items-center gap-4">
                              <div 
                                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-md"
                                style={{ backgroundColor: type.color }}
                              >
                                <TypeIcon number={type.number} size={32} />
                              </div>
                              <div>
                                <h3 className="text-2xl font-bold">Type {type.number}</h3>
                                <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/40">
                                  {result.wingNumber ? `with ${result.wingNumber} Wing` : type.tagline}
                                </p>
                              </div>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/30">Discovered On</p>
                              <p className="text-sm font-sans font-medium">{new Date(result.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            </div>
                            <div className="space-y-1">
                              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/30">Type Overview</p>
                              <p className="text-sm font-sans text-[#1a1a1a]/60 line-clamp-2">{type.description}</p>
                            </div>
                            <div className="flex gap-3">
                              <button 
                                onClick={() => { setSelectedType(type); setSelectedWing(result.wingNumber); setView('detail'); }}
                                className="px-4 py-2 bg-[#f5f5f0] hover:bg-[#5A5A40] hover:text-white rounded-xl font-sans font-bold uppercase tracking-widest text-[10px] transition-all"
                              >
                                View Profile
                              </button>
                              <button 
                                onClick={() => deleteResult(result.id)}
                                className="p-2 bg-rose-50 text-rose-500 hover:bg-rose-500 hover:text-white rounded-xl transition-all"
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          <div className="md:w-2/3 bg-[#f5f5f0]/50 p-8 rounded-[32px] border border-[#1a1a1a]/5 space-y-4">
                            <div className="flex items-center justify-between">
                              <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Personal Reflections</h4>
                              <Edit3 size={14} className="text-[#1a1a1a]/20" />
                            </div>
                            <textarea 
                              value={result.notes}
                              onChange={(e) => updateResultNote(result.id, e.target.value)}
                              placeholder="No notes added yet..."
                              className="w-full bg-transparent border-none focus:ring-0 font-serif italic text-lg text-[#1a1a1a]/80 leading-relaxed resize-none min-h-[100px]"
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {view === 'favorites' && (
            <motion.div 
              key="favorites"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-5xl font-medium italic">Your Favorites</h2>
                <p className="font-sans text-[#1a1a1a]/60 max-w-xl mx-auto">
                  The types that resonate most with your journey.
                </p>
              </div>

              {favorites.length === 0 ? (
                <div className="bg-white p-20 rounded-[48px] border border-[#1a1a1a]/5 text-center space-y-6">
                  <div className="w-20 h-20 bg-[#f5f5f0] rounded-full flex items-center justify-center mx-auto">
                    <Heart size={32} className="text-[#1a1a1a]/20" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-medium">No favorites yet</h3>
                    <p className="font-sans text-[#1a1a1a]/40">Explore the Enneagram and save the types you connect with.</p>
                  </div>
                  <button 
                    onClick={() => setView('explorer')}
                    className="px-8 py-4 bg-[#1a1a1a] text-white rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#5A5A40] transition-colors"
                  >
                    Start Exploring
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ENNEAGRAM_TYPES.filter(t => favorites.includes(t.number)).map(type => (
                    <motion.div
                      key={type.number}
                      whileHover={{ y: -8 }}
                      className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 shadow-sm hover:shadow-xl transition-all cursor-pointer group relative"
                      onClick={() => { setSelectedType(type); setView('detail'); }}
                    >
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(type.number); }}
                        className="absolute top-8 right-8 z-10 p-3 rounded-full bg-[#f5f5f0] hover:bg-rose-50 transition-colors group/fav"
                      >
                        <Heart size={18} className="fill-rose-500 text-rose-500" />
                      </button>
                      <div className="space-y-6">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white transition-colors shadow-md"
                            style={{ backgroundColor: type.color }}
                          >
                            <TypeIcon number={type.number} size={32} />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{type.number}. {type.name}</h3>
                            <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#1a1a1a]/40">{type.tagline}</p>
                          </div>
                        </div>
                        <p className="font-sans text-[#1a1a1a]/60 line-clamp-3 leading-relaxed">
                          {type.description}
                        </p>
                        <div className="pt-6 border-t border-[#1a1a1a]/5 flex justify-between items-center">
                          <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5A5A40]">View Profile</span>
                          <ArrowRight size={16} className="text-[#1a1a1a]/20 group-hover:text-[#5A5A40] transition-colors" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {view === 'explorer' && (
            <motion.div
              key="explorer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              <div className="text-center space-y-4">
                <h2 className="text-6xl font-light italic">The Nine Types</h2>
                <p className="font-sans text-[#1a1a1a]/60">Click a type to dive deeper into its core motivations and fears.</p>
              </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ENNEAGRAM_TYPES.map((type) => (
                    <motion.div
                      key={type.number}
                      whileHover={{ y: -5 }}
                      onClick={() => { setSelectedType(type); setView('detail'); }}
                      className="bg-white p-8 rounded-[32px] border border-[#1a1a1a]/5 cursor-pointer hover:shadow-2xl transition-all group relative overflow-hidden"
                    >
                      <div 
                        className="absolute top-0 left-0 w-full h-1 opacity-40"
                        style={{ backgroundColor: type.color }}
                      ></div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); toggleFavorite(type.number); }}
                        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-[#f5f5f0] hover:bg-rose-50 transition-colors group/fav"
                      >
                        <Heart 
                          size={16} 
                          className={`transition-colors ${favorites.includes(type.number) ? "fill-rose-500 text-rose-500" : "text-[#1a1a1a]/20 group-hover/fav:text-rose-400"}`} 
                        />
                      </button>
                      <div className="flex justify-between items-center mb-6">
                        <div 
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm transition-colors"
                          style={{ backgroundColor: type.color }}
                        >
                          <TypeIcon number={type.number} size={24} />
                        </div>
                        <span className="text-4xl font-light opacity-10">0{type.number}</span>
                      </div>
                      <h3 className="text-2xl font-semibold mb-1">{type.name}</h3>
                      <p className="text-sm font-serif text-[#1a1a1a]/80 mb-2">{type.description.split('.')[0] + '.'}</p>
                      <p className="text-xs font-sans text-[#1a1a1a]/40 uppercase tracking-widest font-bold mb-4">{type.tagline}</p>
                      <div className="flex flex-wrap gap-2">
                        {type.traits.slice(0, 2).map(trait => (
                          <span 
                            key={trait} 
                            className="text-[10px] uppercase tracking-wider font-sans font-bold px-2 py-1 rounded-md"
                            style={{ backgroundColor: `${type.color}15`, color: type.color }}
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
            </motion.div>
          )}

          {view === 'detail' && selectedType && (
            <motion.div
              key="detail"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="max-w-4xl mx-auto space-y-16 py-8"
            >
              <div className="relative h-[400px] w-full rounded-[60px] overflow-hidden shadow-2xl group">
                <img 
                  src={selectedType.headerImage} 
                  alt={selectedType.name}
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-6">
                      <div 
                        className="w-24 h-24 rounded-3xl flex items-center justify-center text-white shadow-2xl backdrop-blur-md"
                        style={{ backgroundColor: `${selectedType.color}CC` }}
                      >
                        <TypeIcon number={selectedType.number} size={48} />
                      </div>
                      <div className="space-y-1 text-white">
                        <h2 className="text-7xl font-bold tracking-tighter">{selectedType.number}. {selectedType.name}</h2>
                        <p className="text-sm font-sans font-bold uppercase tracking-[0.4em] opacity-80">{selectedType.tagline}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => toggleFavorite(selectedType.number)}
                      className={`p-5 rounded-full border transition-all flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-xs backdrop-blur-md ${favorites.includes(selectedType.number) ? 'bg-rose-500/90 border-rose-400 text-white' : 'bg-white/20 border-white/20 text-white hover:bg-white/30'}`}
                    >
                      <Heart size={20} className={favorites.includes(selectedType.number) ? "fill-white" : ""} />
                      {favorites.includes(selectedType.number) ? 'Favorited' : 'Favorite'}
                    </button>
                    <button 
                      onClick={handleShare}
                      className="p-5 rounded-full bg-white text-[#1a1a1a] hover:bg-[#f5f5f0] transition-all flex items-center gap-2 font-sans font-bold uppercase tracking-widest text-xs shadow-xl"
                    >
                      {copied ? <Check size={20} /> : <Share2 size={20} />}
                      {copied ? 'Copied!' : 'Share Profile'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Save Result Section */}
              <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#5A5A40]/10 text-[#5A5A40] flex items-center justify-center">
                    <Save size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium italic">Save to Your Journey</h3>
                    <p className="text-sm font-sans text-[#1a1a1a]/40">Keep track of your results and add personal reflections.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <textarea 
                    placeholder="Add your notes or reflections here..."
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    className="w-full h-32 p-6 rounded-3xl bg-[#f5f5f0]/50 border border-[#1a1a1a]/5 font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#5A5A40]/20 transition-all resize-none"
                  />
                  <button 
                    onClick={() => saveResult(selectedType.number, selectedWing)}
                    className="w-full py-4 bg-[#1a1a1a] text-white rounded-full font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#5A5A40] transition-all flex items-center justify-center gap-2"
                  >
                    <Save size={16} />
                    Save Result & Notes
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[40px] space-y-4 border border-[#1a1a1a]/5">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-[#5A5A40]">Core Fear</h4>
                  <p className="text-2xl">{selectedType.coreFear}</p>
                </div>
                <div className="bg-[#5A5A40] text-white p-10 rounded-[40px] space-y-4">
                  <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] opacity-60">Core Desire</h4>
                  <p className="text-2xl">{selectedType.coreDesire}</p>
                </div>
              </div>

              {/* Visualization Section */}
              <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 shadow-sm space-y-6">
                <h3 className="text-3xl font-medium italic">Enneagram Dynamics</h3>
                <EnneagramVisualization type={selectedType} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-sans">
                  <div className="p-4 bg-emerald-50 rounded-2xl text-emerald-800">
                    <span className="font-bold uppercase tracking-widest text-[10px]">Integration (Redemption):</span> {selectedType.relationships.integration.description}
                  </div>
                  <div className="p-4 bg-rose-50 rounded-2xl text-rose-800">
                    <span className="font-bold uppercase tracking-widest text-[10px]">Disintegration (Stress):</span> {selectedType.relationships.disintegration.description}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white overflow-hidden rounded-[32px] border border-[#1a1a1a]/5 group hover:border-[#5A5A40]/20 transition-all duration-500 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={selectedType.animalImage} 
                      alt={selectedType.animal}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                      <Compass size={14} className="text-[#5A5A40]" />
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60">Spirit Animal</h4>
                    <p className="text-lg font-medium leading-tight">{selectedType.animal}</p>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[32px] border border-[#1a1a1a]/5 group hover:border-[#5A5A40]/20 transition-all duration-500 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={selectedType.symbolImage} 
                      alt={selectedType.symbol}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                      <Zap size={14} className="text-[#5A5A40]" />
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60">Sacred Symbol</h4>
                    <p className="text-lg font-medium leading-tight">{selectedType.symbol}</p>
                  </div>
                </div>
                <div className="bg-white overflow-hidden rounded-[32px] border border-[#1a1a1a]/5 group hover:border-[#5A5A40]/20 transition-all duration-500 flex flex-col">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={selectedType.saintImage} 
                      alt={selectedType.saint}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-xl shadow-sm">
                      <Heart size={14} className="text-[#5A5A40]" />
                    </div>
                  </div>
                  <div className="p-6 space-y-2">
                    <h4 className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60">Associated Saint</h4>
                    <p className="text-lg font-medium leading-tight">{selectedType.saint}</p>
                    <p className="text-[10px] font-sans text-[#1a1a1a]/40 italic">A spiritual guide reflecting the virtues of this path.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-medium italic">Key Characteristics</h3>
                  <div className="h-[1px] flex-grow mx-8 bg-[#1a1a1a]/10" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {selectedType.traits.map(trait => (
                    <div 
                      key={trait} 
                      className="bg-white px-6 py-6 rounded-[24px] border border-[#1a1a1a]/5 text-center group hover:border-[#5A5A40]/30 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#f5f5f0] mx-auto mb-4 flex items-center justify-center text-[#5A5A40]/40 group-hover:bg-[#5A5A40] group-hover:text-white transition-colors">
                        <Star size={14} />
                      </div>
                      <span className="font-sans font-bold uppercase tracking-[0.15em] text-[10px] text-[#1a1a1a]/60 group-hover:text-[#1a1a1a] transition-colors">
                        {trait}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-medium italic flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                    Strengths
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedType.strengths.map(strength => (
                      <div key={strength} className="bg-white px-6 py-4 rounded-2xl border border-[#1a1a1a]/5 flex items-center gap-4 group hover:border-emerald-200 transition-all hover:shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={14} />
                        </div>
                        <span className="font-sans font-medium text-[#1a1a1a]/80 text-sm">{strength}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-3xl font-medium italic flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
                    </span>
                    Weaknesses
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedType.weaknesses.map(weakness => (
                      <div key={weakness} className="bg-white px-6 py-4 rounded-2xl border border-[#1a1a1a]/5 flex items-center gap-4 group hover:border-orange-200 transition-all hover:shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                          <Info size={14} />
                        </div>
                        <span className="font-sans font-medium text-[#1a1a1a]/80 text-sm">{weakness}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-medium italic">Life & Relationships</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Users size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Family Life</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.familyLife}
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                        <Heart size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Intimacy</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.intimacy}
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center">
                        <Zap size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Sexuality</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.sexuality}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                        <Coffee size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Lifestyle</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.lifestyle}
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                        <Compass size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Spiritual Life</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.spiritualLife}
                      </p>
                    </div>
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                        <Globe size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Social Life</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.socialLife}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mt-8">
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-4">
                      <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                        <TrendingUp size={20} />
                      </div>
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Fortunes & Vocation</h4>
                      <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                        {selectedType.fortunes}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#5A5A40] text-white p-10 rounded-[40px] space-y-4 mt-8">
                    <h4 className="text-xs font-sans font-bold uppercase tracking-widest opacity-60">The Path to Happiness</h4>
                    <p className="text-xl italic font-serif leading-relaxed">
                      "{selectedType.happinessPath}"
                    </p>
                  </div>

                  {/* Growth & Stress Paths */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div className="p-8 rounded-[32px] bg-emerald-50 border border-emerald-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600">
                          <TrendingUp size={20} />
                        </div>
                        <h3 className="text-xl font-medium italic text-emerald-900">Path of Integration</h3>
                      </div>
                      <p className="text-sm text-emerald-800/80 leading-relaxed mb-4">
                        Moving toward Type {selectedType.relationships.integration.type} in growth
                      </p>
                      <p className="text-emerald-900 font-medium">
                        {selectedType.relationships.integration.description}
                      </p>
                    </div>

                    <div className="p-8 rounded-[32px] bg-rose-50 border border-rose-100">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-xl bg-rose-100 text-rose-600">
                          <TrendingDown size={20} />
                        </div>
                        <h3 className="text-xl font-medium italic text-rose-900">Path of Disintegration</h3>
                      </div>
                      <p className="text-sm text-rose-800/80 leading-relaxed mb-4">
                        Moving toward Type {selectedType.relationships.disintegration.type} under stress
                      </p>
                      <p className="text-rose-900 font-medium">
                        {selectedType.relationships.disintegration.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-medium italic">Famous Examples</h3>
                      <div className="h-[1px] flex-grow mx-8 bg-[#1a1a1a]/10" />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {selectedType.famousPeople.map(person => (
                        <div key={person} className="bg-white px-6 py-3 rounded-2xl border border-[#1a1a1a]/5 font-sans font-bold text-[10px] uppercase tracking-widest text-[#1a1a1a]/50 hover:border-[#5A5A40]/30 hover:text-[#5A5A40] transition-all cursor-default">
                          {person}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-medium italic">Spiritual Journey</h3>
                    <p className="font-sans text-[#1a1a1a]/60">A path toward inner peace and divine connection.</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">The Enneagram Prayer</h4>
                        <p className="text-2xl italic font-serif text-[#1a1a1a]/80 leading-relaxed">
                          "{selectedType.prayer}"
                        </p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Redemption & Grace</h4>
                        <p className="font-sans text-[#1a1a1a]/70 leading-relaxed">
                          {selectedType.redemption}
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-6 bg-[#f5f5f0] p-8 rounded-[32px]">
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]">Biblical Foundation</h4>
                      <div className="space-y-4">
                        <p className="text-xl font-serif italic text-[#5A5A40]">
                          {selectedType.bibleVerse}
                        </p>
                        <p className="text-sm font-sans text-[#1a1a1a]/60 leading-relaxed">
                          This verse reflects the core struggle and the ultimate invitation for Type {selectedType.number}s to find wholeness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5 space-y-8 mb-8">
                  <h3 className="text-3xl font-medium italic">Growth & Development</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {selectedType.relationships.growthAdvice.map((advice, idx) => (
                      <div key={idx} className="flex gap-4 p-6 rounded-3xl bg-[#f5f5f0]/50 border border-[#1a1a1a]/5">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#5A5A40] text-white flex items-center justify-center font-bold text-xs">
                          {idx + 1}
                        </div>
                        <p className="font-sans text-[#1a1a1a]/80 text-sm leading-relaxed">
                          {advice}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-[#1a1a1a] text-white p-12 rounded-[48px] space-y-6">
                    <h3 className="text-3xl font-medium italic">Path to Happiness</h3>
                    <p className="text-lg leading-relaxed opacity-80">
                      {selectedType.happinessPath}
                    </p>
                  </div>
                  <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5 space-y-6">
                    <h3 className="text-3xl font-medium italic">Character Transformation</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {selectedType.characterChange.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="w-2 h-2 rounded-full bg-[#5A5A40]"></div>
                          <span className="font-sans font-medium text-[#1a1a1a]/80">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5 space-y-6">
                <h3 className="text-3xl font-medium italic">Key Motivations</h3>
                <p className="text-lg leading-relaxed font-sans text-[#1a1a1a]/70">
                  {selectedType.keyMotivations}
                </p>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-medium italic">Deep Dive</h3>
                <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5">
                  <p className="text-xl leading-relaxed font-serif text-[#1a1a1a]/80 first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
                    {selectedType.longDescription}
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-medium italic">The Wings</h3>
                <p className="font-sans text-[#1a1a1a]/60 max-w-2xl">
                  Wings are the Enneagram types adjacent to your primary type. They "flavor" your personality, adding unique nuances to how you express your core type.
                </p>
                <div className="grid grid-cols-1 gap-8">
                  {selectedType.wings.map(wing => (
                    <div 
                      key={wing.number}
                      className={`p-10 rounded-[40px] border transition-all ${selectedWing === wing.number ? 'bg-[#5A5A40] text-white border-transparent shadow-xl' : 'bg-white border-[#1a1a1a]/5'}`}
                    >
                      <div className="flex justify-between items-center mb-6">
                        <div className="space-y-1">
                          <h4 className={`text-3xl font-bold flex items-center gap-2 ${selectedWing === wing.number ? 'text-white' : 'text-[#5A5A40]'}`}>
                            {wing.number} <ArrowRight size={24} /> {selectedType.number} : {wing.name}
                          </h4>
                          <p className={`font-sans font-semibold uppercase tracking-widest text-xs ${selectedWing === wing.number ? 'text-white/60' : 'text-[#1a1a1a]/40'}`}>
                            {wing.description}
                          </p>
                        </div>
                        {selectedWing === wing.number && (
                          <span className="text-[10px] uppercase tracking-widest font-sans font-bold px-3 py-1.5 bg-white/20 rounded-full border border-white/20">Your Primary Wing</span>
                        )}
                      </div>
                      <div className="space-y-6">
                        <p className={`font-serif text-lg leading-relaxed ${selectedWing === wing.number ? 'text-white/90' : 'text-[#1a1a1a]/70'}`}>
                          {wing.longDescription}
                        </p>
                        
                        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-3xl ${selectedWing === wing.number ? 'bg-white/10 border border-white/20' : 'bg-[#5A5A40]/5 border border-[#5A5A40]/10'}`}>
                          <div className="space-y-2">
                            <h5 className={`text-[10px] uppercase tracking-[0.2em] font-bold ${selectedWing === wing.number ? 'text-white/60' : 'text-[#5A5A40]/60'}`}>Primary Motivation</h5>
                            <p className="text-sm font-sans font-medium italic">"{wing.keyMotivation}"</p>
                          </div>
                          <div className="space-y-2">
                            <h5 className={`text-[10px] uppercase tracking-[0.2em] font-bold ${selectedWing === wing.number ? 'text-white/60' : 'text-[#5A5A40]/60'}`}>Behavioral Example</h5>
                            <p className="text-sm font-sans leading-relaxed">{wing.behaviorExample}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-16">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-medium italic">Dynamics & Relationships</h3>
                    <p className="font-sans text-[#1a1a1a]/60 max-w-2xl">
                      Understanding how your type interacts with the world and others is key to growth. The Enneagram shows us our paths for development and how we connect with different personalities.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                        <TypeIcon number={selectedType.relationships.integration.type} size={120} />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                          <TypeIcon number={selectedType.relationships.integration.type} size={24} />
                        </div>
                        <div>
                          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-emerald-600">The Path of Growth</h4>
                          <p className="text-xl font-semibold">Integration to Type {selectedType.relationships.integration.type}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm font-sans font-bold text-emerald-600/60 uppercase tracking-widest">
                          Becoming {getTypeNameByNumber(selectedType.relationships.integration.type)}
                        </p>
                        <p className="font-sans leading-relaxed text-[#1a1a1a]/70">
                          {selectedType.relationships.integration.description}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-[#1a1a1a]/5 space-y-6 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                        <TypeIcon number={selectedType.relationships.disintegration.type} size={120} />
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center text-rose-600">
                          <TypeIcon number={selectedType.relationships.disintegration.type} size={24} />
                        </div>
                        <div>
                          <h4 className="text-xs font-sans font-bold uppercase tracking-[0.2em] text-rose-600">The Path of Stress</h4>
                          <p className="text-xl font-semibold">Disintegration to Type {selectedType.relationships.disintegration.type}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p className="text-sm font-sans font-bold text-rose-600/60 uppercase tracking-widest">
                          Shadow of {getTypeNameByNumber(selectedType.relationships.disintegration.type)}
                        </p>
                        <p className="font-sans leading-relaxed text-[#1a1a1a]/70">
                          {selectedType.relationships.disintegration.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#5A5A40] text-white p-12 rounded-[48px] space-y-8 relative overflow-hidden">
                  <div className="absolute -right-20 -bottom-20 opacity-10">
                    <Users size={300} />
                  </div>
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-3xl font-medium italic">Interpersonal Compatibility</h3>
                    <p className="text-xl leading-relaxed font-serif opacity-90 max-w-3xl">
                      "{selectedType.relationships.compatibility}"
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    <div className="space-y-2">
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest opacity-50">Communication Style</h4>
                      <p className="font-sans text-sm opacity-80">{selectedType.relationships.communicationStyle}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest opacity-50">In Conflict</h4>
                      <p className="font-sans text-sm opacity-80">{selectedType.relationships.conflictStyle}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xs font-sans font-bold uppercase tracking-widest opacity-50">Support Needs</h4>
                      <p className="font-sans text-sm opacity-80">{selectedType.relationships.supportNeeds}</p>
                    </div>
                  </div>
                  <p className="text-xs font-sans opacity-40 italic relative z-10">
                    Note: The Enneagram teaches that any two healthy types can have a successful relationship. Compatibility is about how different energies interact and support one another's growth.
                  </p>
                </div>

                {/* New Dynamics Section */}
                <div className="bg-white p-12 rounded-[48px] border border-[#1a1a1a]/5 space-y-8">
                  <h3 className="text-3xl font-medium italic">Enneagram Dynamics: Redemption & Avoidance</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center justify-center space-y-4">
                      <EnneagramTriangle typeNumber={selectedType.number} />
                      <p className="text-xs font-sans font-bold uppercase tracking-widest text-[#5A5A40]/60 text-center">Your Position on the Triangle</p>
                    </div>
                    <div className="md:col-span-2 space-y-8">
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-emerald-700 flex items-center gap-2">
                          <TrendingUp size={16} /> Redemption: Type {selectedType.relationships.redemptionType} ({getTypeNameByNumber(selectedType.relationships.redemptionType)})
                        </h4>
                        <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                          {selectedType.relationships.redemptionExplanation}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-sm font-bold text-rose-700 flex items-center gap-2">
                          <TrendingDown size={16} /> Avoidance: Type {selectedType.relationships.avoidType} ({getTypeNameByNumber(selectedType.relationships.avoidType)})
                        </h4>
                        <p className="font-sans text-[#1a1a1a]/70 leading-relaxed text-sm">
                          {selectedType.relationships.avoidExplanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-medium italic">Integration & Growth</h3>
                    <p className="font-sans text-[#1a1a1a]/60 max-w-2xl">
                      Growth on the Enneagram involves moving toward your integration point and adopting the healthy traits of that type. Here is how you can develop:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold">1</div>
                        <h4 className="text-lg font-medium">The Integration Point</h4>
                      </div>
                      <div className="bg-white p-8 rounded-3xl border border-[#1a1a1a]/5 space-y-4">
                        <div className="flex items-center gap-3 text-emerald-600">
                          <TypeIcon number={selectedType.relationships.integration.type} size={20} />
                          <span className="font-bold uppercase tracking-widest text-xs">Type {selectedType.relationships.integration.type}</span>
                        </div>
                        <p className="font-sans leading-relaxed text-[#1a1a1a]/80">
                          By integrating the healthy qualities of <strong>{getTypeNameByNumber(selectedType.relationships.integration.type)}</strong>, you move toward greater wholeness and balance.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center font-bold">2</div>
                        <h4 className="text-lg font-medium">Actionable Growth Advice</h4>
                      </div>
                      <div className="space-y-4">
                        {selectedType.relationships.growthAdvice.map((advice, idx) => (
                          <div key={idx} className="flex gap-4 group">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/20 group-hover:bg-emerald-500 transition-colors shrink-0" />
                            <p className="font-sans text-[#1a1a1a]/70 leading-relaxed">{advice}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1a1a1a]/10 py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-6">
            <div className="w-full max-w-md overflow-hidden rounded-2xl border border-[#1a1a1a]/5 shadow-sm bg-[#1a1a1a]/5 aspect-[4/3] flex items-center justify-center relative group">
              <img 
                src="https://images.unsplash.com/photo-1582213726893-edc10ff0b1a1?auto=format&fit=crop&w=800&q=80" 
                alt="CPE Team Jan 2026 - Mater Hospital Dublin" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 text-white text-[10px] font-bold uppercase tracking-widest pointer-events-none">
                CPE Team: Mater Hospital, Dublin
              </div>
            </div>
            <div>
              <h4 className="font-bold tracking-tight mb-2 uppercase">ENNEAGRAM EXPLORER</h4>
              <p className="text-sm font-sans text-[#1a1a1a]/40">A tool for self-discovery and growth.</p>
              <p className="text-xs font-sans text-[#1a1a1a]/60 mt-4 uppercase tracking-widest font-bold">
                Created by Gijo Thomas Rajan <br />
                <span className="opacity-60 text-[10px] mt-1 block">On behalf of CPE team Jan 2026: Mater Hospital, Dublin</span>
              </p>
            </div>
          </div>
          <div className="flex gap-8 text-xs font-sans font-bold uppercase tracking-widest opacity-40">
            <span>© 2026</span>
            <button className="hover:opacity-100 transition-opacity">Privacy</button>
            <button className="hover:opacity-100 transition-opacity">Terms</button>
          </div>
        </div>
      </footer>
    </div>
  );
}
