import Knowyourself from "../ImageComponets/landing/section3/Knowyourself";
import CareerPathButton from "./CareerPathButton";

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col justify-center bg-white py-16 gap-24">
      {/* Header section */}
      <div >
      <h1 className="text-4xl font-bold text-center m-4">How it works</h1>
      <p className="text-center mb-16 mt-6 max-w-2xl mx-auto">
        Mobile banking differs from mobile payments, which involves the use of a mobile device
      </p>
      </div>
      

      {/* Journey path with steps - using container with padding */}
      <div className="relative w-full max-w-6xl mx-auto px-8">
        {/* Step 1: Know Yourself - positioned left */}
        <div className="flex gap-24 mb-2">
          <div className="w-1/2 pr-16">
            <div className="flex flex-col items-start gap-6 max-w-md">
              <div>
                <Knowyourself />
              </div>
              <h2 className="text-xl font-bold mb-2">Know Yourself</h2>
              <div>
                <p className="mb-4">
                  Every journey starts with understanding where you are.
                  Trak begins by learning about you: your skills, experiences,
                  career goals, and preferences. Through a quick
                  assessment, we gather the insights needed to tailor a
                  pathway just for you.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>What you do:</strong> Complete a quick skills and career goal survey.
                  </li>
                  <li>
                    <strong>What Trak does:</strong> Analyzes your inputs using AI to identify your skill gaps and opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2">
          </div>
        </div>

        {/* Step 2: See Your Pathway - positioned right */}
        <div className="flex gap-24">
          <div className="w-1/2"></div>
          <div className="w-1/2 pl-16">
            <div className="flex flex-col items-start gap-6 max-w-md">
              <div>
                <Knowyourself />
              </div>
              <h2 className="text-xl font-bold mb-2">See Your Pathway</h2>
              <div>
                <p className="mb-4">
                  A roadmap designed just for you. Once we know where you are and where you want to go, 
                  Trak creates a dynamic, personalized pathway. This isn't a static plan – it evolves with you.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>What you get:</strong> A step-by-step plan with milestones, timelines, and recommended learning modules.
                  </li>
                  <li>
                    <strong>Why it works:</strong> The pathway is uniquely yours, addressing your needs and goals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* set-3 */}
        <div className="flex gap-24 mb-2">
          <div className="w-1/2 pr-16">
            <div className="flex flex-col items-start gap-6 max-w-md">
              <div>
                <Knowyourself />
              </div>
              <h2 className="text-xl font-bold mb-2">Know Yourself</h2>
              <div>
                <p className="mb-4">
                  Every journey starts with understanding where you are.
                  Trak begins by learning about you: your skills, experiences,
                  career goals, and preferences. Through a quick
                  assessment, we gather the insights needed to tailor a
                  pathway just for you.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>What you do:</strong> Complete a quick skills and career goal survey.
                  </li>
                  <li>
                    <strong>What Trak does:</strong> Analyzes your inputs using AI to identify your skill gaps and opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
        {/* Set-4 */}
        <div className="flex gap-24">
          <div className="w-1/2"></div>
          <div className="w-1/2 pl-16">
            <div className="flex flex-col items-start gap-6 max-w-md">
              <div>
                <Knowyourself />
              </div>
              <h2 className="text-xl font-bold mb-2">See Your Pathway</h2>
              <div>
                <p className="mb-4">
                  A roadmap designed just for you. Once we know where you are and where you want to go, 
                  Trak creates a dynamic, personalized pathway. This isn't a static plan – it evolves with you.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>What you get:</strong> A step-by-step plan with milestones, timelines, and recommended learning modules.
                  </li>
                  <li>
                    <strong>Why it works:</strong> The pathway is uniquely yours, addressing your needs and goals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Setp-5 */}
        <div className="flex gap-24 mb-2">
          <div className="w-1/2 pr-16">
            <div className="flex flex-col items-start gap-6 max-w-md">
              <div className="flex flex-row justify-center items-center">
                <div>
                <Knowyourself />
                </div>
                
              </div>
              <h2 className="text-xl font-bold mb-2">Know Yourself</h2>
              <div>
                <p className="mb-4">
                  Every journey starts with understanding where you are.
                  Trak begins by learning about you: your skills, experiences,
                  career goals, and preferences. Through a quick
                  assessment, we gather the insights needed to tailor a
                  pathway just for you.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>What you do:</strong> Complete a quick skills and career goal survey.
                  </li>
                  <li>
                    <strong>What Trak does:</strong> Analyzes your inputs using AI to identify your skill gaps and opportunities.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <CareerPathButton text="Start My Personalized Path Today" link="/pathway" />
      </div>
    </div>
  );
};

export default HowItWorks;


