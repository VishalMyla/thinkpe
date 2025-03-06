"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import HeaderL from "../components/HeaderL";
import AccountInfoForm from "../components/Pathway/AccountInfoForm";
import CareerPathway from "../components/Pathway/CareerPathway";
import ProfileMatch from "../components/Pathway/ProfileMatch";
import StatusSelection from "../components/Pathway/StatusSelection";
import InteractivePathwayComponent from "../components/Pathway/InteractivePathwayComponent";

export default function Pathway() {
  const [step, setStep] = useState(0);

  // Refs for scrolling
  const statusRef = useRef(null);
  const accountRef = useRef(null);
  const profileRef = useRef(null);
  const interactiveRef = useRef(null);

  // Function to scroll to a specific ref
  interface RefObject {
    current: HTMLElement | null;
  }

  const scrollToView = (ref: RefObject) => {
    setTimeout(() => {
      ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200); // Delay ensures component is rendered before scrolling
  };

  // Scroll when step updates
  useEffect(() => {
    if (step === 1) scrollToView(statusRef);
    if (step === 2) scrollToView(accountRef);
    if (step === 3) scrollToView(profileRef);
    if (step === 4) scrollToView(interactiveRef);
  }, [step]);

  // Animation settings (framer-motion)
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <>
      <HeaderL />

      {/* Career Pathway */}
      <CareerPathway
        onSelectCareer={(career) => {
          if (career === "UI/UX Designer") setStep(1);
        }}
      />

      {/* Status Selection */}
      {step >= 1 && (
        <motion.div ref={statusRef} {...fadeInUp}>
          <StatusSelection onStatusSelect={() => setStep(2)} />
        </motion.div>
      )}

      {/* Account Info Form */}
      {step >= 2 && (
        <motion.div ref={accountRef} {...fadeInUp}>
          <AccountInfoForm onContinue={() => setStep(3)} />
        </motion.div>
      )}

      {/* Profile Match */}
      {step >= 3 && (
        <motion.div ref={profileRef} {...fadeInUp}>
          <ProfileMatch onApply={() => setStep(4)} />
        </motion.div>
      )}

      {/* Interactive Pathway Component */}
      {step >= 4 && (
        <motion.div ref={interactiveRef} {...fadeInUp}>
          <InteractivePathwayComponent />
        </motion.div>
      )}
    </>
  );
}
