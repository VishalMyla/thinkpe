import { useState } from 'react';

interface FAQItemProps {
  number: string;
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ number, question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border border-black rounded-lg mb-4 overflow-hidden">
      <div 
        className="flex justify-between items-center p-6 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center">
          <span className="text-xl font-medium mr-4">{number}</span>
          <h3 className="text-xl font-medium">{question}</h3>
        </div>
        <button 
          className={`w-10 h-10 flex items-center justify-center rounded-lg ${isOpen ? 'bg-[#3adc8e]' : 'bg-black text-white'}`}
        >
          {isOpen ? (
            <span className="text-2xl font-bold">−</span>
          ) : (
            <span className="text-2xl font-bold">+</span>
          )}
        </button>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};

interface FAQData {
  id: number;
  number: string;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);
  
  const faqData: FAQData[] = [
    {
      id: 1,
      number: '01',
      question: 'What is Trak?',
      answer: 'Trak is an AI-powered platform that creates personalized learning pathways to help you achieve your career goals. It identifies your skill gaps, provides tailored content, and guides you step by step with dynamic milestones.'
    },
    {
      id: 2,
      number: '02',
      question: 'How does Trak create my learning pathway?',
      answer: 'Trak uses AI to analyze your current skills, career aspirations, and preferences. Based on this, it generates a customized roadmap with learning modules, timelines, and milestones designed for your success.'
    },
    {
      id: 3,
      number: '03',
      question: 'What are the milestones on my pathway?',
      answer: 'Milestones are key achievements along your learning journey that mark your progress. They include skill acquisitions, project completions, and knowledge checkpoints tailored to your specific career goals.'
    },
    {
      id: 4,
      number: '04',
      question: 'Can I change my goals after starting?',
      answer: 'Yes, Trak is designed to be flexible. You can adjust your goals at any time, and the AI will recalibrate your learning pathway to align with your new objectives while preserving relevant progress.'
    },
    {
      id: 5,
      number: '05',
      question: 'Is Trak suitable for beginners?',
      answer: 'Absolutely! Trak is designed for learners at all levels. If you\'re a beginner, it will start with foundational concepts and gradually increase complexity as you progress through your personalized pathway.'
    }
  ];
  
  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };
  
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold mb-2">
        FREQUENTLY
      </h1>
      <h1 className="text-5xl font-bold mb-12">
        ASK <span className="text-green-400">QUESTIONS</span>
      </h1>
      
      <div>
        {faqData.map((item) => (
          <FAQItem
            key={item.id}
            number={item.number}
            question={item.question}
            answer={item.answer}
            isOpen={openItem === item.id}
            toggleOpen={() => toggleItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;